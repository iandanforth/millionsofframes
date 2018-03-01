// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_UPDATE_AGE,
} from './constants';

function filterInput(age, nextAge) {
  if (!isNaN(nextAge)) {
    if (nextAge > 100) {
      age = 100;
    } else if (nextAge < 0 ) {
      age = 0;
    } else {
      age = nextAge;
    }
  }
  return age;
}

export function updateAge(e) {
  return {
    type: HOME_UPDATE_AGE,
    age: e.target.value
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_UPDATE_AGE:
      console.log(action);
      return {
        ...state,
        age: filterInput(state.age, action.age)
      };

    default:
      return state;
  }
}
