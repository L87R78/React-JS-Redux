import React, { Component } from 'react';
import { Grid, Cell, List, ListItemContent, ListItem } from 'react-mdl';

import logo from '../Image/logo.png';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Lubomir Atanasov</h2>
                        <img src={logo} style={{ height: "250px" }} />
                        <p style={{ wirdt: "75%", margin: "auto", paddingTop: "1em" }}>Something for me</p>
                    </Cell>
                    <Cell className="contact-form" col={6}>


                        <div id="lubo">
                        <h2>Contact Me</h2>
                            <List className="contact-list2">
                                <ListItem>
                                    <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" /> +359 896 76 89 78
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: "25px", fontFamily: "Anton" }}>
                                        <i className="fa fa-envelope" aria-hidden="true" /> lubomir.code@gmail.com
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>












                        {/* <h2>Contact Me</h2>
                        <div id="lubo">
                           
                                <i className="fa fa-phone-square" aria-hidden="true" /> +359 896 76 89 78
                            
                        </div>
                        <div>
                            
                                <i className="fa fa-phone-square" aria-hidden="true" /> +359 896 76 89 78
                        
                        </div> */}
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;

