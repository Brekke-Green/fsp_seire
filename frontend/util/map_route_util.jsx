export const createRoute = (route) => {
    return $.ajax({
        method: "POST",
        url: '/api/routes',
        data: { route }
    })
}

export const getRoute = (routeId) => {
    return $.ajax({
        method: "GET",
        url: '/api/route',
        data: { routeId }
    })
}