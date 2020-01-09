import React from 'react';
import fetcher from 'fetcher';

const HelloWorld = ({ data: name }) => (
  <div>
    Hello, {name}!
  </div>
);

HelloWorld.fetcher = fetcher;

export default HelloWorld;
