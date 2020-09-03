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
function add(num) {
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

const store = createStore(
  allReducers,
  { counter: initialState, user: userInitialState },
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

console.log(store, store.getState());
store.dispatch(add(3));
console.log(store, store.getState());

// store.subscribe(() => {
//   console.log(store.getState());
// });
store.dispatch(addAsync(5));
export default store;
