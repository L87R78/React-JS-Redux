import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        console.log('yes yes')
        const sections = ['AboutMe', 'Projects', 'Contact'];
        const navLinks = sections.map((id, section) => {
            return (
                <li key={id}><Link to={id}>{id}</Link></li>
            )
        });
        return (
            <Fragment>
                <header>
                    <nav>
                        <h2 className="logo">{this.props.logoTitle}</h2>
                        <ul>
                            {navLinks}
                        </ul>
                    </nav>
         
                </header>
            </Fragment>
        );
    };
};
export default Header;
