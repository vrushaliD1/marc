import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Grid, GridColumn, Progress } from 'semantic-ui-react';
import spacetime from 'spacetime';
import Web3 from 'web3'
import { abi, tokenContractAddress,client_token } from '../../Data';

function TokenUnit(props) {
    const { user,fetchQuestion,progress,lastAttempt,count} = props;
    const { href,title,id,token,_id} = props.chapter;
    const history = useHistory();
    const [now,setNow] = useState(null);
    const {userAddress} = user;

    useEffect(()=>{
        let t = setTimeout(()=>{
            setNow(spacetime.now());
        },1000);
        return ()=>{
            clearTimeout(t);
        }
    },[now])

    const canPlay = ()=>{
        if(lastAttempt && now){
            let dt = spacetime(lastAttempt,'utc');
            let nextAttempt = dt.add(12,'hour');
            if(now.isAfter(nextAttempt)){
                return false;
            }else{
                return true;
            }
        }
        return false;   
    }

    const beforeCooldown = ()=>{
        if(lastAttempt&&now){
            let dt = spacetime(lastAttempt,'utc');
            let nextAttempt = dt.add(12,'hour');
            if(now.isAfter(nextAttempt)){
                return ''
            }else{
                return 'Cool Down ' +now.since(nextAttempt).precise
            }
        }
        return ''
    }
    const handlePlay = async(e)=>{
        // const web3 = new Web3(Web3.givenProvider);
        // const contract = new web3.eth.Contract(abi,tokenContractAddress);
        try{
            // const result1 = await contract.methods.setApprovalForAll(tokenContractAddress,true).send({from:userAddress});
            // const result2 = await contract.methods.safeTransferFrom(userAddress,client_token,token,1,0).call();
            // fetchQuestion(id);
            history.push(`/game/${_id}`)
        }catch(err){
            alert(err.message)
        }
    }
    return (
        <Grid.Row verticalAlign="middle">
            <Grid.Column width={3}>
                <a href={href}>{title}</a>
            </Grid.Column>
            <Grid.Column>{count}</Grid.Column>
            <Grid.Column width={5} >{ <Progress color="blue" value={ parseFloat( progress*100).toPrecision(2)} total={100}  progress='percent' />}</Grid.Column>
            <GridColumn >
                {/* <Link to={`/game/${id}`} > */}
                    <Button disabled={canPlay()} primary size="mini" content="Play" onClick={handlePlay}>
                    </Button>
                {/* </Link> */}
            </GridColumn>
            <GridColumn width={4}>
                {beforeCooldown()}
            </GridColumn>
        </Grid.Row>
    )
}
const mapStateToProps  = (state)=>{
    return {
        user:state.global.user || { userAddress:''},
    }
}

export default connect(mapStateToProps,null)(TokenUnit);