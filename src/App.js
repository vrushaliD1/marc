
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from 'semantic-ui-react';
import './App.css';
import GameRoom from './components/GameRoom/GameRoom';
import UserLanding from './components/user-landing/UserLanding';
import store from "./store/store";
import { Provider } from 'react-redux'
import AnserPage from "./components/AnswersPage/AnwserPage";
import Web3 from "web3";
import React , { useEffect, useState } from "react";
import { abi, tokenContractAddress, tokens } from "./components/Data";

function App() {
  const [userAddress, setuserAddress] = useState('');
  const [shouldRedirect, setRedirect] = useState(false);
  useEffect(() => {
    (async () => {
      const ethereum = window.ethereum;
      if (typeof ethereum !== 'undefined') {
        let userAddress = ethereum.selectedAddress;
        setuserAddress(userAddress);
      } else {
        alert("Install Metamask Extenions!")
      }
      if (ethereum && userAddress) {
        let myWeb3 = new Web3(window.ethereum);
        let contract = await new myWeb3.eth.Contract(abi, tokenContractAddress);
        let balances = [];
        for (let row of tokens) {
          let temp = await contract.methods.balanceOf(userAddress, row.token).call()
          if (parseInt(temp) > 0) {
            balances.push(parseInt(temp));
          }
        }
        const shouldRedirect = balances.filter(t => t > 0)?.length > 0;
        setRedirect(shouldRedirect)
      } else if (ethereum) {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        let address = ethereum.selectedAddress;
        setuserAddress(address)
      }
    })()
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Container fluid >
          <Switch>
            <Route path="/game/:id" component={GameRoom}>
            </Route>
            <Route path="/answers">
              <AnserPage />
            </Route>
            <Route path="/">
              <UserLanding shouldRedirect={shouldRedirect} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
