import React from 'react';

class ClassComponent extends React.Component {

    constructor() {
        super();
        this.sayHello3 = this.sayHello3.bind(this);
    }

    // Método 
    sayHello() {
        alert(`Hello ${this.props.user}`);
    }

    // Propiedad
    sayHello2 = () => {
        alert(`Hello ${this.props.user}`);
    }

    sayHello3() {
        alert(`Hello ${this.props.user}`);
    }


    render() {
        //const { user } = this.props;
        return (
            <div className="helloUser">
                Hola, soy {this.props.user} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <button onClick={this.sayHello.bind(this)}>
                    Say hello 1
                </button>

                <button onClick={() => { this.sayHello() }}>
                    Say hello 2
                </button>

                <button onClick={this.sayHello2}>
                    Say hello 3
                </button>

                <button onClick={this.sayHello3}>
                    Say hello 3
                </button>
            </div>
        );
    }
}

export default ClassComponent;