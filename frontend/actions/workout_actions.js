import * as WorkoutUtil from './../util/workout_util';

export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const RECEIVE_WORKOUT_ERRORS = "RECEIVE_WORKOUT_ERRORS";
export const CLEAR_WORKOUT_ERRORS = "CLEAR_WORKOUT_ERRORS";

const receiveWorkout = workout => ({
    type: RECEIVE_WORKOUT,
    workout
})

const receiveWorkoutErrors = (errors) => ({
    type: RECEIVE_WORKOUT_ERRORS,
    errors
})

export const clearWorkoutErrors = () => ({
    type: CLEAR_WORKOUT_ERRORS
});

export const createWorkout = (workout) => dispatch => (
    MapWorkoutUtil.createWorkout(workout).then(workout => { (dispatch(receiveWorkout(workout))); dispatch(clearWorkoutErrors())}, 
    error => (dispatch(receiveWorkoutErrors(error.responseJSON))))
);