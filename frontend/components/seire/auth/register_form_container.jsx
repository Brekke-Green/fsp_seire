import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearErrors, signup } from '../../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ session, entities: {users}, errors }) => {
    return {
        currentUser: users[session.id],
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">Log In</Link>,
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mSTP, mDTP)(SessionForm);