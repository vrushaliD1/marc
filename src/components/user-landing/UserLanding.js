import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Container, Header } from 'semantic-ui-react';
import Web3 from 'web3';
import { abi, home, tokenContractAddress } from '../Data';
import TokenList from './List/TokenList';
import { LOAD_USER } from '../../store/constants'
import { LOAD_CHAPTERS } from '../../store/chapters/constants';
function UserLanding(props) {
    const { fetchUser, fetchChapters, chapters } = props;
    const [userAddress, setuserAddress] = useState(null);

    useEffect(() => {
        (async () => {
            await metaMaskInit();
        })()
    }, [])

    useEffect(() => {
        if (userAddress && userAddress !== '') {
            fetchUser(userAddress);
            fetchChapters(userAddress);
        }
    }, [userAddress])

    const metaMaskInit = async () => {
        const ethereum = window.ethereum;
        if (typeof ethereum !== 'undefined') {
            let userAddress = ethereum.selectedAddress;
            setuserAddress(userAddress);
        } else {
            alert("Install Metamask Extenions!")
        }
        if (ethereum && userAddress) {
            const ethereum = window.ethereum;
            try {
                let address = ethereum.selectedAddress;
                const myWeb3 = new Web3(Web3.givenProvider);
                const contract = await new myWeb3.eth.Contract(abi, tokenContractAddress);
                // const t = await contract.methods.setApprovalForAll(tokenContractAddress,true).call();
            } catch (err) {
            }
        } else if (ethereum) {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            let address = ethereum.selectedAddress;
            setuserAddress(address)
        }
    }
    const { shouldRedirect } = props;
    if (!shouldRedirect) {
        return (
            <Container >
                <Header color="teal" dividing textAlign="center" size="huge" >Wallet Id : {userAddress}</Header>
                <TokenList />
            </Container>
        )
    } else {
        window.location.href = home;
        return <></>
    }
}
const mapStateToProps = (state) => {
    return {
        chapters: state.chapters,
        user: state.global.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (data) => dispatch({ type: LOAD_USER, payload: data }),
        fetchChapters: (data) => dispatch({ type: LOAD_CHAPTERS, payload: data })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserLanding)
