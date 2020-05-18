import React, { useState } from 'react';
import { AirlineList } from './AirlineList'
import { AirlineDetail } from './AirlineDetail';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={AirlineList} />
      <Route exact path="/airlines/:id" component={AirlineDetail} />
    </BrowserRouter>
  )
}

export default App;
