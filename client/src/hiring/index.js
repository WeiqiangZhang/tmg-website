import Hiring from './hiring';
import { connect } from 'react-redux';
import * as carouselActions from 'store/actions/carouselAction';

const mapDispatchToProps = dispatch => {
  return {
    get: () => dispatch(carouselActions.getCarousel()),
    upload: (image, blurb, name, role) => dispatch(carouselActions.uploadCarousel(image, blurb, name, role)),
    editCarousel: (_id, image, blurb, name, role) => dispatch(carouselActions.editCarousel(_id, image, blurb, name, role)),
  }
}

const mapStateToProps = state => {
  return {
    carousel: state.carouselReducer,
    login: state.loginReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hiring);