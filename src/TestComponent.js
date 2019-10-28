import React from 'react';

const TestComponent = ({ user }) => {
    return (
        <div className="helloUser">
            <span>Hello {user}</span>
        </div>
    )
}

export default TestComponent;