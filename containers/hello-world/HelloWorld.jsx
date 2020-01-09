import React from 'react';
import fetcher from './fetcher';
import formatPageMetadata from './formatPageMetadata';

const HelloWorld = ({ data: name }) => (
  <div>
    Hello, {name}!
  </div>
);

HelloWorld.fetcher = fetcher;
HelloWorld.formatPageMetadata = formatPageMetadata

export default HelloWorld;
