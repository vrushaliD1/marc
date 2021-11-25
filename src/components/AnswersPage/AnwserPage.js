import React from 'react'
import { connect } from 'react-redux'
import { Container, Grid, Header, Segment } from 'semantic-ui-react'
import './Answer.css'
function AnserPage(props) {
    const {result }= props;

    return (
      <Container className="result" fluid>
        <Header as="h1" >You have { result } { result==="PASSED"?'😉':'😐' } </Header>
        {
          result==="PASSED"?<Header as="h2"> You will shotrly receive the credit </Header> :
          <Header as="h2" > Please try Again after 12 Hours </Header>
        }
        <Header as="h1" > 😄 Have a Good Day </Header>
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
