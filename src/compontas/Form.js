import React from "react";
// import form from "react-bootstrap/Form";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };

    
  }
  render() {
    return (
      <>
        <Form.Group className="mb-3">
          <Form.Label>Plaese Select The number of Hornes </Form.Label>
          <Form.Select disabled>
            <option>One</option>
            <option>two</option>
            <option>more</option>

          </Form.Select>
        </Form.Group>
      </>
    );
  }
}

export default Form;
