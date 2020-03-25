import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import './styles/admin.scss';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  handleChange(type, e) {
    this.setState({[type]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
  }


  render() {
    const {username, password} = this.state;
    return (
      <Container maxWidth="xl">
        <div className="admin">
          <div className="admin__container">
            <form onSubmit={(e) => this.handleSubmit(e)} className="admin__container__form">
              <label className="admin__container__form__label">
                Username:
          <input className="admin__container__form__input" type="text" name="username"
          value={username} onChange={(e) => this.handleChange("username", e)}/>
              </label>
              <label className="admin__container__form__label">
                Password:
          <input className="admin__container__form__input" type="password" name="password" 
          value={password} onChange={(e) => this.handleChange("password", e)} />
              </label>
              <Button className="admin__container__form__submit" type="submit"
               variant="contained" color="primary">Login</Button>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default Admin;
