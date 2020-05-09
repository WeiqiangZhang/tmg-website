import Admin from './admin';
import { connect } from 'react-redux';
import * as loginActions from 'store/actions/loginAction';

const mapStateToProps = state => {
  return {
    info: state.loginReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(loginActions.login(username, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);