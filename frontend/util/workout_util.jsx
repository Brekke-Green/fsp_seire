export const createWorkout = (workout) => {
    return $.ajax({
        method: "POST",
        url: '/api/workouts',
        data: { workout }
    })
}

export const fetchWorkout = (workoutId) => {
    return $.ajax({
        method: "GET",
        url: `/api/workout/${workoutId}`
    })
}

export const fetchWorkouts = () => {
    return $.ajax({
        method: "GET",
        url: `/api/workout`,
    })
}

export const updateWorkout = (workout) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/workouts/${workout.id}`,
        data: { workout }
    })
}

