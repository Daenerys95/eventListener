import { connect } from 'react-redux';
import Datetime from 'src/components/EventDetails/Datetime';

const mapStateToProps = (state) => ({
  dateStart: state.eventDetails.data.date_start,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Datetime);
