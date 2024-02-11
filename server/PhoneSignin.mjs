import React from 'react';
import ReactDOMServer from 'react-dom/server';

function PhoneSignin() {
    return React.createElement(
        'div',
        {},
        React.createElement('h1', {}, 'Phone Signin')
    );
}

console.log(ReactDOMServer.renderToString(PhoneSignin()));

export default PhoneSignin;