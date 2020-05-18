import React from 'react';
import "./relax.css"
import Sidebar from "../sidebar";
import Container from "../container";
import {NavLink, Route} from "react-router-dom";

export default class Relax extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        Activities: [
            {
                name: "Comics",
                id: 1,
                pageName: "relax",
                activityPage: "comics_reader",
                buttonName: "Let`s read some comic!",
                description: "Some info about comics"
            },
            {
                name: "What game to play",
                id: 2,
                pageName: "relax",
                activityPage: "game_adviser",
                buttonName: "Find a game",
                description: "Game info"
            },
            {
                name: "Want to sing?",
                id: 3,
                pageName: "relax",
                activityPage: "karaoke",
                buttonName: "Let`s sing!",
                description: "How to use karaoke"
            },
        ],
    };
    getActivityById(ActivityId) {
        return this.state.Activities.find((activity) => activity.id == ActivityId);
    }
    render(){
        return (<div className="Relax-page">
            <Sidebar lists={this.state.Activities}> </Sidebar>
            <Route
                path='/relax/:id'
                render={(props) => (
                    <Container info={this.getActivityById(props.match.params.id)}/>)}>
            </Route>
        </div>)
    }
}