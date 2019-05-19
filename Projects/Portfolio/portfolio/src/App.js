import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content, } from 'react-mdl';
import { Link, NavLink } from 'react-router-dom';
import Main from './Components/main';
import './App.css';

const home = () => {
  return (
    <Navigation >
      <Link style={{float: "left", paddingLeft: "0"}} to="/">Home</Link>
    </Navigation>

  )
}
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className="header-color" title={home()} scroll>
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>

          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
