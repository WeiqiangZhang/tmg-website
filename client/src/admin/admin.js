import React from 'react';
import { Container } from '@material-ui/core';

import './styles/admin.scss';

class Admin extends React.Component {
  render() {
    return (
      <Container maxWidth="xl">
        <div className="admin">
          Hello World
        </div>
      </Container>
    );
  }
}

export default Admin;
