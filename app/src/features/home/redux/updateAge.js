// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_UPDATE_AGE,
} from './constants';

export function updateAge(e) {
  let age = e.target.value;
  if (age < 0) {
    age = 0;
  } else if (age > 100) {
    age = 100;
  }
  return {
    type: HOME_UPDATE_AGE,
    age: age
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_UPDATE_AGE:
      console.log(action);
      return {
        ...state,
        age: action.age
      };

    default:
      return state;
  }
}
