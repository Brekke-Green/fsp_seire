import React from 'react';

// import SplashContainer from '../splash/splash_container'
// import LogInFormContainer from '../auth/login_form_container';
// import RegisterFormContainer from '../auth/register_form_container'
import ProfileContainer from '../profile/profile_container';
import WorkoutFeedContainer from '../workout_feed/workout_container';
import CareerInfoComponent from '../career_info.jsx';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="main-content dashboard-container" id="dashboard-background">
                <ProfileContainer />
                <WorkoutFeedContainer />
                <CareerInfoComponent />
            </div>
        )
    }
}

export default Dashboard;
