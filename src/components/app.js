import React, { Component } from 'react';
import CourseLibrary from './courseLibrary';

export default class App extends Component {
  render() {
    return (
      <div className ="main-container">
        <div className="library">
        <h1 className="library__header">Course library</h1>
        <CourseLibrary />
        </div>

        <div className="schedule">
          <h1 className="schedule__header">My schedule</h1>
        </div>
      </div>
    );
  }
}
