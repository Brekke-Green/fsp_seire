import * as MapRouteUtil from './../util/map_route_util';

export const RECEIVE_ROUTE = "RECEIVE_ROUTE";

const receiveRoute = route => ({
    type: RECEIVE_ROUTE,
    route
})

export const createRoute = (route) => dispatch => (
    MapRouteUtil.createRoute(route).then(route => (dispatch(receiveRoute(route))))
)



// export const login = (user) => dispatch => (
//     SessionApiUtil.login(user).then(user => { (dispatch(receiveCurrentUser(user))); dispatch(clearErrors())},
//     error => (dispatch(receiveErrors(error.responseJSON))))
// );