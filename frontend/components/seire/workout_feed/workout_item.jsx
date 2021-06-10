import React from 'react';
import { Link } from 'react-router-dom'

class WorkoutItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleNumbers = this.handleNumbers.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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

    handleEdit(userId, workoutId) {
        const path = `/workouts/${workoutId}`;
        return (this.props.session.id === userId) ? <Link to={path} workout={this.props.workouts[workoutId]} >Edit Route</Link> : null
    }

    handleDelete(userId, workoutId) {
        return (this.props.session.id === userId) ? <button id='workout-delete-button' onClick={() => this.props.deleteWorkout(workoutId)}>Delete Route</button> : null
    }

    render() {
        if (Object.keys(this.props.routes).length < 1 && Object.keys(this.props.workouts).length < 1) { return null; }
        const routes = this.props.routes;
        const workouts = this.props.workouts;
        
        return (
            <div id="workout-feed-section">
                <div className="dashboard-title">WORKOUT FEED</div>
                <div className="workout-feed-container">
                    {Object.values(workouts).reverse().map(workout => (
                        <div key={workout.id * 10} className="workout-item">
                            <label className="workout-item-title">{`${workout.user.username} - ${workout.route.route_name}`}</label>
                                <br />
                                <ul className="workout-item-data-list">
                                    <li>
                                        <label className="workout-item-data-label">Type:</label>
                                        <div className="workout-item-data">
                                            {`${workout.workout_type.toUpperCase()}`}
                                        </div>
                                    </li>
                                    <li>
                                        <label className="workout-item-data-label">Distance:</label>
                                        <div className="workout-item-data">
                                            {`${this.handleNumbers(routes[workout.route_id]['distance'] / 1000)}km`}
                                        </div>
                                    </li>
                                    <li>
                                        <label className="workout-item-data-label">Time:</label>
                                        <div className="workout-item-data">
                                            {`${this.handleTime(workout.duration)}`}
                                        </div>
                                    </li>
                                    <li>
                                        <label className="workout-item-data-label">Pace:</label>
                                        <div className="workout-item-data">
                                            {`${this.handleNumbers(routes[workout.route_id]['distance']/workout.duration)}m/s`}
                                        </div>
                                    </li>
                                    
                                </ul>
                                <br />
                                {this.handleEdit(workout.user_id, workout.id)}
                                {this.handleDelete(workout.user_id, workout.id)}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default WorkoutItem;