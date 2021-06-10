import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            email: '',
            username: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.session) { return }
        if (prevProps.session.id === null && this.props.session.id !== null) {
            this.props.history.push('/dashboard');
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleSignIn() {
        if (this.props.formType === "signup") {
            return (
                <div className="login-input-container">
                    <input type="text" 
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.update("username")}
                        className="login-input"
                    />
                </div>
            )
        }
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
        let submitMessage = "";
        switch (this.props.formType) {
            case 'signup':
                headerMessage = "Join Seire today, it's Free.";
                submitMessage = "Sign Up"
                break;
            case 'login':
                headerMessage = "Log In"; 
                submitMessage = "Log In";  
                break;       
        };

        return (
            <div className='main-content session-form-container'>
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <div id={`${this.props.formType}`}>
                            <div id="header-message">{headerMessage}</div>
                        </div>
                        <div className="login-form">
                            {this.renderErrors()}
                            <div className="login-input-container">
                                <input type="text" 
                                    value={this.state.email}
                                    placeholder="Email"
                                    onChange={this.update("email")}
                                    className="login-input"
                                />
                            </div>
                            {this.handleSignIn()}
                            <div className="login-input-container">
                                <input type="password" 
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.update("password")}
                                    className="login-input"
                                />
                            </div>
                            <div className="checkbox">
                                <label className="session-label">
                                    <input type="checkbox" name="remember_me" id="remember_me" value="on"/> Remember me 
                                </label>
                            </div>
                            <input type="submit" className="session-submit" value={submitMessage}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default SessionForm;