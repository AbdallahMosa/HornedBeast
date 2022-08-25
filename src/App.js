import React from "react";
import Head from "./compontas/Head";
import Foot from "./compontas/Foot";
import Main from "./compontas/Main";
import JSON from "./compontas/Data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedBeast from "./compontas/SelectedBeast";
import FormUsres from "./compontas/Form";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      select: {},
      all : JSON,
      
      numHorns: 0,
    };
  }
  findBeast = (title) => {
    //   let slectElement = JSON.find((nameBeast) => nameBeast.title === title);
    let slectElement = JSON.find((nameBeast) => nameBeast.title === title);
    this.setState({
      show: true,
      select: slectElement,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  updateHorns = (event) => {
    this.setState({
      numHorns: event.target.value,
    });
let arrayoFobj =[];
arrayoFobj= JSON.filter((Element) => {
      if (parseInt(event.target.value) === 1) {
        return (Element.horns===parseInt(event.target.value));
      }
      if (parseInt(event.target.value) === 2) {
        return (Element.horns===parseInt(event.target.value));
      }
      
      if (parseInt(event.target.value) >= 3) {
        return (Element.horns===parseInt(event.target.value))
      } else {
        return true;
      }
    });

    this.setState({
      all: arrayoFobj,
    });
  };

  render() {
    return (
      <div style={{backgroundColor :"#0083ff17"}}>
        <Head />
        <FormUsres updateHorns={this.updateHorns} numHorns = {this.state.numHorns} />
        <Main JSON={this.state.all} findBeast={this.findBeast} />
        <Foot />
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          select={this.state.select}
        />
      </div>
    );
  }
}
export default App;
