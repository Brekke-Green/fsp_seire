export const createWorkout = (workout) => {
    return $.ajax({
        method: "POST",
        url: `/api/workouts`,
        data: { workout }
    })
}

export const fetchWorkout = (workoutId) => {
    return $.ajax({
        method: "GET",
        url: `/api/workouts/${workoutId}`
    })
}

export const fetchWorkouts = () => {
    return $.ajax({
        method: "GET",
        url: `/api/workouts`,
    })
}

export const updateWorkout = (workout) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${workout.user_id}/workouts/${workout.id}`,
        data: { workout }
    })
}

export const deleteWorkout = (workoutId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/workouts/${workoutId}`
    })
}

