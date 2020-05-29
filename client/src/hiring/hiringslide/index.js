import HiringSlide from './hiringslide';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    carousel: state.carouselReducer
  };
};

export default connect(mapStateToProps, null)(HiringSlide);