import React, { Component } from 'react';

import Details from './Details'
import Rooster from './Rooster'

class Characters extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: null,
            images: null,
            details: {
                name: null,
                id: null,
                url: null,
                bio: null,
            }
        }
    }


    render = () => (
        // console.log(this.props)
        <div>
            <Rooster images={this.state.images} select={this.currentSelectedImage}/>
            <Details
                // name={this.state.details.name}/>
                // id={this.state.details.id}/> 
                // url={this.state.details.url}/> 
                // bio={this.state.details.bio}/>

                // {/*  or this  */}
                Details {...this.state.details} />
        </div>
    )

    currentSelectedImage = id => {
        this.componentDidMount(id)
    }
    componentDidMount(id) {
        fetch('http://localhost:9999/roster/')
            .then(data => {
                return data.json()
            })
            .then(parseData => {
                this.setState(
                    {
                        images: parseData.map(i => ({
                            id: i.id,
                            url: i.url
                        })),
                        isLoading: false
                    }
                )
                //console.log(this.state.images)
            })
        fetch('http://localhost:9999/character/' + id)
            .then(data => {
                console.log(data)
                return data.json()
            })
            .then(parseData => {
                //console.log(parseData)
                this.setState(
                    {
                        details: parseData
                    }
                )
                //console.log(this.state.images)
            })
    }
}

export default Characters