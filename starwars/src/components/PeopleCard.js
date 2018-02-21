import React, { Component } from 'react';
import HomeWorld from './HomeWorld';

class PeopleCard extends Component {
  render() {
    const people = this.props.people;
    if (!people.length) return <p>Loading...</p>
    return (
      <div className="people">
        {people.map(person => (
          <div key={person.name} className="person">
            <h3>{person.name}</h3>
            <p>Birth Year: {person.birth_year}</p>
            <p>Eye Color: {person.eye_color}</p>
            <p>Gender: {person.gender}</p>
            <p>Height: {person.height}</p>
            <p>Skin Color: {person.skin_color}</p>
            <HomeWorld url={person.homeworld}/>
          </div>
        ))}
      </div>
    );
  }
}

export default PeopleCard;