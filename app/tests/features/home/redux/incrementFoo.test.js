import { expect } from 'chai';

import {
  HOME_INCREMENT_FOO,
} from 'src/features/home/redux/constants';

import {
  incrementFoo,
  reducer,
} from 'src/features/home/redux/incrementFoo';

describe('home/redux/incrementFoo', () => {
  it('returns correct action by incrementFoo', () => {
    expect(incrementFoo()).to.have.property('type', HOME_INCREMENT_FOO);
  });

  it('handles action type HOME_INCREMENT_FOO correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_INCREMENT_FOO }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
