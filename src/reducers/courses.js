import { FETCH_COURSES, REMOVE_COURSE } from '../actions/types';

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
        default: return state
    }
}