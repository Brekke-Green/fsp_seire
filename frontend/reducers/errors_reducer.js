import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import mapRouteErrorsReducer from './map_route_errors_reducer';
import workoutErrorsReducer from './workout_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    routes: mapRouteErrorsReducer,
    workouts: workoutErrorsReducer
})

export default errorsReducer;