import React from 'react';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';
import partcilesOpt from './Static/particles';
import './index.css';

import App from './App';



ReactDOM.render(
    <React.Fragment>
        <App />
        {/* <Particles params={partcilesOpt} /> */}
    </React.Fragment>, document.getElementById('root')
);


