import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearErrors, receiveWorkout } from '../../../actions/workout_actions';
import WorkoutForm from './workout_form';

const mSTP = ({ session, entities: {}, errors }) => {
    return {

    };
};

const mDTP = dispatch => {
    return {

    };
};

export default connect(mSTP, mDTP)(WorkoutForm);
