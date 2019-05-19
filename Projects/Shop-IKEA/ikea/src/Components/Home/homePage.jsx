import React, { Component, Fragment } from 'react';

import FurnitureList from '../Common/Furnitures/furnitureList';
import Paginator from '../Common/Paginator';


class Home extends Component {
    render() {
        const { furnirure } = this.props;
        //console.log(furnirure)


        return (

            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Welcome to Furniture System</h1>
                        <p>Select furniture from the catalog to view details.</p>

                        <form className="form-search">
                            <input className="form-control mr-sm-2" placeholder="Search" type="text" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit" >Search</button>
                        </form>
                    </div>
                </div>
                <div className="row space-top">
                    <FurnitureList furnirure={furnirure} />
                </div>
                <Paginator />
            </div>
        )
    }
}
export default Home