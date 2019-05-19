import React, { Component } from 'react';

class FurnitureCard extends Component {
    render() {
        const { id, key, image, make, model, price, description } = this.props;
        // const test = this.props;
        // console.log(test)
        return (
                <div className="col-md-4">
                    <div className="card text-white bg-primary">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <img src={image} />
                                <p>{description}</p>
                                {model} by {make}
                                <footer>Someone famous in
                                    <cite title="ource Title">     {price} lv.</cite>
                                </footer>
                                <div className="pull-right">
                                    <a href={"/details/" + id} className="btn btn-info">Details</a>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
        )
    }
}
export default FurnitureCard