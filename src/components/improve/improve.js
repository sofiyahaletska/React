import React from 'react';
import "./improve.css"
import Sidebar from "../sidebar";
import { Route } from 'react-router-dom';
import Container from "../container";

export default class Improve extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        Activities: [
            {
                name: "Improve your pronunciation",
                id: 1,
                pageName: "improve",
                activityPage: "articulation_exercises",
                buttonName: "Let's go practice!",
                description: "Some info about exercises "
            },
            {
                name: "What book to read",
                id: 2,
                pageName: "improve",
                activityPage: "book_adviser",
                buttonName: "Find a book",
                description: "Some info about books page"
            },
        ],
    };
    getActivityById(ActivityId) {
        return this.state.Activities.find((activity) => activity.id == ActivityId);
    }
    render(){
        return (<div className= "Improve-page">
            <Sidebar lists={this.state.Activities}> </Sidebar>
            <Route
                path='/improve/:id'
                render={(props) => (
                    <Container info={this.getActivityById(props.match.params.id)}/>)}>
            </Route>
        </div>)
    }
}