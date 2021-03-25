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
                <div className="splash-heading">The #2 app for runners and cyclists</div>
                <div className="splash-side-by-side">
                    <p className="splash-image"></p>
                    <div className="splash-content-right">
                        <button className='demo-user-button' type='submit' onClick={this.handleSubmitDemo}>Demo User</button>
                        <Link to="/register">Use my email</Link>
                        <p className="top-p">By signing up for Strava, you agree to the Terms of Service.</p> 
                        <p className="bottom-p">View our Privacy Policy.</p>
                        <div>
                            <div className="login-link">Already a Member?<Link to="/login">Log in</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashComponent;