import React, { Component } from 'react';
import CourseLibrary from './courseLibrary';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Course library</h1>
        <CourseLibrary />
      </div>
    );
  }
}
