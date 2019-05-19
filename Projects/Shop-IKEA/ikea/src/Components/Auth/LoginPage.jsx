import React, { Component } from 'react';
import InputRegister from './inputRegister/registerInput';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction, redirect } from '../../Actions/authActions';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }


    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmitHandler(e) {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
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
                        <h1>Login</h1>
                    </div>
                </div>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="row space-top">
                        <div className="col-md-4">
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
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        loginSuccess: state.login.success
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (email, password) => dispatch(loginAction(email, password)),
        redirect: () => dispatch(redirect())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)