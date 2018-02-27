import { expect } from 'chai';

import {
  HOME_INCREMENT_SHAME,
} from 'src/features/home/redux/constants';

import {
  incrementShame,
  reducer,
} from 'src/features/home/redux/incrementShame';

describe('home/redux/incrementShame', () => {
  it('returns correct action by incrementShame', () => {
    expect(incrementShame()).to.have.property('type', HOME_INCREMENT_SHAME);
  });

  it('handles action type HOME_INCREMENT_SHAME correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_INCREMENT_SHAME }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
