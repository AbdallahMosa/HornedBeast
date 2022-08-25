import React from "react";
import Nav from "react-bootstrap/Nav";

class Head extends React.Component {
  render() {
    return (
      <div>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">Home </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="https://github.com/AbdallahMosa">GitHub</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="https://www.facebook.com/abdallah.m.mosa/">
              facebook
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div style={{textAlign: "center", color: "rgb(10 152 226)",}}><h1>ANIMAL APP</h1></div>
      </div>
    );
  }
}
export default Head;
