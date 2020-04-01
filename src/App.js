import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Signin from "./Signin";
import Movielist from "./Movielist";
import Sarileru from "./Sarileru";
// import {}

class App extends React.Component {
  state = {
    isLogged: false,
    username: "",
    password: ""
  };
  handleSignin = () => {
    const { username, password } = this.state;
    if (username === "demo" && password === "demo") {
      this.setState({
        isLogged: true
      });
    }
  };
  handleChangeText = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <div className="logo" />
​
        <BrowserRouter>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path='/Sarileru' component={Sarileru} />
          <Route
            exact
            path="/Movielist"
            render={props => {
              if (this.state.isLogged) {
                return <Movielist />;
              } else {
                return <Redirect to="/signin" />;
              }
            }}
          />
          <Route
            exact
            path="/signin"
            render={props => {
              return (
                <Signin
                  {...props}
                  isLogged={this.state.isLogged}
                  handleChangePassword={this.handleChangePassword}
                  handleChangeText={this.handleChangeText}
                  handleSignin={this.handleSignin}
                />
              );
            }}
          />
        </BrowserRouter>
      </div>
    );
  }
}
export default App