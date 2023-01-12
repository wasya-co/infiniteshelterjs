
// import io from 'socket.io-client' // nope, I inject my own via head.script tag
import { Peer } from "peerjs"
import PropTypes from 'prop-types'
import React, { useContext, useEffect, useRef, useState } from 'react'
// import uuid from 'react-uuid'
import styled from 'styled-components'

import {
  logg,
} from '$shared'

const W0 = styled.div``;

const peer = new Peer()
const isVideo = false
const isAudio = false
const roomId = "ce7abac6-5fa5-11ed-9b6a-0242ac120002" // const thisId = uuid()


/**
 * ConferenceRoom
 *
 * From: https://peerjs.com/docs/#start
 * From: https://socket.io/get-started/chat
 * From: https://github.com/itstaranarora/video-chat-v1/blob/master/public/script.js#L49
 * From: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
**/
const ConferenceRoom = (props) => {
  logg(props, 'ConferenceRoom')

  const socket = io('ws://localhost:3030')
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [lastPong, setLastPong] = useState(null)
  const [myId, setMyId] = useState()
  logg(myId, 'myId')
  let conn
  const videoGridRef = useRef()
  const myVideo = document.createElement("video")
  myVideo.muted = true
  let myVideoStream

  useEffect(() => {
    if (!isConnected) { return () => { } }

    peer.on("open", (id) => {
      logg(id, 'peer onOpen Id')

      setMyId(id)
      conn = peer.connect(roomId)
      socket.emit('join', { roomId, myId: id, })

      // conn.send("Ping")
    })

    // receive
    peer.on("connection", (conn) => {
      logg(conn, 'peer onConnection')

      conn.on("data", (data) => {
        logg(data, 'Peer OnData')
      })

      conn.on("open", () => {
        logg([], 'peer OnOpen')

        conn.send("Pong")
      })
    })

    // answer
    peer.on("call", (call) => {
      logg(call, 'peer OnCall')

      navigator.mediaDevices.getUserMedia(
        { video: isVideo, audio: isAudio },
        (stream) => {
          call.answer(stream) // Answer the call with an A/V stream.
          call.on("stream", (remoteStream) => {
            logg('show the stream in a <video> element 2')
            // Show stream in some <video> element.
          })
        },
        (err) => {
          console.error("Failed to get local stream 2", err)
        },
      )
    })

    return () => { }
  }, [isConnected])




  const cleanupCb = () => {
    socket.off('connect')
    socket.off('disconnect')
    socket.off('pong')
    socket.off('joined')
  }
  useEffect(() => {

    socket.on('connect', () => {
      // logg('socket connected')
      setIsConnected(true)
    });

    if (!myId) { return cleanupCb }

    socket.on('disconnect', () => {
      logg('socket disconnected')

      setIsConnected(false)
    });

    socket.on('pong', () => {
      // logg('socket pong')

      setLastPong(new Date().toISOString())
    });

    socket.on('joined', (props) => {
      logg(props, 'socket OnJoined')
      const { id } = props
      if (id !== myId) {

        logg([], 'Calling...')

        // call
        navigator.mediaDevices.getUserMedia(
          { video: isVideo, audio: isAudio },
          (stream) => {
            const call = peer.call(id, stream)
            call.on("stream", (remoteStream) => {
              logg('show the stream in a <video> element')
              // Show stream in some <video> element.
            })
          },
          (err) => {
            console.error("Failed to get local stream", err)
          },
        )

      }
    })

    return cleanupCb
  }, [myId])

  const sendPing = () => {
    socket.emit('ping')
  }



  const connectToNewUser = (userId, stream) => {
    const call = peer.call(userId, stream);
    const video = document.createElement("video");
    call.on("stream", (userVideoStream) => {
      addVideoStream(video, userVideoStream);
    });
  };
  let myStream
  let refAudio = useRef()
  const addVideoStream = (video, stream) => {
    // video.srcObject = stream
    if (refAudio.current) {
      refAudio.current.srcObject = stream
    }
    myStream = stream
    video.addEventListener("loadedmetadata", () => {
      video.play();
      // React.findDOMNode(videoGridRef.current).append(video);
    });
  };
  navigator.mediaDevices.getUserMedia(
    { video: isVideo, audio: isAudio },
  ).then((stream) => {
    myVideoStream = stream
    addVideoStream(myVideo, stream)

    peer.on("call", (call) => {
      call.answer(stream);
      const video = document.createElement("video");
      call.on("stream", (userVideoStream) => {
        addVideoStream(video, userVideoStream);
      });
    });

    socket.on("user-connected", (userId) => {
      connectToNewUser(userId, stream);
    })
  })

  return <W0>
    <p>myId: {myId} Connected: {'' + isConnected}</p>
    <p>
      Last pong: {lastPong || '-'}
      <button onClick={sendPing}>Send ping</button>
    </p>

    <div id="videoGrid" ref={videoGridRef}
      style={{ width: '500px', height: '400px', border: '1px solid red' }}
    >
      { /* <audio controls volume="true" autoPlay ref={audio => { this.audio = audio }} /> */ }
      <audio controls volume="true" autoPlay ref={refAudio} />
    </div>

  </W0>
}
ConferenceRoom.propTypes = {} // none
export default ConferenceRoom




