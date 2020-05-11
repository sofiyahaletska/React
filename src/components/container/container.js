import React from 'react';

class Container extends React.Component {

    render() {
        const { list } = this.props;
        return (
            <div className='container'>
                <div className='header'>{list.name}</div>
                {list.Activities.map((activity) => (
                    <div key={activity.id}>
                        <span>{activity.description}</span>
                    </div>
                ))}
            </div>
        );
    }
}
export default Container;