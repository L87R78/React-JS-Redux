import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoadingPage from './loadingpage';
import AboutMe from './aboutMe';
import Contact from './contact';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LoadingPage} />
        <Route  path="/aboutme" component={AboutMe} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/projects" component={Projects} />
    </Switch>
)
export default Main;