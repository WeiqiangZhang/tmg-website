import CbiInfo from './cbiInfo';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    info: state.infoReducer
  };
};

export default connect(mapStateToProps, null)(CbiInfo);