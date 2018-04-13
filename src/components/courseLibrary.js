import React, { Component } from 'react';

class CourseLibrary extends Component {

    constructor(props) {
        super(props)

        this.renderCourse = this.renderCourse.bind(this);
    }

    renderCourse(course) {
        return ( 
        <li className="course">
            <div className="course__info"> 
                <div className="course__title-container">
                    <div className="course__title">{course.title}</div>
                </div>
            </div>
            <div className="course__description"> 
                <h6 className="course__description-title">Course description</h6>
                <p>{course.description}</p>
            </div>
        </li>
        )
    }

    render() {
        return (
        <ul>
            {this.renderCourse({"title": "Up and Running with Redis", "description": "In this course you'll learn how to work with the efficient Redis database to manage key value relationships."})}
            {this.renderCourse({"title": "UX for Developers", "description": "This User Experience(UX) course examines how to develop a system for approaching application development and enhancing the experience for users."})}
           
        </ul>

        )      
    }


}

export default CourseLibrary;