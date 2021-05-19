import * as MapRouteUtil from './../util/map_route_util';

export const RECEIVE_ROUTE = "RECEIVE_ROUTE";
export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";
export const CLEAR_ROUTE_ERRORS = "CLEAR_ROUTE_ERRORS";

const receiveRoute = route => ({
    type: RECEIVE_ROUTE,
    route
})

export const receiveRoutes = routes => ({
    type: RECEIVE_ROUTES,
    routes
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



// export const login = (user) => dispatch => (
//     SessionApiUtil.login(user).then(user => { (dispatch(receiveCurrentUser(user))); dispatch(clearErrors())},
//     error => (dispatch(receiveErrors(error.responseJSON))))
// );