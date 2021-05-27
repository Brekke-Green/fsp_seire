import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.calculateMiles = this.calculateMiles.bind(this);
        this.calculateAverageSpeed = this.calculateAverageSpeed(this);
    }

    componentDidMount() {
        this.props.getRoutes();
        this.props.getWorkouts();
    }

    calculateMiles() {

    }

    calculateAverageSpeed() {
        
    }

    render() {
        if (Object.keys(this.props.routes).length < 1 && Object.keys(this.props.workouts).length < 1) { return null; }
        return (
            <div>
                <div>
                    THIS WILL BE THE USER STATS
                </div>
            </div>
        )
    }
}

export default Profile;