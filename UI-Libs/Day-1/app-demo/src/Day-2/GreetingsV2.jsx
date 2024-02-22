import { Component } from "react";

class GreetingsV2 extends Component {
  render() {
    console.log("this: ", this);
    return (
      <p>
        Hello {this.props.name}. You are from {this.props.city}
      </p>
    );
  }
}

export default GreetingsV2;
