import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { MillionsOfFrames } from 'src/features/home/MillionsOfFrames';

describe('home/MillionsOfFrames', () => {
  it('renders node with correct class name', () => {
    const pageProps = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <MillionsOfFrames {...pageProps} />
    );

    expect(
      renderedComponent.find('.home-millions-of-frames').getElement()
    ).to.exist;
  });
});
