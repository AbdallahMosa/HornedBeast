import React from "react";
import Card from 'react-bootstrap/Card';

class foot extends React.Component{
    render(){return(  <Card style={{backgroundColor :"#0083ff17"}} className="text-center">
    <Card.Header>&copy;Copy Right AbdallahMosa</Card.Header>
    <Card.Body>
      <Card.Text>prepared by <a href="https://github.com/AbdallahMosa">Abdallah Mosa</a></Card.Text>
    </Card.Body>
  </Card>)
      
    }
}
//backgroundColor :"#0083ff17"
export default foot