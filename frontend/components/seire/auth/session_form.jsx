import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.props.history.push('/dashboard');
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {        
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    render () {
        let headerMessage = "";
        switch (this.props.formType) {
            case 'signup':
                headerMessage = "Join Seire today, it's Free.";
                break;
            case 'login':
                headerMessage = "Log In";   
                break;       
        };

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div id={`${this.props.formType}`}>
                        <div id="headerMessage">{headerMessage}</div>
                    </div>
                    <div className="login-form">
                        {this.renderErrors()}
                        <div>
                            <input type="text" 
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </div>
                        <div>
                            <input type="password" 
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="remember_me" id="remember_me" value="on"/> Remember me 
                            </label>
                        </div>
                        <input type="submit" className="session-submit" value={this.props.formType}/>
                    </div>
                </form>
            </div>
        )
    }
};

export default SessionForm;