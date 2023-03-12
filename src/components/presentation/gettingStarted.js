import React from 'react';
import { skinCodes } from '../../constants/typeCodes';
import { connect } from 'react-redux';
import * as documentActions from './../../actions/documentActions'
import { useNavigate } from "react-router-dom";
function GettingStarted(props) {
    let navigate = useNavigate();
    const onChange = (skinCd) => {

        if (props.document.id) {
            props.updateDocument(skinCd);
        }
        else {
            props.setDocument(skinCd);
        }
        navigate('/contact');
    }

    return (
        <div className="container med gettingStarted">
            <div className="section">
                <h1 className=" center">
                    Select a template to build your resume</h1>
                <p className=" center">
                    You’ll be able to edit and change this template later!
                </p>
                <div className="styleTemplate ">
                    {
                        skinCodes.map((value, index) => {
                            return (<div key={index} className="template-card rounded-border">
                                <i className={(value === props.document.skinCd ? 'selected fa fa-check' : 'hide')} ></i>
                                <img className='' src={'/images/' + value + '.svg'} alt="skinCodes" />
                                <button type="button" onClick={() => onChange(value)} className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);

                        })
                    }
                </div>

            </div>
        </div>
    );

}
const mapStateToProps = (state) => {
    return {
        document: state.document
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setDocument: (skinCd) => dispatch(documentActions.setSkinCd(skinCd)),
        updateDocument: (skinCd) => dispatch(documentActions.updateSkinCd(skinCd))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GettingStarted)

