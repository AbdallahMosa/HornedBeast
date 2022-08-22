import React from "react";
import HornedBeast from "./HornedBeast";
// import Cat from './assets/cat.jpg'
import JSON from "./Data.json";

  const allData =JSON.map(element =>
        <HornedBeast  
            Title = {element.title}
            ID = {element._id}
            Img = {element.image_url}
            Des = {element.description}
            Horne = {element.horns}
            Name ={element.keyword}
        /> 
  )
  

        class Main extends React.Component{

   render(){
        return(allData )
            // <div>
        //         {/* <HornedBeast tital='Cat' imageUrl={Cat} description ='a pet and cute animal '/> */}       
        /* // </div> */
        
    }

        
    };
   
export default Main ;