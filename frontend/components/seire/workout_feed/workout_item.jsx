import React from 'react';

class WorkoutItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleNumbers = this.handleNumbers.bind(this);
        this.handleTime = this.handleTime.bind(this);
    }

    componentDidMount() {
        this.props.getRoutes();
        this.props.getWorkouts();
    }

    handleNumbers(number) {
        if (isNaN(number)) {return 0};
        if (number % 2 === 0) {return number};
        return Number.parseFloat(number).toFixed(2);
    }

    handleTime(time) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = ((time % 3600) % 60);
        return `${hours}h ${minutes}m ${seconds}s`
    }

    render() {
        if (Object.keys(this.props.routes).length < 1 && Object.keys(this.props.workouts).length < 1) { return null; }
        const routes = this.props.routes;
        const workouts = this.props.workouts;
        return (
            <div>
                {Object.values(workouts).map(workout => (
                    <div key={workout.id * 10}>
                        <label>{`${routes[workout.route_id]['route_name']} - ${workout.user.username}`}</label>
                            <ul>
                                <li>
                                    {`Type: ${workout.workout_type.toUpperCase()}`}
                                </li>
                                <li>
                                    {`Distance: ${this.handleNumbers(routes[workout.route_id]['distance'] / 1000)}km`}
                                </li>
                                <li>
                                    {`Time: ${this.handleTime(workout.duration)}`}
                                </li>
                                <li>
                                    {`Pace: ${this.handleNumbers(routes[workout.route_id]['distance']/workout.duration)}m/s`}
                                </li>
                                <br />
                            </ul>  
                    </div>
                ))}
            </div>
        )
    }
}

export default WorkoutItem;