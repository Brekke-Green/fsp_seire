import React from 'react';
import { connect } from 'react-redux';
import { requestRoutes } from '../../../actions/map_actions';
import { requestWorkouts, deleteWorkout } from '../../../actions/workout_actions';
import WorkoutItem from './workout_item';

const mSTP = ({ session, entities, errors }) => {
    return {
        workouts: entities.workouts,
        routes: entities.routes,
        session: session,
        errors: errors.workouts,
    };
}

const mDTP = dispatch => ({
    getRoutes: () => dispatch(requestRoutes()),
    getWorkouts: () => dispatch(requestWorkouts()),
    deleteWorkout: workoutId => dispatch(deleteWorkout(workoutId))
})

export default connect(mSTP, mDTP)(WorkoutItem);