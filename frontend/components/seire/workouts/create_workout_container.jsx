import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearErrors, receiveWorkout } from '../../../actions/workout_actions';
import { receiveRoutes } from '../../../actions/map_actions';
import WorkoutForm from './workout_form';

const mSTP = ({ session, entities: {workouts}, routes, errors }) => {
    return {

    };
};

const mDTP = dispatch => {
    return {
        getRoutes: () => dispatchEvent(receiveRoutes())
    };
};

export default connect(mSTP, mDTP)(WorkoutForm);
