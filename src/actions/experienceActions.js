import { ADD_EXPERIENCE, UPDATE_EXPERIENCE } from './actionTypes';

export const add = (experienceSection)=>{
    return {type:ADD_EXPERIENCE,experienceSection:experienceSection}

}

export const update = (experienceSection)=>{
    return {type:UPDATE_EXPERIENCE,experienceSection:experienceSection}
}