import React from 'react';

class WorkoutForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentRoute: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getRoutes();
    }

    handleSelection(e) {
        this.setState({currentRoute: this.props.routes[e.target.value]})
    }

    handleSubmit(e) {
        e.preventDefault();
        const workout = {
            user_id: this.props.session.id,
            route_id: e.target.values.route,
            workout_type: e.target.values.workoutType,
            duration: (e.target.values.minutes * 60 + e.target.values.seconds)
        }
        this.props.createWorkout(workout)
    }

    render () {
        if (!this.props.routes.routes) { return null; }
        debugger
        const routes = this.props.routes.routes;
        console.log(routes)
        return (
            <div className='main-content workout-form-container'>
                <div className='workout-form-container'>
                    <form onSubmit={this.handleSubmit} className='workout-form-box'>
                        <label>Workout type:</label>
                        <select name="workoutType">
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
                        <label>Minutes:</label>
                        <input className="workout-input minutes" name="minutes" type="text" value="Minutes"/>
                        <label>Seconds:</label>
                        <input className="workout-input seconds" name="seconds" type="text" value="Seconds"/>
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