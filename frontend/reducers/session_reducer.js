import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // return { id: action.currentUser.id }
            const { id } = action.currentUser;
            return Object.assign({}, { id });
        case LOGOUT_CURRENT_USER:    
            return _nullUser;
        default:
            return state;
    }
}

export default sessionReducer;
