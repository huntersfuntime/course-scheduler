import { FETCH_COURSES } from './types';

export function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
               {
                   "title": "Up and Running with Redis",
                    "description": "In this course you'll learn how to work with the efficient Redis database to manage key value relationships."
               },
               {
                   "title": "UX for Developers", 
                   "description": "This User Experience(UX) course examines how to develop a system for approaching application development and enhancing the experience for users."
                }
            ]
    }
}