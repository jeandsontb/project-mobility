const initialState = {
  buttonTemp: '',
  package: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'setTemp':
      return {...state, buttonTemp: action.payload.buttonTemp};
      // eslint-disable-next-line no-unreachable
      break;
    case 'setPakage':
      return {...state, package: action.payload.package};
      // eslint-disable-next-line no-unreachable
      break;

    default:
  }

  return state;
};
