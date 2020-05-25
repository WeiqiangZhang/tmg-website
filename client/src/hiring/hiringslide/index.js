import HiringSlide from './hiringslide';
import { connect } from 'react-redux';
import * as carouselActions from 'store/actions/carouselAction';

const mapStateToProps = state => {
  return {
    carousel: state.carouselReducer
  };
};

export default connect(mapStateToProps, null)(HiringSlide);