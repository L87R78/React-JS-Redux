import React, { Component, Fragment } from 'react';
import { Cell } from 'react-mdl';

class Loading extends Component {
    render() {
        return (
            <section>
                <div className="layer1">
                     <Cell col={12}>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | Node JS | Express | MongoDB</p>
                            <div className="social-link">
                                <a href="https://github.com/L87R78"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <i className="fa fa-github-square"
                                        area-hidden="true">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                    </div> 
                <div className="layer2"></div>
            </section>
        )
    }
}

export default Loading;

