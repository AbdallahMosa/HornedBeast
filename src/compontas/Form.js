import React from "react";
// import form from "react-bootstrap/Form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class FormUsres extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };

    
  }
  render() {
    return (
      <div
          style={{
            margin : "auto" ,
            textAlign: "center",
         
            width: "50rem",
            padding: "10px",
            fontSize: "25px",
            
          }}
        >
          
            <Form.Group className="mb-3">
              {/* <Form.Label htmlFor="select">Numbers of Horns </Form.Label> */}
              <Form.Select
                id="select"
                style={{ fontSize: "25px", textAlign: "center" }}
                onClick={this.props.updateHorns}
              >
                <option value={0}>Please Choose Number Of Horns</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
                <option value={100}>more..</option>
              </Form.Select>
             
            </Form.Group>
           
         
        </div>
    );
  }
}

export default FormUsres;
