import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearWorkoutErrors, requestWorkout, createWorkout } from '../../../actions/workout_actions';
import { requestRoutes } from '../../../actions/map_actions';
import WorkoutForm from './workout_form';

const mSTP = ({ session, entities, errors }) => {
    return {
        workouts: entities.workouts,
        routes: entities.routes,
        session: session,
        errors: errors.workouts,
    };
};

const mDTP = dispatch => {
    return {
        getRoutes: () => dispatch(requestRoutes()),
        createWorkout: (workout) => dispatch(createWorkout(workout))
    };
};

export default connect(mSTP, mDTP)(WorkoutForm);
