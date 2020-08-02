import Cbi from './cbi';
import { connect } from 'react-redux';
import * as infoActions from 'store/actions/infoAction';

const mapDispatchToProps = dispatch => {
  return {
    onSetInfo: (info) => dispatch(infoActions.setInfo(info))
  }
}


export default connect(null, mapDispatchToProps)(Cbi);