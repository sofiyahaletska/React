import React from 'react';
import "./gameAdviser.css"

export default class GameAdviser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Tags:[],
            selectedTag: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.getTags();
    }
    handleChange(event) {
        // this.setState({selectedTag: event.target.value});
    }

    handleSubmit(event) {
        // event.preventDefault();
    }

    getTags(){
        fetch("https://rawg-video-games-database.p.rapidapi.com/tags", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "95bf6ad4a9mshf282d172c8f84d3p1998eajsn92f3bbf892b7"
            }
        })
            .then(response => {
                console.log(response.body.getReader());
                this.setState({
                    Tags: [...this.state.Tags, response.results]
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render(){
        return (
            <div className="Game-page">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor= "Choose game tag">
                    <select value={this.state.selectedTag} onChange={this.handleChange}>
                        {this.state.Tags.map((tag) => (
                            <div key={tag.id}>
                            <option value={tag.name}>{tag.name}</option>
                            </div>))}
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        )
    }
}