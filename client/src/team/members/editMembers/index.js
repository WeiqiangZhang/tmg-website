import { connect } from 'react-redux';
import * as teamActions from 'store/actions/teamAction';
import EditMembers from './editMembers';

const mapDispatchToProps = dispatch => {
  return {
    // get: () => dispatch(carouselActions.getCarousel()),
    upload: (image, role) => dispatch(teamActions.uploadMember(image, role)),
    // editCarousel: (_id, image, blurb, name, role) => dispatch(carouselActions.editCarousel(_id, image, blurb, name, role)),
    // deleteCarousel: (_id) => dispatch(carouselActions.deleteCarousel(_id)),
  }
}

const mapStateToProps = state => {
  return {
    login: state.loginReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMembers);