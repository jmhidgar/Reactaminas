import React from 'react';

class StateClassComponente extends React.Component {

    constructor() {
        super();

        this.state = {
            count: 0,
            patata: 'patata',
        };

    }

    add() {
        this.setState({ count: this.state.count + 1 });
    }

    async componentDidMount() {
        // const users = await fetch('/api/user');;
        // this.setState({ users });
    }

    render() {
        return (
            <div className="helloUser">
                <span>Actual value: {this.state.count}</span>
                <div>
                    <button onClick={this.add.bind(this)}>Add</button>
                </div>
            </div>
        );
    }
}

export default StateClassComponente;