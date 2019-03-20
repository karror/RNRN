import { connect } from 'react-redux';
import Register from './registerCmp';
import { setRegisterData } from '../../actions';

const mapStateToProps = (state) => ({
  phone: state.register.phone,
  token: state.register.token
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setToReg: data => dispatch(setRegisterData(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(Register);
