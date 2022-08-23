import React from "react";
import Head from "./compontas/Head";
import Foot from "./compontas/Foot";
import Main from "./compontas/Main";
import JSON from "./Data.json";
import SelectedBeast from "./compontas/SelectedBeast";

class App extends React.Component{
    onstructor(props){
        super(props)
        this.state ={
            
        }

    }

    render(){
        return(<div>
          <Head />
          <Main JSON={JSON}/>
          <Foot />
          <SelectedBeast />
          <div></div>
          </div>)

    }

}
export default App