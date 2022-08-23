import React from "react";
import HornedBeast from "./HornedBeast";
// import Cat from './assets/cat.jpg'
import JSON from "./Data.json";
import Row from 'react-bootstrap/Row';

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
        return(
            
            <Row xs={1} md={3} className="g-4">
            {allData} </Row>)
            // <div>
        //         {/* <HornedBeast tital='Cat' imageUrl={Cat} description ='a pet and cute animal '/> */}       
        /* // </div> */
        
    }

        
    };
   
export default Main ;