import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.workoutTypes = ['run', 'walk', 'hike', 'cycle'];
        
        this.userWorkouts = [];
        this.userRuns = {};
        this.userWalks = {};
        this.userHikes = {};
        this.userCycles = {};

        this.userStats = {};

        this.filterUserWorkouts = this.filterUserWorkouts.bind(this);
        this.filterWorkoutsByType = this.filterWorkoutsByType.bind(this);
        this.totalDuration = this.totalDuration.bind(this);
        this.totalDistance = this.totalDistance.bind(this);
        this.calculateUserAverageSpeed = this.calculateUserAverageSpeed.bind(this);
        this.calculateStats = this.calculateStats.bind(this);
        this.setupUserStats = this.setupUserStats.bind(this);
    }

    componentDidMount() {
        this.props.getRoutes();
        this.props.getWorkouts();
    }

    filterUserWorkouts(userId) {
        let workouts = Object.values(this.props.workouts);

        workouts.forEach( workout => {
            if (workout.user_id === userId) {
                this.userWorkouts.push(workout);
            }
        });
    }

    filterWorkoutsByType(workoutType) {
        const typeWorkout = this.userWorkouts.filter((workout) => workout.workout_type === workoutType);
        switch (workoutType) {
            case ("run"):
                this.userRuns["workouts"] = typeWorkout;
                this.userRuns["duration"] = this.totalDuration(typeWorkout);
                this.userRuns["distance"] = this.totalDistance(typeWorkout);
                this.userRuns["speed"] = (this.userRuns.distance / this.userRuns.duration)
                break;
            case ("walk"):
                this.userWalks["workouts"] = typeWorkout;
                this.userWalks["duration"] = this.totalDuration(typeWorkout);
                this.userWalks["distance"] = this.totalDistance(typeWorkout);
                this.userWalks["speed"] = (this.userWalks.distance / this.userWalks.duration)
                break;
            case ("hike"):
                this.userHikes["workouts"] = typeWorkout;
                this.userHikes["duration"] = this.totalDuration(typeWorkout);
                this.userHikes["distance"] = this.totalDistance(typeWorkout);
                this.userHikes["speed"] = (this.userHikes.distance / this.userHikes.duration)
                break;
            case ("cycle"):
                this.userCycles["workouts"] = typeWorkout;
                this.userCycles["duration"] = this.totalDuration(typeWorkout);
                this.userCycles["distance"] = this.totalDistance(typeWorkout);
                this.userCycles["speed"] = (this.userCycles.distance / this.userCycles.duration)
                break;
            default:
                break;
        }
    }

    totalDuration(workouts) {
        let duration = 0;
        workouts.forEach( workout => {duration += workout.duration})
        return duration;
    }

    totalDistance(workouts) {
        let distance = 0;
        workouts.forEach( workout => {distance += this.props.routes[workout.route_id].distance})
        return distance;
    }

    calculateStats() {
        this.filterUserWorkouts(this.props.session.id);
        this.workoutTypes.forEach( workoutType => {this.filterWorkoutsByType(workoutType)});
        this.setupUserStats();
    }

    setupUserStats () {
        this.userStats['run'] = this.userRuns;
        this.userStats['walk'] = this.userWalks;
        this.userStats['hike'] = this.userHikes;
        this.userStats['cycle'] = this.userCycles;
    }

    render() {
        if (Object.keys(this.props.routes).length < 1 && Object.keys(this.props.workouts).length < 1) { return null; }
        (this.userWorkouts.length > 0) ? this.userWorkouts : this.calculateStats()
        let userWorkouts = this.userWorkouts;
        let userStats = this.userStats;
        let listTypes = this.workoutTypes;
        
        debugger
        return (
            <div>
                <div>
                    <div>
                        {listTypes.map( type => {
                            return <div>
                                <ul key={Math.random()}>
                                    <label className={type}>{`${type.toUpperCase()} -`}</label>
                                    <li>
                                        {`# of workouts: ${userStats.workouts.length} ${type}s`}
                                    </li>
                                    <li>
                                        {`Total distance: ${userStats.distance / 1000}km`}
                                    </li>
                                    <li>
                                        {`Total time: ${userStats.duration / 3600} hours`}
                                    </li>
                                    <li>
                                        {`Average pace: ${userStats.speed * 3.6}km/h`}
                                    </li>
                                </ul>
                                <br />
                            </div>
                        })}
                    </div>
                    {userWorkouts.map( workout => {
                        return <div key={Math.random()}>{`${workout.user_id}: ${workout.duration}`}</div>
                    })}
                </div>
            </div>
        )
    }
}

export default Profile;