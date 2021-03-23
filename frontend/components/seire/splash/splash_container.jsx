import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/session_actions';
import SplashComponent from './splash';

const mSTP = state => ({
    demo: {email: 'demo.user@gmail.com', password: 'password'},
})

const mDTP = dispatch => ({
    demoLogin: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SplashComponent);