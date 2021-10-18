
import { ethers } from 'ethers'
import React, { Fragment as F, useContext, useEffect, useState } from "react"
import { IonPage, IonContent } from "@ionic/react"
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'


import { FbLogin, Logout, PasswordLogin } from "./"
import { C, logg, TwofoldContext } from "$shared"
import Greeter from '$src/artifacts/contracts/Greeter.sol/Greeter.json'

// Update with the contract address logged out to the CLI when it was deployed
const greeterAddress = "your-contract-address"


const Account = (props) => {
  logg(props, 'Account')

  const { currentUser, setCurrentUser } = useContext(TwofoldContext)

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
        console.log('data: ', data)
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

  return (<F>

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
                <input onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" />
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
                  <h4>Not logged in</h4>
                  <FbLogin />
                  <br /><br />
                  <PasswordLogin />

                </F> }
            </Grid>
          </Grid>
        </Grid>
      </Grid>

  </F>);
}

export default Account;
