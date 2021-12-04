import Web3 from "web3";
import { tokenContractAddress,abi} from "../Data";

export const isApprovedForAll = async(userAddress)=>{
    let myWeb3 = new Web3(window.ethereum); 
    let contract = await new myWeb3.eth.Contract(abi,tokenContractAddress);
    let t  = await  contract.methods.isApprovedForAll(userAddress,true).call();
}
