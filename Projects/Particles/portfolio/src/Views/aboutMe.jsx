import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2 className="About">I`m Hero!!!</h2>
        </div>
    )
}



const AboutMe = () => {
    return (
        <div className="About">
            <h2 className="About">AboutMeeeeeeeeeeee</h2>
            <Contact/>
            {/* <Route path="about/contact" component={Contact}/> */}
        </div>
    )
}
export default AboutMe;
