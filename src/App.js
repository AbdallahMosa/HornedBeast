import React from "react";
import Head from "./compontas/Head";
import Foot from "./compontas/Foot";
import Main from "./compontas/Main";
import JSON from "./compontas/Data.json"
import "bootstrap/dist/css/bootstrap.min.css";
import SelectedBeast from "./compontas/SelectedBeast";
import Form from "./compontas/Form";

// let oneHorns = JSON.filter(element => {
//     return(element.horns ===1)})

//     let twoHorns = JSON.filter(element => {
//         return(element.horns ===2)})


class App extends React.Component {
    constructor (props) {
        super(props);
    this.state={
      show: false,
      select: {}

    };





   
  }
  findBeast = (title) => {
    //   let slectElement = JSON.find((nameBeast) => nameBeast.title === title);
    let slectElement= JSON.find(nameBeast => nameBeast.title === title)
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


  render(){
    return (
      <div>
        <Head />
        <Form  />
        <Main JSON={JSON} findBeast={this.findBeast}  />
        <Foot />
        <SelectedBeast show={this.state.show} handleClose={this.handleClose}  select={this.state.select}/>
        
      </div>
    )
  }
};
export default App
