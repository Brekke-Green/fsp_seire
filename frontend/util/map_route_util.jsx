export const createRoute = (route) => {
    return $.ajax({
        method: "POST",
        url: '/api/routes',
        data: { route }
    })
}

export const fetchRoute = (routeId) => {
    return $.ajax({
        method: "GET",
        url: `/api/routes/${routeId}`,
    })
}

export const fetchRoutes = () => {
    return $.ajax({
        method: "GET",
        url: '/api/routes'
    })
}

export const updateRoute = (route) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${route.user_id}/routes/${route.id}`,
        data: { route }
    })
}

export const deleteRoute = (routeId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/routes/${routeId}`
    })
}