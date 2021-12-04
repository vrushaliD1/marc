import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Header, Placeholder } from 'semantic-ui-react';
import TokenUnit from './TokenUnit';

function TokenList(props) {
    const {chapters,global} = props;
    const {user,isloading} = global;
    useEffect(()=>{
    },[isloading])
    const ar = Array(5).fill(0);
    return (
        <>
            {!isloading?(
                <Grid className="m-grid">

            <Grid.Row verticalAlign="middle">
                <Grid.Column width={3}>
                    <Header as="h3" >Chapter Name</Header>
            </Grid.Column>
            <Grid.Column> 
                <Header as="h3" >
                Owned
                </Header>
                 </Grid.Column>
            <Grid.Column width={5} verticalAlign="middle" >
                <Header as="h3" > Progress in last attempt </Header>
                </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column width={4}>
                <Header as="h3"  ></Header>
            </Grid.Column>
        </Grid.Row>

                {

                    chapters.map((t,i)=>(
                        <TokenUnit key={i} {...t}/>
                    ))
                }
            </Grid>):(
                ar.map((e,i)=>(
                    <Placeholder fluid key={i}>
                    <Placeholder.Header image>
                          <Placeholder.Line  length="full"/>
                        <Placeholder.Line />
                      </Placeholder.Header>
                        </Placeholder>
                ))
            )
        }
        </>
    )
}
const mapStateToProps  = (state)=>{
    return {
        chapters:state.chapters,
        global:state.global
    }
}
export default connect(mapStateToProps,null)(TokenList)