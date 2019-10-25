import { connect } from 'react-redux';

import Header from 'src/components/EventDetails/Header';

// action creators
import {
  changeHeartIcon,
  openShareLinksModal,
  closeShareLinksModal,
  getEventDetails,
} from '../../actions/creators';

const mapStateToProps = (state) => ({
  showModal: state.eventIcons.showModal,
  likeIcon: state.eventIcons.likeIcon,
});

const mapDispatchToProps = (dispatch) => ({
  changeHeartIcon: () => dispatch(changeHeartIcon()),
  openShareModal: () => dispatch(openShareLinksModal()),
  closeShareModal: () => dispatch(closeShareLinksModal()),
  getEventDetails: () => dispatch(getEventDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
