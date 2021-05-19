import React from 'react';

class WorkoutForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchRoutes();
    }

    handleSubmit() {

    }

    render () {
        return (
            <div className='main-content workout-form-container'>
                <div className='workout-form-container'>
                    <form onSubmit={this.handleSubmit} className='workout-form-box'>
                        <label htmlFor="routes-select">Choose a route:</label>
                        <select name="routes" id="routes-select">
                            {
                                <option value="">{`${this.props}`}</option>
                            }
                        </select>
                        <input type="text"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default WorkoutForm;