import Info from './info';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    info: state.infoReducer
  };
};

export default connect(mapStateToProps, null)(Info);