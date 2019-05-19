import React, { Component } from 'react';

import FurnitureCard from './furnitureCard';

class FurnitureList extends Component {
    render() {
        const { furnirure } = this.props;
        //console.log(furnirure)
        return (
            <div className="row space-top">
                {furnirure.map(f => {
                    return (

                        <FurnitureCard
                            // key={f.id}
                            id={f.id}
                            image={f.image}
                            make={f.make}
                            model={f.model}
                            price={f.price}
                            description={f.description}
                        />
                    )
                })}
            </div>
        )
    }
}
export default FurnitureList