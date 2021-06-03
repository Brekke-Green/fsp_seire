import { RECEIVE_WORKOUT, RECEIVE_WORKOUTS, REMOVE_WORKOUT } from '../actions/workout_actions';


const workoutsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch (action.type) {
        case RECEIVE_WORKOUT:
            nextState[action.workout.id] = action.workout;
            return nextState;
        case RECEIVE_WORKOUTS:
            return Object.assign({}, state, action.workouts);
        case REMOVE_WORKOUT:
            delete nextState[action.workoutId]
            return nextState;
        default:
            return state;
    }
}

export default workoutsReducer;