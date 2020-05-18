import React from 'react';
import "./bookAdviser.css"

export default class bookAdviser extends React.Component {
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

    // getTags(){
    //     fetch()
    //         .then(response => {
    //             console.log(response.body.getReader());
    //             this.setState({
    //                 Tags: [...this.state.Tags, response.results]
    //             });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    render(){
        return (
            <div className="Book-page">
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