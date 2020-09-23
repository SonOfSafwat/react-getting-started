import React, { useState } from 'react';

import { render } from 'react-dom';
const Room = () => {
  const [isLit, setLit] = useState(false);
  const brigthness = isLit ? 'lit' : 'dark';
  return (
    <div className={`room ${brigthness}`}>
      the room is {isLit ? 'lit' : 'dark'}
      <br />
      {/*
      Wrapping with an arrow function
      delays execution until the click
      ✅
      */}
      <button onClick={() => setLit(!isLit)}>flip</button>
      {/*
       Unwrapped call to setLit will happen
       before the button is even rendered!
      💥
      */}
      {/* <button onClick={setLit(!isLit)}> flip </button> */}
    </div>
  );
};

export default Room;

render(<Room />, document.getElementById('root'));
