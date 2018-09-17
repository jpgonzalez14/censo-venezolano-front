import React from 'react';
import axios from 'axios';

class PersonList extends React.Component {
  state = {
    persons: []
  };
  componentWillMount() {
    /*axios
      .get('https://censovenezolanoback.herokuapp.com/persons/listpersons')
      .then(res => {
        const persons = res.data.persons.map(obj => [obj.name, obj.email]);
        this.setState({ persons });
      });*/
    fetch('https://censovenezolanoback.herokuapp.com/persons/listpersons')
      .then(res => res.json())
      .then(findResponse => {
        console.log(findResponse.persons);
        this.setState({
          persons: findResponse.persons
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <h2>Locations</h2>
          </div>
        </div>
        <div>
          {this.state.persons.map(persons => (
            <PersonCard key={persons.id} {...persons} />
          ))}
        </div>
      </div>
    );
  }
}

const PersonCard = props => {
  return (
    <div>
      <hr />
      <p>
        <b>Name:</b> {props.name}
      </p>
      <p>
        <b>Region:</b> {props.email}
      </p>
      <hr />
    </div>
  );
};

export default PersonList;
