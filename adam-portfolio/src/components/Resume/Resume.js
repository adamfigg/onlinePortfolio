import React, { Component } from 'react';
import AdamFiggatWebDeveloper from './AdamFiggatWebDeveloper.pdf';
import { Document } from 'react-pdf'

class Resume extends Component {

    render() {
        return (

            <div  className="Resume">
              <p id="resume" className="Header">Resume</p>
          
            <div>
               <img src="AdamFiggatWebDeveloper"/> 
            </div>

              {/*<embed className="PDF" src={AdamFiggatWebDeveloper}/>*/}

            </div>

        );
    }
}

export default Resume;