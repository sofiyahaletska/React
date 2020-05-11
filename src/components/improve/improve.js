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
                page_name: "improve",
                description: "Some info about exercises "
            },
            {
                name: "What book to read",
                id: 2,
                page_name: "improve",
                description: "Some info about books page"
            },
        ],
    };

    render(){
        return (<div className= "Improve-page">
            <Sidebar lists={this.state.Activities}></Sidebar>
            <Route
                path='/improve/:id'
                render={() => (
                    <Container list={this.state}/>
                )}
            ></Route>
        </div>)
    }
}