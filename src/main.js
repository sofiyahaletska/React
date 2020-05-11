import React from 'react';
import "./main.css"

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (<div>
            <div className="container Improve">
                <form action="improve.js">
                    <button className="button improve"><span>Improve!</span></button>
                </form>
            </div>
            <div className="container Relax">
                <form action="relax.js">
                    <button className="button relax"><span>Relax!</span></button>
                </form>
            </div>
            </div>)
    }
}
export default Main
