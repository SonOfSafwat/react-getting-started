import React from 'react';
import { render } from 'react-dom';
export const MediaCard = ({ title, body, imageUrl }) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <img src={imageUrl} alt="" />
  </div>
);

render(
  <MediaCard
    title="Hello"
    body="this is a sample body"
    imageUrl="https://reactjs.org/static/1071fbcc9eed01fddc115b41e193ec11/d4770/thinking-in-react-mock.png"
  />,
  document.getElementById('root')
);
