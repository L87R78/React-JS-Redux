import React, { Component } from 'react'

import left from '../resources/left.png'
import right from '../resources/right.png'

class Slider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            focusedId: 0,
            imageUrl: '',
            isLoading: true
        }
        console.log('1')
        this.getNewEp = this.getNewEp.bind(this)
    }

    render() {
        const temp = this.state.isLoading;
        if(temp){
            console.log('3')
            return <h1 className="loading-class">Loading...</h1>
        }
        return (
            <div className="warper">
                <img onClick={() => {
                    this.getNewEp(Number(this.state.focusedId) - 1);
                }} className="slider-button case-left" alt="leftArrow" src={left} />

                <img className="sliderImg" alt="focusedEp" src={this.state.imageUrl} />

                <img onClick={() => {
                    this.getNewEp(Number(this.state.focusedId) + 1);
                }} className="slider-button case-right" alt="rightArrow" src={right} />
            </div>
        )
    }

    componentDidMount() {
        fetch('http://localhost:9999/episodePreview/' + this.state.focusedId)
            //fetch-a връща от сървъра данни
            .then(data => {
                console.log('2')
                return data.json()
            })
            .then(parseData => {
                this.setState(
                    {
                        imageUrl: parseData.url,
                        isLoading: false
                    }
                )
            })
    }

    getNewEp(id) {
        fetch('http://localhost:9999/episodePreview/' + id)
            .then(data => {
                return data.json()
            })
            .then(parseData => {
                this.setState({ imageUrl: parseData.url })
                this.setState({ focusedId: parseData.id })
            })
    }
}
export default Slider;