import React from 'react';
import "./container.css"
import {NavLink} from "react-router-dom";
class Container extends React.Component {
    render() {
        const { info } = this.props;
        return (
            <div className='container-container'>
                    <div className='container-header'>{info.name}</div>
                    <span>{info.description}</span>
                <NavLink to={`/${info.activityPage}`} className="container-button">
                    <span>{info.buttonName}</span>
                </NavLink>
            </div>
        );
    }
}
export default Container;