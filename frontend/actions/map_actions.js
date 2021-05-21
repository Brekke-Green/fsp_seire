import * as MapRouteUtil from './../util/map_route_util';

export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const REMOVE_ROUTE = "REMOVE_ROUTE";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";
export const CLEAR_ROUTE_ERRORS = "CLEAR_ROUTE_ERRORS";

const receiveRoute = route => ({
    type: RECEIVE_ROUTE,
    route
})

const receiveRoutes = routes => ({
    type: RECEIVE_ROUTES,
    routes
})

const removeRoute = routeId => ({
    type: REMOVE_ROUTE,
    routeId
})

const receiveRouteErrors = (errors) => ({
    type: RECEIVE_ROUTE_ERRORS,
    errors
})

export const clearRouteErrors = () => ({
    type: CLEAR_ROUTE_ERRORS
});

export const createRoute = (route) => dispatch => (
    MapRouteUtil.createRoute(route).then(route => { (dispatch(receiveRoute(route))); dispatch(clearRouteErrors())}, 
    error => (dispatch(receiveRouteErrors(error.responseJSON))))
);

export const requestRoute = (routeId) => dispatch => (
    MapRouteUtil.fetchRoute(routeId).then(route => (dispatch(receiveRoute(route))), 
    error => (dispatch(receiveRouteErrors(error.responseJSON))))
);

export const requestRoutes = () => dispatch => (
    MapRouteUtil.fetchRoutes().then(routes => (dispatch(receiveRoutes(routes))), 
    error => (dispatch(receiveRouteErrors(error.responseJSON))))
);

export const updateRoute = (route) => dispatch => (
    MapRouteUtil.updateRoute(route).then(route => (dispatch(receiveRoutes(route))), 
    error => (dispatch(receiveRouteErrors(error.responseJSON))))
);

export const deleteRoute = (routeId) => dispatch => (
    MapRouteUtil.deleteRoute(routeId).then(() => (dispatch(removeRoute(routeId))), 
    error => (dispatch(receiveRouteErrors(error.responseJSON))))
);