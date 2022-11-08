
const express = require("express")
const app = express()
const http = require('http')
const server = http.createServer(app)
const Serverio = require('socket.io')

// const { v4: uuidv4 } = require("uuid")

const logg = (a, b="") => {
  console.log(`+++ ${b}:`, a)
};

// const io = require("socket.io")(server, { cors: { origin: '*' } })
const io = new Serverio(server, { cors: { origin: '*' } })


// const { ExpressPeerServer } = require("peer")
// const peerServer = ExpressPeerServer(server, {
//   debug: true,
// })

// app.use("/peerjs", peerServer)
// app.use(express.static("public"))

app.get("/", (req, res) => {
  // res.redirect(`/${uuidv4()}`)
  res.send('<h1>Hello, world!</h1>')
})

// app.get("/:room", (req, res) => {
//   res.render("room", { roomId: req.params.room })
// })

io.on("connection", (socket) => {
  logg([], 'onConnection')

  socket.on('ping', (arg1) => {
    logg(arg1, 'ping')
  })

  socket.on("join", (props) => {
    logg(props, 'onJoin')
    const { roomId, myId } = props

    // socket.join(roomId)
    // socket.to(roomId).broadcast.emit('joined', { id: myId })
    socket.broadcast.emit('joined', { id: myId })

    socket.on("message", (message) => {
      io.to(roomId).emit("createMessage", message, userName)
    })
  })

  socket.on("join-room", (roomId, userId, userName) => {
    socket.join(roomId)
    socket.to(roomId).broadcast.emit("user-connected", userId)
    socket.on("message", (message) => {
      io.to(roomId).emit("createMessage", message, userName)
    })
  })
})

server.listen(process.env.PORT || 3030, () => logg('listening on port 3030'))
