import React from 'react';

import PubSub from 'pubsub-js'

var mySubscriber = function (msg, data) {
  console.log( msg, data );
};

function send() {
  PubSub.publish('abc', {color: 'my new car'});
}

// do better than this
PubSub.subscribe('abc', mySubscriber);


const Button = () => (
  <button onClick={send}>KYC Button</button>
);
export default Button;  