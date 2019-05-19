import React, { Component } from 'react'

class Details extends Component {

    render = () => {
        let content = this.props.bio
            ? (
                <div>
                    <div>
                        <img src={this.props.url} />
                    </div>
                    <div>
                        <p>Name: <strong>{this.props.name}</strong></p>
                        <p>Bio: {this.props.bio}</p>
                        <p></p>
                    </div>
                </div>
            )
            : <i className="select-char">Select a charecter</i>


        return (
            <section id="bio">
                    {content}
            </section>
        )
    }

}

export default Details