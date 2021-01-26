import Revive from './revive';
import { connect } from 'react-redux';
import * as reviveAction from 'store/actions/reviveAction';

const mapStateToProps = state => {
  return {
    revive: state.reviveReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetGifDone: () => dispatch(reviveAction.setGifDone())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Revive);