import React from 'react'

import LoginForm from './LoginUpForm'

class signUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {},
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        console.log('handleChange SignUp')
        const name = e.target.dataset.name
        const value = e.target.value
        const obj = {};
        obj[name] = value

        this.setState({
            form: Object.assign(this.state.form, obj),
            afterSignUp: false,
            succses: true
            //form: obj
        })
        //console.log(this.state.form)
    }

    handleSubmit(e) {
        console.log('handleSubmit SignUp')
        e.preventDefault();
        fetch('http://localhost:5000/auth/signup',
            {
                method: 'POST', 
                body: JSON.stringify(this.state.form), 
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(data => {
            return data.json()
        })
        .then(response => {
            
            this.setState({
                afterSignUp: true,
                succses: Object.values(response)[0]
            })

             console.log(response)
        })
    }
    render() {
        const { afterSignUp, succses } = this.state
        if(afterSignUp && succses){
            console.log('yes')
            return < LoginForm />
        }
        return (
            <div className="App wrapper">
                <form>
                    <div className="form-group">
                        <label htmlFor="input-email">Email address</label>
                        <input data-name="email" type="email" onChange={this.handleChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-password">Password</label>
                        <input data-name="password" type="password" onChange={this.handleChange} className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="input-username">UserName</label>
                        <input data-name="name" type="text" onChange={this.handleChange} className="form-control" id="username" placeholder="text" />
                    </div>
                    <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default signUpForm