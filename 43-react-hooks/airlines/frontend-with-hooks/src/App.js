import React, { useState } from 'react';
import { AirlineList } from './AirlineList'
import { AirlineDetail } from './AirlineDetail';

function App() {

  let [selectedAirlineId, setSelectedAirlineId] = useState(null)

  let showDetails = (airline) => {
    console.log(airline)
    setSelectedAirlineId(airline.id)
  }

  if (selectedAirlineId === null) {
    return (
      <AirlineList
        showDetails={showDetails}
      />
    )
  } else {
    return (
      <AirlineDetail
        airlineId={selectedAirlineId}
      />
    )
  }
}

export default App;
