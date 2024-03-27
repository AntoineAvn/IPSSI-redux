const initialValue = {
  value: 0,
  changes: 0,
  lastUpdated: null,
}

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: state.value + 1,
        changes: state.changes + 1,
        lastUpdated: new Date().toString(),
      };
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - 1,
        changes: state.changes + 1,
        lastUpdated: new Date().toString(),
      };
    case 'RESET':
      return {
        ...state,
        value: 0,
        changes: state.changes + 1,
        lastUpdated: new Date().toString(),
      };
    default:
      return state;
  }
};

export default counterReducer;