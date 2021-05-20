import * as WorkoutUtil from './../util/workout_util';

export const RECEIVE_WORKOUT = "RECEIVE_WORKOUT";
export const RECEIVE_WORKOUTS = "RECEIVE_WORKOUTS";
export const RECEIVE_WORKOUT_ERRORS = "RECEIVE_WORKOUT_ERRORS";
export const CLEAR_WORKOUT_ERRORS = "CLEAR_WORKOUT_ERRORS";

const receiveWorkout = workout => ({
    type: RECEIVE_WORKOUT,
    workout
})

const receiveWorkouts = workouts => ({
    type: RECEIVE_WORKOUTS,
    workouts
})

const receiveWorkoutErrors = (errors) => ({
    type: RECEIVE_WORKOUT_ERRORS,
    errors
})

export const clearWorkoutErrors = () => ({
    type: CLEAR_WORKOUT_ERRORS
});

export const createWorkout = (workout) => dispatch => (
    WorkoutUtil.createWorkout(workout).then(workout => { (dispatch(receiveWorkout(workout))); dispatch(clearWorkoutErrors())}, 
    error => (dispatch(receiveWorkoutErrors(error.responseJSON))))
);

// FIX EVERYTHING LOWER THAN THIS

export const fetchWorkout = (workout) => dispatch => (
    WorkoutUtil.fetchWorkout(workout).then(workout => (dispatch(receiveWorkout(workout))), 
    error => (dispatch(receiveWorkoutErrors(error.responseJSON))))
);

export const fetchWorkouts = () => dispatch => (
    WorkoutUtil.fetchWorkouts().then(workouts => (dispatch(receiveWorkouts(workouts))), 
    error => (dispatch(receiveWorkoutErrors(error.responseJSON))))
);

