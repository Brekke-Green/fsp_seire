import { RECEIVE_WORKOUT, RECEIVE_WORKOUTS } from '../actions/workout_actions';


const workoutsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_WORKOUT:
            return Object.assign({}, state, {workouts: action.workout});
        case RECEIVE_WORKOUTS:
            return Object.assign({}, state, {workouts: action.workouts});
        default:
            return state;
    }
}

export default workoutsReducer;