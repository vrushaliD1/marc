import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import { Button, Container, Grid, Header, Segment } from 'semantic-ui-react'
import './Answer.css'
function AnserPage(props) {
    const {result }= props;
    const history = useHistory();

    const handleClick= ()=>{
          history.push("/");
    }
    useEffect(() => {
      if (document.referrer.length == 0) {
        history.push("/");
      }
    });

    return (
      <Container className="result" fluid>
        <Header as="h1" >You have { result } { result==="PASSED"?'😉':'😐' } </Header>
        {
          result==="PASSED"?<Header as="h2"> You will shortly receive the credit </Header> :
          <Header as="h2" > Please try Again after 12 Hours </Header>
        }
        <Header as="h1" > 😄 Have a Good Day </Header>
        <Button onClick={handleClick}>Go To Home</Button>
      </Container>
    )
}

const mapStateToProps = (state)=>{
  return {
    questions:state.chapter.questions,
    result:state.answers.result
  }
}


export default connect(mapStateToProps,null)(AnserPage)
