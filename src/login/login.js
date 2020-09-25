import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            error: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        console.log("event", event)
    }

    render() {
        return (
            <div>
                <h4>
                    Please Login
                </h4>
                <form action="submit">
                    <input type="text" name="username" value={this.state.username} onChange={this.onChange}/>
                </form>
            </div>
        );
    }
        
}

export default Login;