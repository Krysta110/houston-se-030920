import React from 'react';
import GoogleMapReact from 'google-map-react';
import socketIo from 'socket.io-client'

const socket = socketIo('http://localhost:3000') // <-- Creates connection with the backend

class App extends React.Component {

  state = {
    reviews: []
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3000/reviews')
    const reviews = await response.json()
    this.setState({ reviews: reviews })

    socket.on('new-review', newReview => {
      this.setState({ reviews: [ ...reviews, newReview ]})
    })
  }

  render() {
    return (
      <div className="container">
        <div style={{ height: '60vh' }}>
          <GoogleMapReact className="map" defaultCenter={{ lat: 29.7576198923993, lng: -95.36185792321558 }} zoom={15} bootstrapURLKeys={{ key: 'AIzaSyC9Hos-LbxQDm9pjrWL9AFjaXQ' }} yesIWantToUseGoogleMapApiInternals>
            {this.getMarkers()}
          </GoogleMapReact>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Rating</label>
              <input name="rating" type="number" className="form-control" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input name="address" type="text" className="form-control" />
            </div>
            <input value="Rate Restroom"  type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    );
  }

  getMarkers(){
    return this.state.reviews.map(review => (
      <div
        style={{
          backgroundColor: 'red',
          color: 'white',
          height: 30,
          width: 30,
          textAlign: 'center',
          paddingTop: 5
        }}
        lat={review.lat}
        lng={review.lng}>
        {review.rating}
      </div>
    ))
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const ratingInput = e.target.rating;
    const addressInput = e.target.address;
    const position = await geocodeAddress(addressInput.value)

    let newReview = {
      lat: position.lat,
      lng: position.lng,
      rating: ratingInput.value
    }

    this.setState({
      reviews: [...this.state.reviews, newReview]
    })

    fetch('http://localhost:3000/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReview)
    })  
  }

}

function geocodeAddress(address) {
  return new Promise(resolve => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      if (status == 'OK') {
        let lat = results[0].geometry.location.lat()
        let lng = results[0].geometry.location.lng()
        resolve({
          lat: lat,
          lng: lng
        })
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  })
}

export default App;
