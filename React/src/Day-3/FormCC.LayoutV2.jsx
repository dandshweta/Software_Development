import { Component } from "react";

class FormCC extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    description: "",
  };

  onInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={this.state.email}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onInputChange}
          />
        </div>
      </div>
    );
  }
}

export default FormCC;
