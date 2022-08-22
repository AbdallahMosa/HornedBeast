import React from "react";
import HornedBeast from "./HornedBeast";
import Cat from './assets/cat.jpg'
class Main extends React.Component{
    render(){
        return(<div>
                <HornedBeast tital='Cat' imageUrl={Cat} description ='a pet and cute animal '/>
              
        </div>)
    }
}
export default Main 