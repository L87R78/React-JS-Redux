import React, { Component } from 'react';

import InputRegister from './inputRegister/registerInput';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerAction, loginAction, redirect } from '../../Actions/authActions';


class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
            isRedirect: false
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmitHandler(e) {
        e.preventDefault();
        this.props.register(this.state.name, this.state.email, this.state.password);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.registerSuccess) {
            this.props.login(this.state.email, this.state.password);
        }
    }
    render() {
        if (this.props.loginSuccess) {
            this.props.redirect();
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Register</h1>
                        <p>Please fill all fields.</p>
                    </div>
                </div>

                <form onSubmit={this.onSubmitHandler}>
                    <div className="row space-top">
                        <div className="col-md-4">

                            < InputRegister
                                name="name"
                                type="text"
                                value={this.state.name}
                                onChange={this.onChangeHandler}
                                label="Name"
                            />

                            < InputRegister
                                name="email"
                                type="text"
                                value={this.state.email}
                                onChange={this.onChangeHandler}
                                label="E-mail"
                            />

                            < InputRegister
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.onChangeHandler}
                                label="Password"
                            />

                            < InputRegister
                                name="repeatPassword"
                                type="password"
                                value={this.state.repeatPassword}
                                onChange={this.onChangeHandler}
                                label="Repeat Password"
                            />

                            <input type="submit" className="btn btn-primary" value="Register" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        registerSuccess: state.register.success,
        loginSuccess: state.login.success
    }
}

function mapDispatchToProps(dispatch) {
    return {
        register: (name, email, password) => dispatch(registerAction(name, email, password)),
        login: (email, password) => dispatch(loginAction(email, password)),
        redirect: () => dispatch(redirect())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)