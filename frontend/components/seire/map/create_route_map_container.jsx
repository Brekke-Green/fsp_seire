import React from 'react';
import { connect } from 'react-redux';
import { createRoute, clearRouteErrors } from '../../../actions/map_actions';
import Map from './route_map';

const mSTP = ({ entities, session, errors }) => {
    return {
        route: "",
        routeName: "",
        currentUser: entities.users[session.id],
        errors: errors.routes,
    };
};

const mDTP = dispatch => {
    return {
        submitRoute: (route) => dispatch(createRoute(route)),
        clearRouteErrors: () => dispatch(clearRouteErrors())
    };
};

export default connect(mSTP, mDTP)(Map);