import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';
import mapRouteReducer from './map_route_reducer';
import workoutsReducer from './workout_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    routes: mapRouteReducer,
    workouts: workoutsReducer,
    session: sessionReducer
})

export default entitiesReducer;
