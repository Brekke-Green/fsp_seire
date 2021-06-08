import React from 'react';
import { connect } from 'react-redux';
import { requestRoutes } from '../../../actions/map_actions';
import { requestWorkouts } from '../../../actions/workout_actions';
import Profile from './profile';

const mSTP = ({ session, entities, errors }) => {
    return {
        workouts: entities.workouts,
        routes: entities.routes,
        userName: entities.users[session.id].username,
        session: session,
        errors: errors.workouts,
    };
}

const mDTP = dispatch => ({
    getRoutes: () => dispatch(requestRoutes()),
    getWorkouts: () => dispatch(requestWorkouts())
})

export default connect(mSTP, mDTP)(Profile);