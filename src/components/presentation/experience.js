import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import ResumePreview from './resumePreview'
import { fieldCd} from '../../constants/typeCodes';
import { connect } from 'react-redux'
import * as experienceActions from '../../actions/experienceActions';
import { useNavigate } from "react-router-dom";

function Experience(props) {

  let navigate = useNavigate();
  const [experience,setExperience]= useState(props.experienceSection);

  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setExperience({...experience,[key]:val})
  }
  const getFieldData=(key)=>{
    if(experience && experience[key]){
      return experience[key]
    }
    return "";
}
  const onSubmit = async(e) => {
    if(props.experienceSection!=null){
        props.updateExperience(experience);
    }else{
        props.addExperience(experience);
    }
     navigate('/finalize')
  }

    
    return (
      <div className="container med experience" style={{height:'auto'}}>
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Professional Experience</h2>
            <div className="form-section">        

              <div className="input-group"><label>Past Company Name</label>
                <div className="effect"><input type="text" name={fieldCd.JobName1}
                  onChange={onchange} value={getFieldData(fieldCd.JobName1)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Post</label>
                <div className="effect"><input type="text" name={fieldCd.JobTitle1}
                  onChange={onchange} value={getFieldData(fieldCd.JobTitle1)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Start Year</label>
                <div className="effect"><input type="Number" name={fieldCd.JobStartYear1}
                  onChange={onchange} value={getFieldData(fieldCd.JobStartYear1)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>End Year</label>
                <div className="effect"><input type="Number" name={fieldCd.JobEndYear1}
                  onChange={onchange} value={getFieldData(fieldCd.JobEndYear1)} /><span></span>
                </div>
                <div className="error"></div>
              </div>
              <br/>
              <div className="input-group"><label>Another Past Company Name</label>
                <div className="effect"><input type="text" name={fieldCd.JobName2}
                  onChange={onchange} value={getFieldData(fieldCd.JobName2)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Post</label>
                <div className="effect"><input type="text" name={fieldCd.JobTitle2}
                  onChange={onchange} value={getFieldData(fieldCd.JobTitle2)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Start Year</label>
                <div className="effect"><input type="Number" name={fieldCd.JobStartYear2}
                  onChange={onchange} value={getFieldData(fieldCd.JobStartYear2)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>End Year</label>
                <div className="effect"><input type="Number" name={fieldCd.JobEndYear2}
                  onChange={onchange} value={getFieldData(fieldCd.JobEndYear2)} /><span></span>
                </div>
                <div className="error"></div>
              </div>
              <div className="input-group"><label>Current Company Name</label>
                <div className="effect"><input type="text" name={fieldCd.CurrentJobName}
                  onChange={onchange} value={getFieldData(fieldCd.CurrentJobName)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Post</label>
                <div className="effect"><input type="text" name={fieldCd.CurrentJobTitle}
                  onChange={onchange} value={getFieldData(fieldCd.CurrentJobTitle)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Start Year</label>
                <div className="effect"><input type="Number" name={fieldCd.CurrentJobStartYear}
                  onChange={onchange} value={getFieldData(fieldCd.CurrentJobStartYear)} />
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
            <ResumePreview contactSection={props.contactSection} educationSection={props.educationSection} experienceSection={experience} skinCd={props?.document?.skinCd}></ResumePreview>            
          </div>
        </div>
      </div>
    );
  }

const mapStateToProps = (state)=>{
  return{
  contactSection:state.contactSection,
  educationSection:state.educationSection,
  experienceSection:state.experienceSection,
  document:state.document
  }

}
const mapDispatchToProps = dispatch=>{
  return {
    addExperience:(experience)=>dispatch(experienceActions.add(experience)),
    updateExperience:(experience)=>dispatch(experienceActions.update(experience))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Experience)

