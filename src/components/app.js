import React, { Component } from 'react';
import CourseLibrary from './courseLibrary';
import Schedule from './schedule';

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="library">
          <h1 className="library__header">Course Library</h1>
          <CourseLibrary />
        </div>
        <div className="schedule">
          <h1 className="schedule__header">My Schedule</h1>
          <Schedule />
        </div>
      </div>
    );
  }
}