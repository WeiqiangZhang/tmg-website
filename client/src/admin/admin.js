import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import './styles/admin.scss';

class Admin extends React.Component {
  render() {
    return (
      <Container fixed>
        <div className="admin">
          <div className="admin__container">
            <form className="admin__container__form">
              <label className="admin__container__form__label">
                Username:
          <input className="admin__container__form__input" type="text" name="username" />
              </label>
              <label className="admin__container__form__label">
                Password:
          <input className="admin__container__form__input" type="text" name="password" />
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
