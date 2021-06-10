import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearWorkoutErrors, requestWorkout, updateWorkout } from '../../../actions/workout_actions';
import { requestRoutes } from '../../../actions/map_actions';

const mSTP = (state, ownProps) => {
    let workoutId = ownProps.location.pathname.split("/").pop();
    return {
        routes: state.entities.routes,
        workout: state.entities.workouts[workoutId],
        session: state.session,
        errors: state.errors.workouts,
    };
};

const mDTP = dispatch => {
    return {
        getRoutes: () => dispatch(requestRoutes()),
        getWorkout: (workoutId) => dispatch(requestWorkout(workoutId)),
        updateWorkout: (workout) => dispatch(updateWorkout(workout)),
        clearWorkoutErrors: () => dispatch(clearWorkoutErrors())
    };
};

class EditWorkoutForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleWorkoutType = this.handleWorkoutType.bind(this);
        this.handleNumbers = this.handleNumbers.bind(this);
    }

    componentDidMount() {
        this.props.getRoutes();
        this.setState({
            workout_id: this.props.workout.id,
            currentRoute: this.props.workout.route.route_name,
            user_id: this.props.session.id,
            route_id: this.props.workout.route_id,
            workout_type: this.props.workout.workout_type,
            hours: Math.floor(this.props.workout.duration / 3600),
            minutes: Math.floor((this.props.workout.duration % 3600) / 60),
            seconds: ((this.props.workout.duration % 3600) % 60),
            duration: this.props.workout.duration,

        });
    }

    componentWillUnmount() {
        this.props.clearWorkoutErrors();
    }

    handleSelection(e) {
        this.setState({
            currentRoute: this.props.routes[e.target.value],
            route_id: e.target.value
        });
    }

    handleWorkoutType(e) {
        this.setState({
            workout_type: e.target.value
        })
    }

    handleNumbers(number) {
        if (isNaN(number)) {return 0};
        if (number % 2 === 0) {return number};
        return Number.parseFloat(number).toFixed(2);
    }

    handleUpdate(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const workout = {
            id: this.state.workout_id,
            user_id: parseInt(this.state.user_id),
            route_id: parseInt(this.state.route_id),
            workout_type: this.state.workout_type,
            duration: (parseInt(this.state.hours) * 3600 + parseInt(this.state.minutes) * 60 + parseInt(this.state.seconds))
        }
        this.props.updateWorkout(workout);
        this.props.history.push('/dashboard');
    }

    render () {
        if (!this.props.routes || !this.state) { return null; }
        const routes = this.props.routes;
        return (
            <div className='main-content workout-form-container'>
                <div className='workout-form-container'>
                    <div className="workout-form-title">Edit Workout </div>
                    <form onSubmit={this.handleSubmit} className='workout-form-box'>
                        <label>Workout type:</label>
                        <br />
                        <select name="workout_type" onChange={this.handleWorkoutType}>
                            <option value="run">Running</option>
                            <option value="walk">Walking</option>
                            <option value="hike">Hiking</option>
                            <option value="cycle">Cycling</option>
                        </select>
                        <br />
                        <label>Choose a route:</label>
                        <br />
                        <select name="route" id="routes-select" onChange={this.handleSelection}>
                            {Object.values(routes).map(route => (
                                <option key={route.id * 10} value={route.id}>{`${route['route_name']}: ${this.handleNumbers(route['distance'] / 1000)}km`}</option>
                            ))}
                        </select>
                        <br />
                        <div className="workout-form-time-inputs">
                            <label>Hours:</label>
                            <input className="workout-input hours" name="hours" type="number" min="0" max="24" defaultValue={this.state.hours} onChange={this.handleUpdate('hours')}/>
                            <label>Minutes:</label>
                            <input className="workout-input minutes" name="minutes" type="number" min="0" max="60" defaultValue={this.state.minutes} onChange={this.handleUpdate('minutes')}/>
                            <label>Seconds:</label>
                            <input className="workout-input seconds" name="seconds" type="number" min="0" max="60" defaultValue={this.state.seconds} onChange={this.handleUpdate('seconds')}/>
                        </div>
                        <div className="workout-form-submit-container">
                            <button className="workout-form-submit">Update Workout</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}




export default connect(mSTP, mDTP)(EditWorkoutForm);