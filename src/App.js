import "./App.css";

import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentWillMount() {
    fetch("https://api.hatchways.io/assessment/students").then((res) =>
      res.json().then((students) => {
        this.setState(students);
      })
    );
  }

  render() {
    return (
      <h6>
        {this.state.students.map((students) => (
          <ol>
            <li>
              <img src={students.pic}></img>
              <br></br>
              {students.firstName} {students.lastName}
              <br></br> {students.email}
              <br></br> {students.skill}
              <br></br>
              {students}
            </li>
          </ol>
        ))}
      </h6>
    );
  }
}

export default App;
