import { expect } from 'chai';

import {
  HOME_UPDATE_AGE,
} from 'src/features/home/redux/constants';

import {
  updateAge,
  reducer,
} from 'src/features/home/redux/updateAge';

describe('home/redux/updateAge', () => {
  it('returns correct action by updateAge', () => {
    expect(updateAge()).to.have.property('type', HOME_UPDATE_AGE);
  });

  it('handles action type HOME_UPDATE_AGE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_UPDATE_AGE }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
