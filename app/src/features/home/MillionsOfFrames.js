import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class MillionsOfFrames extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { age } = this.props.home;
    const { updateAge } = this.props.actions;
    let mcount = ((age * 365 * 24 * 60 * 60 * 24) / 1000000) * (2/3);
    mcount = mcount.toFixed(2);
    return (
      <div className="home-millions-of-frames">
        <div className="enter-age-text">Enter your age:</div>
        <input className="age-input" type="text" value={age} onChange={(updateAge)}></input>
        <div className="million-text">
          You have seen { mcount } million frames.
        </div>
        <div className="caveat-text">*Based on an 24fps perception rate.</div>
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
