import React from "react";
import Head from "./compontas/Head";
import Foot from "./compontas/Foot";
import Main from "./compontas/Main";
class App extends React.Component{
    render(){
        return(<div>
          <Head />
          <Main />
          <Foot />
          <div></div>
          </div>)

    }

}
export default App