export const createWorkout = (workout) => {
    return $.ajax({
        method: "POST",
        url: '/api/workouts',
        data: { workout }
    })
}

export const getWorkout = (workoutId) => {
    return $.ajax({
        method: "GET",
        url: '/api/workout',
        data: { workoutId }
    })
}