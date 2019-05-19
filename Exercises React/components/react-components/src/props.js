import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

function Nav(props) {
    const { className, children, replaceAll } = props

    const navItems = replaceAll
        ? children
        : [
            <a href='/'>Home</a>,
            //children
        ]
    return (
        <nav className={className}>
            {navItems}
        </nav>
    )
}
function Footer(props) {
    const footerClass = 'footer';
    const footerNavClass = `${footerClass}-navigation`
    return (
        <footer>
            <Nav className={footerNavClass} />
        </footer>
    )
}
function Header(props) {
    const headerClass = 'footer';
    const headerNavClass = `${headerClass}-navigation`
    return (
        <header>
            <Nav className={headerNavClass} replaceAll={true}>
                <a href="#">About us</a>
                <br />
                <a href="#">Contact</a>
                <br />
                <br />
            </Nav>

            {/* <Nav className={headerNavClass} replaceAll={true}>
                <h2>ahhahaa</h2>
            </Nav> */}
        </header>
    )
}
function HeaderAndFooter() {
    return (
        <Fragment>
            <Header />
            <Footer />
        </Fragment>
    )
}


//---------------------------------------------------------------------------------------->
function NavWithStrings(props) {
    const { items } = props;
    if (!items) {
        return null;
    }
    return (
        <nav>
            <ul>
                {
                    items.map(item => (
                        <li>
                            <a href="#">{item}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
//---------------------------------------------------------------------------------------->

ReactDOM.render(
    < NavWithStrings items= {['About us', 'Contact', 'Home']}/>,
    document.getElementById('root'));

