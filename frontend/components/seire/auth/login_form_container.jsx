import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearErrors, login } from '../../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ session, entities: {users}, errors }) => {
    return {
        currentUser: users[session.id],
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Sign Up</Link>,
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mSTP, mDTP)(SessionForm);