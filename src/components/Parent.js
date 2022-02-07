import React from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
  return (
  <div>
      <h3>Parent</h3> 
    <Child1 />
    <Child2 />
  </div>);
};

export default Parent;
