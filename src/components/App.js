import React, { Component } from 'react';
import '../styles/App.css';
import SearchForm from './SearchForm.js';
import Header from './Header.js';

const styles = {
  containerStyles: {
    display: "flex",
    flexWrap: "wrap"
  },
  cardStyles: {
    with: "45%"
  },
  titleStyles: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center"
  },
  headerStyles: {
    backgroundColor: "white",
    textAlign: "center"
  }

}


class App extends Component {

  constructor(props) {
    super(props)
    // this.setPilot = this.setPilot.bind(this);
    this.state = {
      vehicles: [],
      pilot: ""
    }
  }
  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/').then((response) => {
      return response.json()
    }).then((data) => {
      let vehicles = data.results;
      console.log(vehicles)
      this.setState({ vehicles: vehicles })
    })
  }


  setPilot = (newPilot) => {
    this.setState({ pilot: newPilot });
  }

  render() {


    let vehicleArray = this.state.vehicles;
    let vehicles = vehicleArray.map((vehicles) => {
      return (
        <div key={vehicles.name} className="col-md-4" style={styles.cardStyles}>
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">Vehicle: {vehicles.name}</h4>
              <h5 className="card-subtitle mb-2 text-muted">Model: {vehicles.model}</h5>
              <div className="card">
                <div className="card-block">
                  <h5 className="card-subtitle mb-2 text-muted">Specs</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Manufacturer: {vehicles.manufacturer}</li>
                    <li className="list-group-item">Class: {vehicles.vehicle_class}</li>
                    <li className="list-group-item">Passengers: {vehicles.passengers}</li>
                    <li className="list-group-item">Crew: {vehicles.crew}</li>
                    <li className="list-group-item">Length: {vehicles.length}</li>
                    <li className="list-group-item">Max Speed: {vehicles.max_atmosphering_speed}</li>
                    <li className="list-group-item">Cargo Capacity: {vehicles.cargo_capacity}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })


    return (
      <div className="App">
        <div style={styles.headerStyles}>
          <div style={styles.titleStyles}>
            <Header title="Star Wars" subTitle="The Vehicles of Star Wars" />
          </div>
          <SearchForm label="Enter your name, pilot." setPilot={this.setPilot} />
          <h1> {this.state.pilot}</h1>
        </div>
        <div style={styles.containerStyles}>
          {vehicles}
        </div>

      </div>
    );
  }
}

export default App;
