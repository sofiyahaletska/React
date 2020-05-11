import React from 'react';
import "./main.css"
import { NavLink } from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (<div>
            <div className="container Improve">
                    <NavLink to="/improve" className="button improve"><span>Improve!</span></NavLink>
            </div>
            <div className="container Relax">
                    <NavLink to="/relax" className="button relax"><span>Relax!</span></NavLink>
            </div>
            </div>)
    }
}
export default Main
