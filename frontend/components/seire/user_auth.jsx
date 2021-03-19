import React from 'react';
import { Link } from 'react-router-dom';

class UserAuth extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/login">Log In</Link>
                <Link to="/register">Sign Up</Link>
            </div>
        )
    }
}

export default UserAuth;

