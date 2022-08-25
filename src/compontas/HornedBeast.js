import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";



class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Number: 0,
    };
  }

  incremantNum = () => {
    this.setState({
      Number: this.state.Number + 1,
    });
  };

  render() {
    return (
      // <div>
      //             <h2>{this.props.tital}</h2>
      //             <img src={this.props.imageUrl} alt="Cat"></img>
      //             <p>{this.props.description}</p>

      // </div>
      <Col>
        <Card style={{ width: "18rem" , backgroundColor : "#2844bf57" }} class="card">
          <Card.Img
            variant="top"
            src={this.props.Img}
            onClick={this.incremantNum}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
       
              {this.props.Des}
              <div>Number : {this.state.Number}</div>
              <div>number of horns: {this.props.Horne}</div>
              <div>The name : {this.props.Name}</div>
            </Card.Text>
            <Button
            onClick={() => {
              this.props.findBeast(this.props.title); }}>Select</Button>

          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default HornedBeast;
