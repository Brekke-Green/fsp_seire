import React from 'react';

class WorkoutForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentRoute: "",
            user_id: this.props.session.id,
            route_id: "",
            workout_type: "run",
            hours: 0,
            minutes: 0,
            seconds: 0,
            duration: 0,

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleWorkoutType = this.handleWorkoutType.bind(this);
    }

    componentDidMount() {
        this.props.getRoutes();
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

    handleUpdate(field) {
        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        const workout = {
            user_id: parseInt(this.state.user_id),
            route_id: parseInt(this.state.route_id),
            workout_type: this.state.workout_type,
            duration: (parseInt(this.state.hours) * 3600 + parseInt(this.state.minutes) * 60 + parseInt(this.state.seconds))
        }
        this.props.createWorkout(workout)
    }

    render () {
        if (!this.props.routes) { return null; }
        const routes = this.props.routes;
        return (
            <div className='main-content workout-form-container'>
                <div className='workout-form-container'>
                    <form onSubmit={this.handleSubmit} className='workout-form-box'>
                        <label>Workout type:</label>
                        <select name="workout_type" onChange={this.handleWorkoutType}>
                            <option value="run">Running</option>
                            <option value="walk">Walking</option>
                            <option value="hike">Hiking</option>
                            <option value="cycle">Cycling</option>
                        </select>
                        <label>Choose a route:</label>
                        <select name="route" id="routes-select" onChange={this.handleSelection}>
                            {Object.values(routes).map(route => (
                                <option key={route.id * 10} value={route.id}>{`${route['route_name']}: ${route['distance']}m`}</option>
                            ))}
                        </select>
                        <label>Hours:</label>
                        <input className="workout-input hours" name="hours" type="number" min="0" max="24" placeholder="0" onChange={this.handleUpdate('hours')}/>
                        <label>Minutes:</label>
                        <input className="workout-input minutes" name="minutes" type="number" min="0" max="60" placeholder="0" onChange={this.handleUpdate('minutes')}/>
                        <label>Seconds:</label>
                        <input className="workout-input seconds" name="seconds" type="number" min="0" max="60" placeholder="0" onChange={this.handleUpdate('seconds')}/>
                        <button>Track Workout</button>
                    </form>
                    <div className="workout-route-display">
                        WORKOUT ROUTE DISPLAY
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkoutForm;