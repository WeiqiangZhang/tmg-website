import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux';

const PrivateRoute = (props) => (
  <Route
    render={() => props.login.authenticated || localStorage.getItem('jwt')
      ? <div>{props.children}</div>
      : <Redirect to={{ pathname: '/login' }} />}
  />
);

const mapStateToProps = state => {
  return {
    login: state.loginReducer
  };
};

export default connect(mapStateToProps, null, null, {pure: false})(PrivateRoute);
