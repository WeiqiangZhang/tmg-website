import React from "react";
import { Container, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import "./styles/login.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleChange(type, e) {
    this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    const { username, password } = this.state;
    const { history } = this.props;
    e.preventDefault();
    this.props.loginAction(username, password, history);
  }

  render() {
    const { username, password } = this.state;
    const { login } = this.props;
    return (
      <Container maxWidth="xl">
        <div className="login">
          <div className="login__container">
            <form
              onSubmit={(e) => this.handleSubmit(e)}
              className="login__container__form"
            >
              <label className="login__container__form__label">
                Username:
                <input
                  className="login__container__form__input"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => this.handleChange("username", e)}
                />
              </label>
              <label className="login__container__form__label">
                Password:
                <input
                  className="login__container__form__input"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => this.handleChange("password", e)}
                />
              </label>
              <Button
                className="login__container__form__submit"
                type="submit"
                variant="contained"
                color="primary"
                disabled={login.loading}
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Login);
