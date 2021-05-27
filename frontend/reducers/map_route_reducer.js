import { RECEIVE_ROUTE, RECEIVE_ROUTES, REMOVE_ROUTE } from '../actions/map_actions';


const mapRouteReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch (action.type) {
        case RECEIVE_ROUTE:
            // return Object.assign({}, state, {routes: action.route});
            nextState[action.route.id] = action.route;
            return nextState;
        case RECEIVE_ROUTES:
            return Object.assign({}, state, action.routes);
        case REMOVE_ROUTE:
            delete nextState[action.routeId]
            return nextState;
        default:
            return state;
    };
}

export default mapRouteReducer;