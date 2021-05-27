import React from 'react';

class WorkoutItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRoutes();
        this.props.getWorkouts();
    }

    render() {
        if (Object.keys(this.props.routes).length < 1 && Object.keys(this.props.workouts).length < 1) { return null; }
        const routes = this.props.routes;
        const workouts = this.props.workouts;
        return (
            <div>
                {Object.values(workouts).map(workout => (
                    <div key={workout.id * 10}>{`${routes[workout.route_id]['route_name']}: ${routes[workout.route_id]['distance']/workout.duration}m/s`}</div>
                ))}
            </div>
        )
    }
}

export default WorkoutItem;