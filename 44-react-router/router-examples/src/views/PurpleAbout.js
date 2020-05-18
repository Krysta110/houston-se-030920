import React from 'react';

export const PurpleAbout = (props) =>  {
  return (
    <div style={stylesheet}>
        <h1>A Purple About Page</h1>
    </div>
  );
}


const stylesheet = {
    margin: '0px',
    padding: '10px',
    backgroundColor: 'purple',
    textAlign: 'center',
    color: 'white',
    width: '100vw',
    height: '100vh'
}