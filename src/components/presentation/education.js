import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import ResumePreview from './resumePreview'
import { fieldCd} from './../../constants/typeCodes';
import { connect } from 'react-redux'
import * as educationActions from '../../actions/educationActions';
import { useNavigate } from "react-router-dom";

function Education(props) {

  console.log(props);
  let navigate = useNavigate();
  const [education,setEducation]= useState(props.educationSection);

  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setEducation({...education,[key]:val})
  }
  const getFieldData=(key)=>{
    if(education && education[key]){
      return education[key]
    }
    return "";
}
  const onSubmit = async(e) => {
    if(props.educationSection!=null){
        props.updateEducation(education);
    }else{
        props.addEducation(education);
    }
     navigate('/experience')
  }

    
    return (
      <div className="container med education" style={{height:'auto'}}>
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Education Section</h2>
            <div className="form-section">
         

              <div className="input-group"><label>College Name</label>
                <div className="effect"><input type="text" name={fieldCd.SchoolName}
                  onChange={onchange} value={getFieldData(fieldCd.SchoolName)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Degree</label>
                <div className="effect"><input type="text" name={fieldCd.Degree}
                  onChange={onchange} value={getFieldData(fieldCd.Degree)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>CGPA</label>
                <div className="effect"><input type="Number" name={fieldCd.GraduationCGPA}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationCGPA)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>City/State</label>
                <div className="effect"><input type="text"  name={fieldCd.CCity}
                  onChange={onchange} value={getFieldData(fieldCd.CCity)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Month</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationDate}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationDate)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Year</label>
                <div className="effect"><input type="Number"  name={fieldCd.GraduationYear}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationYear)} /><span></span>
                </div>
                <div className="error"></div>
              </div>
        
              <div className="input-group"><label>School Name</label>
                <div className="effect"><input type="text" name={fieldCd.CollegeName}
                  onChange={onchange} value={getFieldData(fieldCd.CollegeName)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Class</label>
                <div className="effect"><input type="text" name={fieldCd.Class}
                  onChange={onchange} value={getFieldData(fieldCd.Class)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Percentage</label>
                <div className="effect"><input type="text" name={fieldCd.Percentage}
                  onChange={onchange} value={getFieldData(fieldCd.Percentage)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>City/State</label>
                <div className="effect"><input type="text"  name={fieldCd.SchoolCity}
                  onChange={onchange} value={getFieldData(fieldCd.SchoolCity)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Completion Month</label>
                <div className="effect"><input type="text" name={fieldCd.CompletionMonth}
                  onChange={onchange} value={getFieldData(fieldCd.CompletionMonth)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Completion Year</label>
                <div className="effect"><input type="Number"  name={fieldCd.CompletionYear}
                  onChange={onchange} value={getFieldData(fieldCd.CompletionYear)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Technical Skills</label>
                <div className="effect"><input type="array"  name={fieldCd.TechSkill}
                  onChange={onchange} value={getFieldData(fieldCd.TechSkill)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/contact' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview contactSection={props.contactSection} educationSection={education} skinCd={props?.document?.skinCd}></ResumePreview>            
          </div>
        </div>
      </div>
    );
  }

const mapStateToProps = (state)=>{
  return{
  contactSection:state.contactSection,
  educationSection:state.educationSection,
  document:state.document
  }

}
const mapDispatchToProps = dispatch=>{
  return {
    addEducation:(education)=>dispatch(educationActions.add(education)),
    updateEducation:(education)=>dispatch(educationActions.update(education))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Education)

