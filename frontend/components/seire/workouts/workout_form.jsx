import React from 'react';

class WorkoutForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getRoutes();
    }

    handleSubmit() {

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
                        <label htmlFor="routes-select">Choose a route:</label>
                        <select name="routes" id="routes-select">
                            {Object.values(routes).map(route => (
                                <option key={route.id * 10} value={route.id}>{`${route['route_name']}: ${route['distance']}m`}</option>
                            ))}
                        </select>
                        <input className="workout-input minutes" type="text" value="Minutes"/>
                        <input className="workout-input seconds" type="text" value="Seconds"/>
                        <button>Track Workout</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default WorkoutForm;