import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const initialState = {
  count: 0,
};
const userInitialState = {
  username: 'jeck',
  age: '16',
};

const ADD = 'ADD';
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + (action.num || 1) };
    default:
      return state;
  }
}

const UPDATE_USERNAME = 'UPDATE_USERNAME';
function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.name,
      };

    default:
      return state;
  }
}

const allReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

// action creator
export function add(num) {
  return {
    type: ADD,
    num,
  };
}

function addAsync(num) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(add(num));
    }, 1000);
  };
}

// console.log(store, store.getState());
// store.dispatch(add(3));
// console.log(store, store.getState());

// // store.subscribe(() => {
// //   console.log(store.getState());
// // });
// store.dispatch(addAsync(5));
export default function initialStore(state) {
  const store = createStore(
    allReducers,
    Object.assign({}, { counter: initialState, user: userInitialState }, state),
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );
  return store;
}
