import React from 'react';
import { useHistory } from 'react-router';

export const GreenIndex = () => {
  
  let history = useHistory()
console.log(history)
  return (
    <div style={stylesheet}>
      <h1>A Green Index Page</h1>
      <div>
        <button onClick={() => history.push('/edit/100')}>
          Edit Resource 100
        </button>
      </div>
      <div>
        <button onClick={() => history.push('/edit/200')} >
          Edit Resource 200
        </button>
      </div>
    </div>
  );
}


const stylesheet = {
  margin: '0px',
  padding: '10px',
  backgroundColor: 'green',
  textAlign: 'center',
  color: 'white',
  width: '100vw',
  height: '100vh'
}