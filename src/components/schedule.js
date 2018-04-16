import React, { Component } from 'react';
import { connect } from 'react-redux';

class Schedule extends Component {

    constructor(props) {
        super(props) 

        this.renderCourse = this.renderCourse.bind(this);
    }

    renderCourse(course) {
        return (
            <div key={this.props.courses.indexOf(course)} className="slot">
                <div className="slot__title">{course.title}</div>
                <a className="action slot__remove">remove course</a>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="schedule__slots">
                    {
                        this.props.courses.map(this.renderCourse)
                    }
                </div>
            </div>
        )

    }

}

function mapStateToProps(state) {
    return { courses: state.courses };
}

export default connect(mapStateToProps)(Schedule);