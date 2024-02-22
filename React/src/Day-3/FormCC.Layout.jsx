import { Component } from "react";

class FormCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    console.log("OnInputChange", { name, value });

    this.setState(
      {
        [name]: value,
      },
      () => {
        // After State update
      }
    );
  };

  render() {
    console.log();
    return (
      <div>
        <div>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onInputChange}
          />
        </div>
      </div>
    );
  }
}

export default FormCC;
