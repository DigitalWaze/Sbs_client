import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../../../helper/themeContext";


import ImageUp from '../../../assets/imageUp.png'
import ImageDown from '../../../assets/imageDown.png'


import "./XRMMS.css";

class XRMMS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="XRMMS_Main_Div">
        <div  id="Evaluaion_XrayMatching_Matching_Content1_Wrapper">
          <div id="Evaluaion_XrayMatching_Matching_Heading1_Div">
            Now You Can Start Matching
          </div>
          <div id="Evaluaion_XrayMatching_Matching_Heading2_Div">
            Looking at the two images on the right,  the top X-ray is a patient’s right knee and the bottom X-ray is a comparison X-ray provided by the Step by Step database.  Both X-rays show a similar amount of joint space narrowing, therefore they are a match.
          </div>
          {
              [{name:'Normal to Slight',id:'1'},{name:'Moderate',id:'2'},{name:'Near End Stage',id:'3'},{name:'End Stage',id:'4'}].map((text,id)=>
              <div className="Evaluaion_XrayMatching_Matching_State_Button_Div" key={id}>
                  <Button className="Evaluaion_XrayMatching_Matching_State_Button"  style={{ background:text.id=='2'?'#fffb00':'hsla(0, 0%, 100%, 0.08)'}} variant="contained" > <span  style={{color:text.id==='2'?this.state.error==true?'#ffffff':'#000000':'#ffffff'}}> {text.name} </span> </Button>
              </div>
              )
          }
          <div style={{display:'block',width:'100%'}}>
              {
                  this.state.next==true?<div className="Tutorial_XrayMatching_Matching_Correct_Div">
                      Correct answer
                  </div>:null
              }

                      <div className="Evaluaion_XrayMatching_Matching_Confirm_Button_Div" style={{width:'150px',marginRight:'20px'}} >
                          <Button className="Evaluaion_XrayMatching_Matching_Confirm_Button" variant="contained" onClick={()=>{this.context.history.push("./x-ray-matching-and-levels-of-degeneration");}}> Back </Button>
                      </div>
              
                      <div className="Evaluaion_XrayMatching_Matching_Confirm_Button_Div" >
                          <Button className="Evaluaion_XrayMatching_Matching_Confirm_Button" variant="contained" onClick={()=>{this.context.setCookie("tutorial-" + this.context.state.user_id,31); this.context.history.push("./congrats");}}> Continue </Button>
                      </div>
                 
              
              {/* {
                  this.state.Active &&
                  <div className="Evaluaion_XrayMatching_Matching_AddNotes_Button_Div">
                      <Button className="Evaluaion_XrayMatching_Matching_AddNotes_Button" variant="contained" onClick={this.handleNotesClick}> Add Notes </Button>
                  </div>
              } */}
              
          </div>
          
      </div>
      <div  id="Evaluaion_XrayMatching_Matching_Content2_Wrapper">
                    <div id="Evaluaion_XrayMatching_Matching_Heading3_Div">
                      MEDIAL FLEXION VIEW
                    </div>
                   
                    <div style={{maxWidth:'500px',maxHeight:'calc(50% - 30px)'}}>
                        <img style={{maxWidth:'100%',maxHeight:'100%'}} src={ImageUp}/>
                    </div>
                    {
                        <div style={{maxWidth:'500px',maxHeight:'calc(50% - 30px)'}}>
                          <img style={{maxWidth:'100%',maxHeight:'100%'}} src={ImageDown}/>
                        </div>
                    }
                     
                </div>


         
            {/* <div id="XRMMS_Next_Button_Div">
              <Button
                id="XRMMS_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.history.push(
                    "./x-ray-matching-and-levels-of-degeneration"
                  );
                }}
              >
                {" "}
                back{" "}
              </Button>
              <Button
                id="XRMMS_Next_Button"
                variant="contained"
                onClick={() => {
                  this.context.setCookie("tutorial-" + this.context.state.user_id,31);
                  this.context.history.push("./congrats");
                }}
              >
                {" "}
                Continue{" "}
              </Button>
            </div> */}
      </div>
    );
  }
}
XRMMS.contextType = MyContext;
export default XRMMS;
