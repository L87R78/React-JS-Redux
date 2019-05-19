import React, { Component } from 'react';

class MyForm extends Component{
    //ref се използва ако искаме да вземеме някаква информация от DOM-елементите
    getEmailRef = (email) => {
        this.email = email
    }

    getPasswordRef = (password) => {
        this.password = password
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { value: email} = this.email;
        const { value: password } = this.password;

        const payLoad = { email, password }

        console.log(JSON.stringify(payLoad, null, 4));

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                UserNname: <input type="email" id="email" ref={this.getEmailRef}/>
                <br/>
                Password: <input type="password" id="password" ref={this.getPasswordRef}/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default MyForm