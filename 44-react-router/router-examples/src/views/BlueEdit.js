import React from 'react';
import { useParams } from 'react-router'

export const BlueEdit = () =>  {
  let params = useParams()
  return (
    <div style={stylesheet}>
        <h1>A Blue Edit Page for {params.id}</h1>
    </div>
  );
}
 

const stylesheet = {
    margin: '0px',
    padding: '10px',
    backgroundColor: 'blue',
    textAlign: 'center',
    color: 'white',
    width: '100vw',
    height: '100vh'
}