import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {
  render() {
    return (
    
        <Modal size="md" aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.select.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="img-fluid" src={this.props.select.image_url} alt={this.props.select.title}></img>
            <p> {this.props.select.description}</p>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      
    );
  }
}

export default SelectedBeast;
