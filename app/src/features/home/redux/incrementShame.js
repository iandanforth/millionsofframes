// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_INCREMENT_SHAME,
} from './constants';

export function incrementShame() {
  return {
    type: HOME_INCREMENT_SHAME
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_INCREMENT_SHAME:
      return {
        ...state,
        shameIndex: state.shameIndex + 1,
      };

    default:
      return state;
  }
}
