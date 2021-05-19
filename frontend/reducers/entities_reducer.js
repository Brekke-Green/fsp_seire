import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';
import routesReducer from './map_route_reducer';
import workoutsReducer from './workout_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    routes: routesReducer,
    workouts: workoutsReducer
})

export default entitiesReducer;