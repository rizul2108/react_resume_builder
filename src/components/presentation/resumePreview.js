import React from 'react';
import {fieldCd} from './../../constants/typeCodes';
import "../../static/scss/documentStyles.scss";

function ResumePreview(props){
    const rvContact=(key, valToAppend)=>{
        if(props.contactSection){
          return props.contactSection[key]?props.contactSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

    const rvEducation=(key, valToAppend)=>{
        if(props.educationSection){
          return props.educationSection[key]?props.educationSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

    const rvExperience=(key, valToAppend)=>{
        if(props.experienceSection){
          return props.experienceSection[key]?props.experienceSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

        return (
            <div className={props.skinCd + " resume-preview "}>
                <div className={'name-section grid-container'}>
                    <p id="a" className={'contact-name text-upper grid-item ' }> {rvContact(fieldCd.FirstName,' ')  + rvContact(fieldCd.LastName)} </p><p id="b" className={'center grid-item' }> Working as {rvContact(fieldCd.Profession)}  </p>
                    <div id="c" className=" grid-item"><p className={' address'}>{rvContact(fieldCd.City,', ') + rvContact(fieldCd.State,', ') +  rvContact(fieldCd.Country,' ') + rvContact(fieldCd.ZipCode)}</p>  <p className={' address'}>{rvContact(fieldCd.Email ) }</p>  <p className={' address'}>{rvContact(fieldCd.Phone) } </p></div>
                </div>

                <div className={'profSummSection '}>                   
                    <p className="heading bold">PROFESSIONAL SUMMARY</p>
                     <div className={'divider'}></div>
                     <p>{rvContact(fieldCd.ProfSummary)}</p>
                </div>

                <div className={'educationSection'}>                   
                    <p className="heading bold">EDUCATIONAL DETAILS</p>
                     <div className={'divider'}></div>
                     <p className=" bold">Graduation Details</p>
                     <p>{rvEducation(fieldCd.Degree,' Degree')} </p>
                     <p>From : {rvEducation(fieldCd.SchoolName,',')+rvEducation(fieldCd.CCity)}</p>
                     <p>CGPA : {rvEducation(fieldCd.GraduationCGPA,' CGPA')}</p>
                     <p>Graduated in: {rvEducation(fieldCd.GraduationDate,',')+rvEducation(fieldCd.GraduationYear)}</p>

                     <div className={'divider'}></div>
                     <p className=" bold">{rvEducation(fieldCd.Class,' Class')} </p>
                     <p> From {rvEducation(fieldCd.CollegeName,',')+rvEducation(fieldCd.SchoolCity)}</p>
                     <p> {rvEducation(fieldCd.Percentage)}</p>
                     <p>Completed in : {rvEducation(fieldCd.CompletionMonth,',')+rvEducation(fieldCd.CompletionYear)}</p>                    
                </div>

                <div className={'experienceSection'}>                   
                    <p className="heading bold">EXPERIENCE </p>
                     <div className={'divider'}></div>
                     <p className=" bold">{rvExperience(fieldCd.CurrentJobStartYear,' - Prensent')}</p>
                     <p>{rvExperience(fieldCd.CurrentJobTitle)} </p>
                     <p className=" bold">{rvExperience(fieldCd.CurrentJobName)}</p>
                     <br/>

                     
                     <p className=" bold">{rvExperience(fieldCd.JobStartYear1,' - ')+ rvExperience(fieldCd.JobEndYear1)}</p>
                     <p>{rvExperience(fieldCd.JobTitle1)} </p>
                     <p className=" bold">{rvExperience(fieldCd.JobName1)}</p>

                     <br/>
                     <p className=" bold">{rvExperience(fieldCd.JobStartYear2,' - ')+rvExperience(fieldCd.JobEndYear2)}</p>
                     <p>{rvExperience(fieldCd.JobTitle2)} </p>
                     <p className=" bold">{rvExperience(fieldCd.JobName2)}</p>                                 
                </div>
          
                <div className={'TechSection'}>                   
                    <p className="heading bold">TECHNICAL SKILLS</p>
                     <div className={'divider'}></div>
                     <p>{rvEducation(fieldCd.TechSkill)}</p>                    
                    </div>
          
            </div>
        )
    }
export default ResumePreview;