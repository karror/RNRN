const personal = (state = {
  phone: '',
  token: '',
}, action) => {
  switch (action.type) {
    case 'SET_REGISTER_DATA':
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default personal;
