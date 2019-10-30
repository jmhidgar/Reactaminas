import React from 'react';

function sayHelloCurry(user) {
    console.log('Hola');
    return function () {
        alert(`Hello ${user}`);
    }
}

const sayHelloCurryArrow = user => () => {
    alert(`Hello ${user}`);
};

const sayHelloToErik = sayHelloCurry('Erik');
//sayHelloToErik();

const FunctionComponent = ({ user }) => {

    // const sayHello = () => {
    //     alert(`Hello ${user}`);
    // };

    return (
        <div className="helloUser">
            <span>Hello {user} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button onClick={sayHelloCurryArrow(user)}>
                Say hello
            </button>
        </div>
    );
};


export default FunctionComponent;