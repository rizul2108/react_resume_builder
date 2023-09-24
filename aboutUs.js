import React from 'react';
import aboutUs from "../../static/images/aboutus.png";

const AboutUs = () => {
    
    return (        
            <div className=" container med   about-page">
            <div className="section contact-section">
                <div className="  contact-left-section ">
                    <p>       
                    On average, one job offer attracts 250 resumes. Of those resumes, an average of 6 candidates will get called for an interview,and only one will get the job. So, our goal is to help you beat the other 249 candidates by providing you with the information, machine learning tools, and guides you need to build the best resume possible.                   </p>
                    <p>       
                        Do you want to give feedback or have any other query? We are just a message away. Contact us on below given e-mail:
                    </p>
        
                    <h2 className="email text-large">
                        providers@gmail.com
                    </h2>
        
                    <p className="happy-to-help">
                        And Thanks for visiting our Website
                    </p>
                </div>
                <div className="contact-right-section">
                <img src={aboutUs}  width="340px" className=" full-width about-us-img" alt="logo" />
                </div>
                </div>
           </div>
    
    );
}
 
export default AboutUs;