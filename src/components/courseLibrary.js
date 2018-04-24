
import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import { fetchCourses, addCourse, removeCourse, toggleDescription } from '../actions'

class CourseLibrary extends Component {

    constructor(props) {
        super(props)

        this.renderCourse = this.renderCourse.bind(this);
    }

    componentDidMount() {
        this.props.fetchCourses()
    }

    renderCourse(course) {
        return (
        <li key={course.title} className="course">
            <div className="course__info">
                <div className="course__title-container">
                    <div className="course__title">{course.title}</div>
                </div>
                <a onClick={() => this.props.toggleDescription(course)}>arrow</a>
                <a className={`action ${course.enrolled ? 'hide-content' : 'show-content'}`} onClick={() => this.props.addCourse(course)}>add</a>
                <a className={`action ${course.enrolled ? 'show-content' : 'hide-content'}`} onClick={() => this.props.removeCourse(course)}>remove</a>
            </div>
            <div className={`course__description ${course.open ? 'show-content' : 'hide-content'} `}>
                <h6 className="course__description-title">Course Description</h6>
                <p>{course.description}</p>
            </div>
        </li>
        )
    }

    render() {
        return ( 
            <ul>

                {/* {alert(JSON.stringify())} */}
                {this.props.courses.map(this.renderCourse)}
            </ul>
        )
    }

}


function mapStateToProps(state) {
    console.log(`state courses are : ${JSON.stringify(state.courses)}`)
    return { courses: state.courses }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCourses:()=> {
            dispatch(fetchCourses())
        },
        addCourse:(course) => {
            dispatch(addCourse(course))
        },
        removeCourse:(course) => {
            dispatch(removeCourse(course))
        },
        toggleDescription:(course) => {
            dispatch(toggleDescription(course))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseLibrary);