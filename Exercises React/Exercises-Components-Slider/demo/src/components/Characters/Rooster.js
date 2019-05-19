import React, { Component } from 'react'

class Rooster extends Component {
    render = () => {
        //винаги когато правиме react компоненти от масив(images) 
        //винаги се слага key
        let images = "";
        if (this.props.images !== null) {
            // console.log(this.props.images)
            // console.log('1')
            images = this.props.images.map(imag => (

                <div className="image-size"
                    key={imag.id}>
                    <img className="image-size" 
                    src={imag.url} 
                    alt="something alt" 
                    onClick={() => this.props.select(imag.id)}
                    />
                </div>
            ))
        }
        return (
            <section>
                {images}
            </section>

        )
    }
}

export default Rooster