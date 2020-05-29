import Login from './login';
import { connect } from 'react-redux';
import * as loginActions from 'store/actions/loginAction';

const mapStateToProps = state => {
  return {
    login: state.loginReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAction: (username, password, history) => dispatch(loginActions.login(username, password, history)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);