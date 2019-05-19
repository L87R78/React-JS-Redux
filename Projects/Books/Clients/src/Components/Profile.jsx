import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component {
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
        }
    }

    componentDidMount() {

        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            email: decoded.email,
        });
    }

    render() {
        // console.log('here')
        // console.log(localStorage)
       
        return (
            <div className="container">
            <h2>Hello again director: {localStorage.userLastName}</h2>
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center"> PROFILE </h1>
                    </div>

                    <table className="table col-md-6 mx-auto">
                        <tbody>     
                                <tr>
                                    <td>Firt Name</td>
                                    <td>{this.state.firstName}</td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td>{this.state.lastName}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.email}</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile

