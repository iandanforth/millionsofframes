import { expect } from 'chai';

import {
  HOME_UPDATE_FPS,
} from 'src/features/home/redux/constants';

import {
  updateFps,
  reducer,
} from 'src/features/home/redux/updateFps';

describe('home/redux/updateFps', () => {
  it('returns correct action by updateFps', () => {
    expect(updateFps()).to.have.property('type', HOME_UPDATE_FPS);
  });

  it('handles action type HOME_UPDATE_FPS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_UPDATE_FPS }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
