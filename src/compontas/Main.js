import React from "react";
import HornedBeast from "./HornedBeast";
// import Cat from './assets/cat.jpg'
// import JSON from "./Data.json";
import Row from "react-bootstrap/Row";

// const allData = this.props.JSON.map((element) => (
//   <HornedBeast
//     Title={element.title}
//     ID={element._id}
//     Img={element.image_url}
//     Des={element.description}
//     Horne={element.horns}
//     Name={element.keyword}
//     findBeast={this.props.findBeast}
//   />
// ));

class Main extends React.Component {
  render() {
    return (
      <Row xs={1} md={4} className="g-4">
        {this.props.JSON.map((element) => {
          return (
            <HornedBeast
            title={element.title}
              ID={element._id}
              Img={element.image_url}
              Des={element.description}
              Horne={element.horns}
              Name={element.keyword}
              findBeast={this.props.findBeast}
            />
          );
        })}
      </Row>
    );
    // <div>
    //         {/* <HornedBeast tital='Cat' imageUrl={Cat} description ='a pet and cute animal '/> */}
    /* // </div> */
  }
}

export default Main;
