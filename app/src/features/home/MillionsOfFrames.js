import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import classNames from 'classnames';
import Slider from 'react-rangeslider';

export class MillionsOfFrames extends Component {
  constructor() {
    super();
    this.nextInsult = this.nextInsult.bind(this);
  }

  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  get insults() {
    return [
      'balance a double pendulum.',
      'do parkour.',
      'solve XOR.',
      'beat a Chess Grandmaster.',
      'beat a 9-Dan Go player.',
      'do a backflip.',
      'fly (inverted).',
    ];
  }

  get frameCount() {
    const { age, fps } = this.props.home;
    let count = ((age * 365 * 16 * 60 * 60 * fps) / 10**6);
    return count;
  }

  get displayCount() {
    let count = this.frameCount;
    if (count > 1000) {
      count /= 1000;
    }
    if (count > 1000) {
      count /= 1000;
    }

    count = count.toFixed(2);
    return count;
  }

  get quantWord() {
    if (this.frameCount > 10**6) {
      return 'trillion';
    } else if (this.frameCount > 10**3) {
      return 'billion';
    }
    return 'million';
  }

  get buttonText() {
    const { shameIndex } = this.props.home;
    if (shameIndex < this.insults.length - 1){
      return 'Yes I can!';
    }

    return "No you can't."
  }

  nextInsult() {
    const { incrementShame } = this.props.actions;
    const { shameIndex } = this.props.home;
    if (shameIndex < this.insults.length - 1){
      incrementShame();
    } else {
      return;
    }
  }

  render() {
    const { age, fps, shameIndex, showSlider } = this.props.home;
    const { updateAge, updateFps, toggleSlider } = this.props.actions;

    const sliderClasses = classNames({
      "slider-container": true,
      hidden: !showSlider
    });

    const fpsTextClasses = classNames({
      "fps-text": true,
      "fps-text-margin": !showSlider
    });

    const beNiceClasses = classNames({
      "be-nice-text": true,
      hidden: !(shameIndex == this.insults.length - 1)
    });
    return (
      <div className="home-millions-of-frames">
        <div className="enter-age-text">Enter your age
          <input className="age-input" type="text" value={age} onChange={(updateAge)}></input>
        </div>
        <div className={fpsTextClasses}>
          Assuming human vision is the equivalent of <span onClick={toggleSlider}>{ fps }</span> frames per second:
        </div>
        <div className={sliderClasses}>
          <Slider
              min={0}
              max={200}
              step={1}
              value={fps}
              tooltip={false}
              labels={{0: "0", 100: "100", 200: "200"}}
              onChange={updateFps}
          />
        </div>
        <div className="million-text">
          <div>You have seen</div>
          <div className="million-num">{ this.displayCount } {this.quantWord} </div>
        <div>frames.</div>
        </div>

        <div className="caveat-text">*Based on 16 hours of awake time per day.</div>
        <div className="shame-text">
          <div>And you can't even </div>
          <div>{this.insults[shameIndex]}</div>
        </div>
        <div className="yes-I-can-container">
          <button className="yes-I-can-button" onClick={this.nextInsult}>{this.buttonText}</button>
        </div>
        <div className={beNiceClasses}>So be nice to your agents.</div>
        <footer>
          <hr/>
          millionsofframes.com is a mini-project by <a target="_blank" href="https://github.com/iandanforth">Ian Danforth</a>{' '}
          created with <a target="_blank" href="http://rekit.js.org">Rekit</a> and hosted by <a target="_blank" href="https://netlify.com">Netlify</a>
        </footer>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MillionsOfFrames);
