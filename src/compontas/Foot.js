import React from "react";
import Card from 'react-bootstrap/Card';

class foot extends React.Component{
    render(){return(  <Card className="text-center">
    <Card.Header>&copy;Copy Right  abdallah 2022</Card.Header>
    <Card.Body>
      <Card.Text>prepared by <a href="https://github.com/AbdallahMosa">Abdallah Mosa</a></Card.Text>
    </Card.Body>
  </Card>)
      
    }
}

export default foot