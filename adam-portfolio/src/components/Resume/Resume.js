import React, { Component } from 'react';
import AdamFiggatWebDeveloper from './AdamFiggatWebDeveloper.pdf';
import { Document } from 'react-pdf'

class Resume extends Component {

    render() {
        return (

            <div  className="Resume">
              <p id="resume" className="Header">Resume</p>
          
              <embed src={AdamFiggatWebDeveloper} type="application/pdf" width="100%" height="600px" />

            </div>

        );
    }
}

export default Resume;