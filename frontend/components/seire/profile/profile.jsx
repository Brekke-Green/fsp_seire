import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        
        this.userWorkouts = [];
        this.userRuns = [];
        this.userWalks = [];
        this.userHikes = [];
        this.userCycles = [];

        this.calculateUserMiles = this.calculateUserMiles.bind(this);
        this.calculateUserAverageSpeed = this.calculateUserAverageSpeed.bind(this);
        this.filterWorkoutsByType = this.filterWorkoutsByType.bind(this);
        this.getUserDistance = this.getUserDistance.bind(this);
        this.getUserDuration = this.getUserDuration.bind(this);
    }

    componentDidMount() {
        this.props.getRoutes();
        this.props.getWorkouts();
    }

    getUserWorkouts(userId) {
        this.userWorkouts = Object.values(this.props.workouts).filter( workout => {return workout.user_id === userId})
    }

    filterWorkoutsByType(workoutType) {
        const typeWorkout = this.userWorkouts.filter((workout) => {return workout.workout_type === workoutType});
        switch (workoutType) {
            case ("run"):
                this.userRuns = typeWorkout;
                break;
            case ("walk"):
                this.userWalks = typeWorkout;
                break;
            case ("hike"):
                this.userHikes = typeWorkout;
                break;
            case ("cycle"):
                this.userCycles = typeWorkout;
                break;
            default:
                break;
        }
    }

    getUserDurations(type) {
        
    }

    calculateUserMiles() {

    }

    calculateUserAverageSpeed() {
        
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