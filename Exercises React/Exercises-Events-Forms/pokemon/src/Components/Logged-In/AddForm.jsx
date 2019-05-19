import React from 'react'

class AddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {},
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        const name = e.target.dataset.name
        const value = e.target.value
        const obj = {};
        obj[name] = value
        
        this.setState({
            form: Object.assign(this.state.form, obj),
            afterSignUp: false,
            succses: true
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:5000/pokedex/create',
            {
                method: 'POST', 
                body: JSON.stringify(this.state.form), 
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(data => {
            return data.json();
        })
        .then(response => {
            
            this.setState({
                afterSignUp: true,
                succses: Object.values(response)[0]
            });
        });
    }
    render() {
        const { afterSignUp, succses } = this.state
        return (
            <div className="App wrapper">
                 <form>
                    <div className="form-group">
                        <label htmlFor="pokemonName">Pokemon Name</label>
                        <input data-name="pokemonName" type="text" onChange={this.handleChange} className="form-control" id="pokemonName" placeholder="Enter pokemon name" />
                    </div>
                    <div>
                        <label htmlFor="pokemonImage">Image</label>
                        <input data-name="image" type="text" id="pokemonImage" placeholder="Enter Image" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pokemonInfo">Info</label>
                        <input data-name="info" type="text" onChange={this.handleChange} className="form-control" id="pokemonInfo" placeholder="Enter Info" />
                    </div>
                    <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Create Pokemon</button>
                </form> 
            </div>
        )
    }
}
export default AddForm