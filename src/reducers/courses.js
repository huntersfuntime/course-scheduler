import { FETCH_COURSES } from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_COURSES:
            console.log(action.payload);
            return [ ...state, ...action.payload ]
        default: return state
    }
}