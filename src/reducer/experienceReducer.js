import initialState from './initialState.json';
import { ADD_EXPERIENCE, UPDATE_EXPERIENCE } from '../actions/actionTypes';

export default function experienceReducer(state=initialState.experienceSection,action){
    switch(action.type)
    {
        case ADD_EXPERIENCE:
            return {...action.experienceSection}

        case UPDATE_EXPERIENCE:
            return {...action.experienceSection}

        default:
            return state;
    }
}