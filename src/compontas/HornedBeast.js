import React from "react";

class HornedBeast extends React.Component {
render(){
    return(<div>
                <h2>{this.props.tital}</h2>
                <img src={this.props.imageUrl} alt="Cat"></img>
                <p>{this.props.description}</p>



    </div>)
}

}
export default HornedBeast