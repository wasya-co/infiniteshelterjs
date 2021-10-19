
import { Capacitor } from '@capacitor/core'
import { PushNotifications } from '@capacitor/push-notifications'
import { Toast } from "@capacitor/toast"
import { ethers } from 'ethers'
import React, { Fragment as F, useContext, useEffect, useState } from "react"
import {
  IonButton, IonButtons,
  IonCard, IonCardContent, IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonLabel, IonListHeader, IonList,
  IonMenuButton,
  IonPage,
  IonText, IonTitle, IonToolbar,
} from '@ionic/react'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import { FbLogin, Logout, PasswordLogin } from "./"
import { C, logg, logg2, TwofoldContext } from "$shared"
import Greeter from '$src/artifacts/contracts/Greeter.sol/Greeter.json'
import Token from '$src/artifacts/contracts/Token.sol/Token.json'

const isPushNotificationsAvailable = Capacitor.isPluginAvailable('PushNotifications')

// Update with the contract address logged out to the CLI when it was deployed
const greeterAddress = "0x4bE9765Ca063E73E0aaEd227fd6731473508DbE0"
const tokenAddress = "0xffa52d00685aC60e65457922aEae2c2783c0cB0E"


const Account = (props) => {
  logg(props, 'Account')

  const { currentUser, setCurrentUser } = useContext(TwofoldContext)
  const [ greeting, setGreetingValue ] = useState("")
  const [notifications, setNotifications] = useState([])

  const register = () => {
    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register()

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration', (token) => {
      showToast('Push registration success')
    })

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError', (error) => {
      alert('Error on registration: ' + JSON.stringify(error))
    })

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived', (_n) => {
      logg2(n, 'pushNotificationReceived')
      const n = _n
      setNotifications((ns) => {
        logg2(n2, 'setNofitications')
        return [...ns, { id: n.data.id, title: n.data.title, body: n.data.body, type: 'foreground' }]
      })
    })

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed', ({ nofitication: n }) => {
      logg2(n, 'pushNotificationActionPerformed')
      setNotifications((ns) => {
        logg2(n2, 'setNofitications')
        return [...ns, { ...n, type: 'action' }]
      })
    })
  }

  const showToast = async (msg) => await Toast.show({ text: msg })

  useEffect(() => {
    if (!isPushNotificationsAvailable) { return }

    PushNotifications.checkPermissions().then((res) => {
        if (res.receive === 'granted') {
          register()
        } else {
          PushNotifications.requestPermissions().then((res) => {
            if (res.receive === 'denied') {
              showToast('Push Notification permission denied')
            } else {
              showToast('Push Notification permission granted')
              register()
            }
          })
        }
      })
  }, [])

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  // call the smart contract, read the current greeting value
  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      try {
        const data = await contract.greet()
        setGreetingValue(data)
        // console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }

  async function getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, Token.abi, provider)
      const balance = await contract.balanceOf(account);
      console.log("Balance: ", balance.toString());
    }
  }

  // call the smart contract, send an update
  async function setGreeting() {
    if (!greeting) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      const transaction = await contract.setGreeting(greeting)
      await transaction.wait()
      fetchGreeting()
    }
  }

  async function sendCoins() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, Token.abi, signer);
      const transation = await contract.transfer(userAccount, amount);
      await transation.wait();
      console.log(`${amount} Coins successfully sent to ${userAccount}`);
    }
  }

  return <IonPage>
    <IonHeader>
      <IonToolbar color="primary">
          <IonTitle slot="start"> Push Notifications</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <img src="/assets/accounts/default-avatar.png" alt="profile pic" />

              { /* NFT */ }
              <div>
                <button onClick={fetchGreeting}>Fetch Greeting</button>
                <br />
                <button onClick={setGreeting}>Set Greeting</button>
                <br />
                <input value={greeting} onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" />
              </div>
              <hr />
              <div>
                <button onClick={getBalance}>Get Balance</button>
                <br />
                <button onClick={sendCoins}>Send Coins</button>
                <br />
                <input onChange={e => setUserAccount(e.target.value)} placeholder="Account ID" />
                <br />
                <input onChange={e => setAmount(e.target.value)} placeholder="Amount" />
              </div>

            </Grid>
            <Grid item xs={6}>
              { !!currentUser
                && <F>
                  <h4>{currentUser.email}</h4>
                  <ul>
                    <li><Link to={"/en/account/my/galleries"} >My Galleries</Link></li>
                    <li><a onClick={() => props.history.push("/en/account/my/videos")}>My Videos</a></li>
                    <li><Logout /></li>
                  </ul>
                </F>
                || <F>
                  <h4>Not logged in 3</h4>
                  <FbLogin />
                  <br /><br />
                  <PasswordLogin />

                </F> }
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <hr />
      { /* push notifications */ }
      { notifications.length && <IonList>
        { notifications.map((notif) => <IonItem key={notif.id}>
          <IonLabel>
            <IonText><h3 className="notif-title">{ notif.title }</h3></IonText>
            <p>{ notif.body }</p>
            { notif.type==='foreground' && <p>This data was received in foreground</p> }
            { notif.type==='action' && <p>This data was received on tap</p> }
          </IonLabel>
        </IonItem>) }
      </IonList> || 'no notifications so far' }

    </IonContent>
    <IonFooter>
      <IonToolbar>
        { isPushNotificationsAvailable && <IonButton
          color="success" expand="full" onClick={register}>Register for Push</IonButton>
          || <div><h1>Push notifications not available</h1></div> }
      </IonToolbar>
    </IonFooter>
  </IonPage>
}

export default Account
