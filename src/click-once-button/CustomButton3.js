import React, { useState } from 'react';
import { render } from 'react-dom';
import { sayHi } from './CustomButton';
const CustomButton3 = (props) => {
  const [clicked, SetClicked] = useState(false);

  // make a click handler
  const handleClick = () => {
    // The handler won't be called if the button
    // is disabled, so if we got here, it's safe
    // to trigger the click.
    props.onClick();

    // Ok, no more clicking.
    SetClicked(!clicked);
  };
  return (
    <button onClick={handleClick} disabled={clicked}>
      You Can Only Click Me Once
    </button>
  );
};

export default CustomButton3;

render(<CustomButton3 onClick={sayHi} />, document.getElementById('root'));
