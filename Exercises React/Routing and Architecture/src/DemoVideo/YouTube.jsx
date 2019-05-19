import React, { Component } from 'react';

//https://www.youtube.com/watch?v=c6t3bW7kx6E

class YouTube extends Component {

   
    render(){
        return(
            <div>
                <iframe 
                width="1100" 
                height="600" 
                color= '#f18973'
                src="https://www.youtube.com/embed/rNLwo_toZMA" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>

            </div>
        )
    }
}

export default YouTube

