// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_UPDATE_FPS,
} from './constants';

export function updateFps(fps) {
  return {
    type: HOME_UPDATE_FPS,
    fps: fps
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_UPDATE_FPS:
      return {
        ...state,
        fps: action.fps
      };

    default:
      return state;
  }
}
