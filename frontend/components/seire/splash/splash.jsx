import React from 'react';
import {Link} from 'react-router-dom';

class SplashComponent extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmitDemo = this.handleSubmitDemo.bind(this);
    }

    handleSubmitDemo(e){
        e.preventDefault();
        const guest = this.props.demo;
        this.props.demoLogin(guest);
    }

    render () {
        return (
            <div className="splash-page-content">
                <h1>The #2 app for runners and cyclists</h1>
                <p className="splash-image"></p>
                <button className='demo-user-button' type='submit' onClick={this.handleSubmitDemo}>Demo User</button>
                <Link to="/register">Use my email</Link>
                <h6>By signing up for Strava, you agree to the Terms of Service. View our Privacy Policy.</h6>
                <div>
                    <h6>Already a Member? </h6><Link to="/login">Log in</Link>
                </div>
            </div>
        )
    }
}

export default SplashComponent;