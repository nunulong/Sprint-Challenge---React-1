import React, { Component } from 'react';

class HomeWorld extends Component {
  constructor() {
    super();
    this.state = {
      home: null
    }
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ home: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const home = this.state.home;
    if (!home) return <p>Sweet Home</p>
    return (
      <div className="home">
        <h3>Homeworld Info</h3>
        <p>{home.name}</p>
      </div>
    );
  }
}

export default HomeWorld;