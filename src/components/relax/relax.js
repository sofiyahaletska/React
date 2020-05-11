import React from 'react';
import "./relax.css"
import Sidebar from "../sidebar";
import Container from "../container";
import {Route} from "react-router-dom";

export default class Relax extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        Activities: [
            {
                name: "Read comic",
                id: 1,
                page_name: "relax",
                description: "Some info about comics"
            },
            {
                name: "What game to play",
                id: 2,
                page_name: "relax",
                description: "Game info"
            },
            {
                name: "Want to sing?",
                id: 3,
                page_name: "relax",
                description: "How to use karaoke"
            },
        ],
    };

    render(){
        return (<div className="Relax-page">
            <Sidebar lists={this.state.Activities}></Sidebar>
            <Route
                path='/relax/:id'
                render={() => (
                    <Container list={this.state}/>
                )}
            ></Route>
        </div>)
    }
}