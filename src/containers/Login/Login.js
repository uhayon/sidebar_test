import React, { Component } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { login, container } from './Login.module.scss';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    onUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }
    
    render() {
        const { username, password } = this.state;
        return (
            <article className={container}>
                <main className={login}>
                    <Input 
                        type='text'
                        onChange={this.onUsernameChange}
                        value={username}
                        placeholder='Usuario'
                    />  
                    <Input 
                        type='password'
                        onChange={this.onPasswordChange}
                        value={password}
                        placeholder='Password'
                    />
                    <Button label='Ingresar' background='b-green' color='c-white' onClick={this.props.onLogin} />
                </main>
            </article>
        )
    }
};

export default Login;