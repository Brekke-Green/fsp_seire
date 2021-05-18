import { RECEIVE_ROUTE } from '../actions/map_actions';


const mapRouteReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ROUTE:
            // const routeName = Object.keys(action.route)[0]
            // return Object.assign({}, state, {[routeName]: action.route[routeName]});
            return Object.assign({}, state, {route: action.route});
        default:
            return state;
    }
}

export default mapRouteReducer;