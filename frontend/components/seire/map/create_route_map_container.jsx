import React from 'react';
import { connect } from 'react-redux';
import { createRoute } from '../../../actions/map_actions';
import Map from './route_map';

const mSTP = ({ route, routeName }) => {
    return {
        route: route,
        routeName: routeName,
    };
};

const mDTP = dispatch => {
    return {
        submitRoute: (route) => dispatch(createRoute(route)),
    };
};

export default connect(mSTP, mDTP)(Map);