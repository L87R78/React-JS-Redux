import React, { Component, Fragment } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardMenu, CardText, CardActions, Button, Menu, IconButton} from 'react-mdl';
import { Link, NavLink } from 'react-router-dom';


const searchBtn = () => {
    return (
        <a href="https://github.com/L87R78/CSharp/blob/master/Exams/ProgrammingFundamentalsJune2016/03PopulationAggregation/Program.cs"
            rel="noopener noreferrer"
            target="_blank">
            <i class="material-icons">search</i>
        </a>
    )
}
const imageReact = () => {
    return (
        "url(https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg) center / cover"
    )
}


class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 0,
        };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
               

                    {/* Projects #1 */}
                    <Card shadow={15} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{
                            color: "#fff",
                            height: "176px",
                            background: imageReact()
                        }}>React Project #1</CardTitle>
                        <CardText>Something text for 1</CardText>
                        <CardActions style={{ textAlign: "center" }} border> {searchBtn()} </CardActions>
                    </Card >

                    {/* Projects #2 */}
                    <Card shadow={15} style={{ minWidth: "450", margin: "auto" }}>
                        <CardTitle style={{
                            color: "#fff",
                            height: "176px",
                            background: imageReact()
                        }}>
                            React Project #2
                 </CardTitle>
                        <CardText>Something text for 2</CardText>
                        <CardActions style={{ textAlign: "center" }} border> {searchBtn()} </CardActions>
                    </Card >

                    {/* Projects #3 */}
                    <Cell>
                        <Card shadow={15} style={{ minWidth: "450", margin: "auto" }}>
                            <CardTitle style={{
                                color: "#fff",
                                height: "176px",
                                background: imageReact()
                            }}>
                                React Project #3
              </CardTitle>
                            <CardText>Something text for 3</CardText>
                            <CardActions style={{ textAlign: "center" }} border> {searchBtn()} </CardActions>
                        </Card >
                    </Cell>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>This is MongoDB</h1>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>This is Node</h1>
                </div>
            )
        }
    }
    render() {
        //console.log(this.state)
        return (
            <div className="category-tabs">
                <Tabs
                    activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Node</Tab>
                </Tabs>
                {/* <section className="projects-grid"> */}
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
                {/* </section> */}
            </div >
        )
    }
}

export default Projects;