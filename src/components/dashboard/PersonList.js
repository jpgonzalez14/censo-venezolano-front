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
      <div className="col-xs-12 col-md-9">
        <div>
          <div>
            <h2>Locations</h2>
          </div>
        </div>
        <div className="table-wrapper-scroll-y">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {this.state.persons.map(persons => (
                <PersonCard key={persons.id} {...persons} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const PersonCard = props => {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
  );
};

export default PersonList;
