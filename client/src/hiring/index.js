import Hiring from './hiring';
import { connect } from 'react-redux';
import * as carouselActions from 'store/actions/carouselAction';

const mapDispatchToProps = dispatch => {
  return {
    upload: (image, blurb, name, role) => dispatch(carouselActions.uploadCarousel(image, blurb, name, role)),
  }
}

export default connect(null, mapDispatchToProps)(Hiring);