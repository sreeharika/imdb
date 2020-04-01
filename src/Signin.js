import React from "react";
import { Redirect } from "react-router-dom";

class Signin extends React.Component {
  render() {
    if (this.props.isLogged === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <input type="text" onChange={this.props.handleChangeText} />
        <input type="password" onChange={this.props.handleChangePassword} />
        <button onClick={this.props.handleSignin}>Signin..!</button>
      </div>
    );
  }
}

export default Signin;