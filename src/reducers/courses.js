
import { FETCH_COURSES, REMOVE_COURSE, ADD_COURSE, TOGGLE_DESCRIPTION } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_COURSES:
            return [ ...state, ...action.payload ]
        case REMOVE_COURSE:
            return [ 
                ...state.map((course, index) => {
                    if(course == action.payload) {
                        course.enrolled = false
                    }
                    return course
                })
            ]
        case ADD_COURSE:
            return [ 
                ...state.map((course, index) => {
                    if(course == action.payload) {
                        course.enrolled = true
                    }
                    return course
                })
            ]
        case TOGGLE_DESCRIPTION:
            return [ 
                ...state.map((course, index) => {
                    if(course == action.payload) {
                        course.open = !course.open
                    }
                    return course
                })
            ]
        default: return state
  
    }
}