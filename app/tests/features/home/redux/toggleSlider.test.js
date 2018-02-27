import { expect } from 'chai';

import {
  HOME_TOGGLE_SLIDER,
} from 'src/features/home/redux/constants';

import {
  toggleSlider,
  reducer,
} from 'src/features/home/redux/toggleSlider';

describe('home/redux/toggleSlider', () => {
  it('returns correct action by toggleSlider', () => {
    expect(toggleSlider()).to.have.property('type', HOME_TOGGLE_SLIDER);
  });

  it('handles action type HOME_TOGGLE_SLIDER correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_TOGGLE_SLIDER }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
