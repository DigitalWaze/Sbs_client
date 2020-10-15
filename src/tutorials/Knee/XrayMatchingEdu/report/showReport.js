import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';


import MyContext from '../../../../helper/themeContext';

import Xray1 from '../../../../assets/matchingReportxray1.jpg';
import Xray2 from '../../../../assets/matchingReportxray2.jpg';
import Xray3 from '../../../../assets/matchingReportxray3.jpg';
import Xray4 from '../../../../assets/matchingReportxray4.jpg';
import Tick from '../../../../assets/tick-black.png';
import Search from '../../../../assets/search.png';
import Notes from '../../../../assets/notes.png';

import html2canvas from 'html2canvas'
import Bone1Image from '../../../../assets/bone3_Bitmap.png'

//thumbnails

import MFV from '../../../../assets/medial-flexion-traaining-up.png'
import MNFV from '../../../../assets/medial-nonflexion.png'
import LFV from '../../../../assets/lateral-flexion.png'
import LNFV from '../../../../assets/lateral-nonflexion.png'
import KV from '../../../../assets/kneecapview.jpg'

//




import MFVUP from '../../../../assets/matching-education-medial-flexion-up.png'
import MNFVUP from '../../../../assets/matching-education-medial-nonflexion-up.png'
import LFVUP from '../../../../assets/matching-education-lateral-flexion-up.png'
import LNFVUP from '../../../../assets/matching-education-lateral-nonflexion-up.png'
import KVUP from '../../../../assets/matching_tutorial_keencap_up.png'
import './showReport.css'
// import './report.css'

const height='60px';

let Evaluation= 
    {name:'Right Knee',image:Bone1Image  , joint_id:'3',
        Xrays:[ 
            {name:'Medial',id:1,isDone:false,enable:true,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:true,state:3,state_id:4,notes:null,thumbnail:MFV,up:MFVUP,answer:'2'},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:3,state_id:4,notes:null,thumbnail:MNFV,up:MNFVUP,answer:'2'}]},
            {name:'Lateral',id:2,isDone:false,enable:false,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:false,state:1,state_id:1,notes:null,thumbnail:LFV,up:LFVUP,answer:'1'},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:1,state_id:1,notes:null,thumbnail:LNFV,up:LNFVUP,answer:'1'}]},
            {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:4,state_id:2,notes:null,thumbnail:KV,up:KVUP,answer:'4'}]},

        ] 
    }

class ShowReport extends Component {
    constructor(props) {
        super(props);
        this.state = {  Evaluation:{} ,modal:false, total:0 , openModal:false}
    }


    UNSAFE_componentWillMount()
    {
        this.setState({Evaluation})
    }
    handleSelect(Type,Xray,State,Image)
    {
        console.log(this.props)
        this.props.handleState(State,Type,Xray,Image);
        this.props.handleView('Selected');
    }
    modalOpen = () =>
    {
        this.setState({modal:true})
    }
    modalClose = () =>
    {
        this.setState({modal:false})
    }
    handleSearchClick = (Xray) =>
    {
        this.setState({ActiveImage:Xray,modal:true})
    }

    handleNextClick = () =>
    {
        this.context.setCookie("tutorial-" + this.context.state.user_id,38);
        this.context.history.push('/tutorials/knee/options')
        
    }

    handleModalClose = () =>
    {
        this.setState({openModal:false})
    }

    handleModalOpen= () =>
    {
        this.setState({openModal:true})
    }

    handleNotesClick = (id) =>
    {   
        let notes="";
        if(id==1)
        {
            notes="Right " + "Flexion " + "Medial : "
            notes= notes + this.context.state.TMFVNotes + '\n' 
            notes= notes + "Right " + "Flexion " + "Lateral : " + this.context.state.TLFVNotes;
        }
        else if(id==2)
        {
            notes="Right " + "Non-Flexion " + "Medial : "
            notes= notes + this.context.state.TMNFVNotes + '\n' 
            notes= notes + "Right " + "Non-Flexion " + "Lateral : " +  this.context.state.TLNFVNotes;
        }

        else if(id==3)
        {
            notes="Right " + "Kneecap : "
            notes= notes + this.context.state.TKCVNotes;
        }
       
        this.setState({Notes:notes,openModal:true})
    }

    
    render() { 
        return (
          <div id="Evaluaion_Report_Main_Div">
            <div id="Evaluaion_Report_Content_Wrapper" style={{ flexDirection: "row" }}>
              <div id="ReportMainDiv">
                <Grid container>
                  <Grid container item xs={12} spacing={0} style={{ height: "80px" }}>
                    <React.Fragment>
                      <Grid item xs={8}>
                        <span className="Evaluaion_Report_Box_Text1">
                          Joint Evaluation: {this.state.Evaluation.name}
                        </span>
                        <span className="Evaluaion_Report_Box_Text2">{this.context.state.patient_name}</span>
                      </Grid>
                      {/* <Grid container item xs={4} >
                                        <React.Fragment>
                                            <Grid item xs={9}>
                                                <span className="Evaluaion_Report_Box_Priority">
                                                    Joint Priority:
                                                </span>
                                            </Grid>
                                            <Grid item xs={3}>
                                            <span className="Evaluaion_Report_Box_Priority_Box">
                                               {this.state.priority_id}
                                            </span>
                                            </Grid>
                                        </React.Fragment>
                                    </Grid> */}
                    </React.Fragment>
                  </Grid>

                  <Grid container item xs={6} spacing={0} style={{ height: "100px" }}>
                    <React.Fragment>
                      <Grid item xs={12}>
                        <span className="Evaluaion_Report_Box_Text3">
                          X-ray Evaluations: 10/22/2020 <br />
                          Date X-ray Taken: 10/22/2020
                        </span>
                      </Grid>
                    </React.Fragment>
                  </Grid>
                  <Grid container item xs={6} spacing={0} style={{ height: "100px" }}>
                    <React.Fragment>
                      <Grid item xs={3}>
                        <div
                          style={{
                            width: "2px",
                            height: "100px",
                            background: "white",
                            transform: "rotate(45deg) translateY(-15px) translateX(35px)",
                          }}></div>
                        <div className="Evaluaion_Report_Box_Text4">Normal/Slight</div>
                      </Grid>
                      <Grid item xs={3}>
                        <div
                          style={{
                            width: "2px",
                            height: "100px",
                            background: "white",
                            transform: "rotate(45deg) translateY(-15px) translateX(35px)",
                          }}></div>
                        <div className="Evaluaion_Report_Box_Text4">Moderate</div>
                      </Grid>
                      <Grid item xs={3}>
                        <div
                          style={{
                            width: "2px",
                            height: "100px",
                            background: "white",
                            transform: "rotate(45deg) translateY(-15px) translateX(35px)",
                          }}></div>
                        <div className="Evaluaion_Report_Box_Text4">Near End Stage</div>
                      </Grid>
                      <Grid item xs={3}>
                        <div
                          style={{
                            width: "2px",
                            height: "100px",
                            background: "white",
                            transform: "rotate(45deg) translateY(-15px) translateX(35px)",
                          }}></div>
                        <div className="Evaluaion_Report_Box_Text4">End Stage</div>
                      </Grid>
                    </React.Fragment>
                  </Grid>
                  {this.state.Evaluation.Xrays.map((type, id) => (
                    <Grid container item xs={12} key={id}>
                      <Grid
                        container
                        item
                        xs={3}
                        spacing={0}
                        style={{
                          border: "1px solid #fff",
                          height: `calc((${type.xrays.length} * ${height}) - (2px * ${type.xrays.length}))`,
                        }}>
                        <React.Fragment>
                          <Grid item xs={12} style={{ height: "100%" }}>
                            <div className="Evaluaion_Report_Box_Text5">
                              {type.name} <br /> {type.name !== "Kneecap" && "Compartment"}
                            </div>
                          </Grid>
                        </React.Fragment>
                      </Grid>
                      <Grid container item xs={9} spacing={0}>
                        {type.xrays.map((xray, id) => (
                          <React.Fragment key={id}>
                            <Grid
                              item
                              xs={4}
                              style={{
                                position: "relative",
                                border: "1px solid #fff",
                                height: `calc(${height} - 2px)`,
                              }}>
                              <div className="Evaluaion_Report_Box_Button_Div">
                                <Button
                                  className="Evaluaion_Report_Box_Button"
                                  variant="contained"
                                  onClick={() => this.handleSelect(type.name, xray.name, xray.state, xray.up)}>
                                  {" "}
                                  {xray.name}{" "}
                                </Button>
                              </div>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              style={{
                                border: "1px solid #fff",
                                height: `calc(${height} - 2px)`,
                                background: xray.state == 1 ? "#6C8D31" : "",
                              }}>
                              <div className="Evaluaion_Report_Box_Selected_Box">
                                {" "}
                                {xray.state == 1 && <img src={Tick} alt="Ticked" />}{" "}
                              </div>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              style={{
                                border: "1px solid #fff",
                                height: `calc(${height} - 2px)`,
                                background: xray.state == 2 ? "yellow" : "",
                              }}>
                              <div className="Evaluaion_Report_Box_Selected_Box">
                                {" "}
                                {xray.state == 2 && <img src={Tick} alt="Ticked" />}{" "}
                              </div>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              style={{
                                border: "1px solid #fff",
                                height: `calc(${height} - 2px)`,
                                background: xray.state == 3 ? "#fa9e2d" : "",
                              }}>
                              <div className="Evaluaion_Report_Box_Selected_Box">
                                {" "}
                                {xray.state == 3 && <img src={Tick} alt="Ticked" />}{" "}
                              </div>
                            </Grid>
                            <Grid
                              item
                              xs={2}
                              style={{
                                border: "1px solid #fff",
                                height: `calc(${height} - 2px)`,
                                background: xray.state == 4 ? "#C50000" : "",
                              }}>
                              <div className="Evaluaion_Report_Box_Selected_Box">
                                {" "}
                                {xray.state == 4 && <img src={Tick} alt="Ticked" />}{" "}
                              </div>
                            </Grid>
                          </React.Fragment>
                        ))}
                      </Grid>
                    </Grid>
                  ))}
                </Grid>

                <div style={{ paddingTop: "10px" }}>
                  <Modal open={this.state.modal} onClose={this.modalClose}>
                    <div className="Evaluation_Report_XrayImage_Modal_Wrapper">
                      <div className="Evaluation_Report_XrayImage_Modal">
                        <img src={this.state.ActiveImage} alt="Xray" style={{ display: "block", maxHeight: "60vh" }} />
                        <Button onClick={this.modalClose} variant="contained" id="Evaluaion_Report_Modal_Close_Button">
                          {" "}
                          Close{" "}
                        </Button>
                      </div>
                    </div>
                  </Modal>
                  <div style={{ display: "inline-block", padding: "0px 10px 0px 0px", position: "relative" }}>
                    <img src={Xray1} alt="Xray" style={{ maxHeight: "125px", height: "auto", width: "auto" }} />
                    <div
                      className="Evaluaion_Report_Box_Search_Box"
                      onClick={() => {
                        this.handleSearchClick(Xray1);
                      }}>
                      <img src={Search} alt="Search" style={{ width: "20px" }} />
                    </div>
                    <div
                      className="Evaluaion_Report_Box_Notes_Box"
                      onClick={() => {
                        this.handleNotesClick(1);
                      }}>
                      <img src={Notes} alt="Notes" style={{ width: "20px" }} />
                    </div>
                  </div>

                  <div style={{ display: "inline-block", padding: "0px 10px 0px 0px", position: "relative" }}>
                    <img src={Xray2} alt="Xray" style={{ maxHeight: "125px", height: "auto", width: "auto" }} />
                    <div
                      className="Evaluaion_Report_Box_Search_Box"
                      onClick={() => {
                        this.handleSearchClick(Xray2);
                      }}>
                      <img src={Search} alt="Search" style={{ width: "20px" }} />
                    </div>
                    <div
                      className="Evaluaion_Report_Box_Notes_Box"
                      onClick={() => {
                        this.handleNotesClick(2);
                      }}>
                      <img src={Notes} alt="Notes" style={{ width: "20px" }} />
                    </div>
                  </div>

                  <div style={{ display: "inline-block", padding: "0px 10px 0px 0px", position: "relative" }}>
                    <img src={Xray3} alt="Xray" style={{ maxHeight: "125px", height: "auto", width: "auto" }} />
                    <div
                      className="Evaluaion_Report_Box_Search_Box"
                      onClick={() => {
                        this.handleSearchClick(Xray3);
                      }}>
                      <img src={Search} alt="Search" style={{ width: "20px" }} />
                    </div>
                    <div
                      className="Evaluaion_Report_Box_Notes_Box"
                      onClick={() => {
                        this.handleNotesClick(3);
                      }}>
                      <img src={Notes} alt="Notes" style={{ width: "20px" }} />
                    </div>
                  </div>

                  <div style={{ display: "inline-block", padding: "0px 10px 0px 0px", position: "relative" }}>
                    <img src={Xray4} alt="Xray" style={{ maxHeight: "125px", height: "auto", width: "auto" }} />
                    <div
                      className="Evaluaion_Report_Box_Search_Box"
                      onClick={() => {
                        this.handleSearchClick(Xray4);
                      }}>
                      <img src={Search} alt="Search" style={{ width: "20px" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Tutorials_XrayMatching_Education_Report_Explanation_Div">
                Click on a view or x-ray to review your evaluation
              </div>
            </div>
            <div id="Evaluaion_Report_Next_Button_Div">
              <Button id="Evaluaion_Report_Next_Button" variant="contained" onClick={this.handleNextClick}>
                {" "}
                BACK TO HOME{" "}
              </Button>
            </div>
            <Modal
              open={this.state.openModal}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              style={{ position: "absolute", left: "calc(50vw - 250px)", top: "calc(50vh - 250px)" }}>
              <div className="Evaluaion_XrayMatching_Matching_Modal_Div">
                <div className="Evaluaion_XrayMatching_Matching_Modal_Heading">Notes</div>
                <div className="Evaluaion_XrayMatching_Matching_Modal_Notes_Div">
                  <textarea
                    className="Evaluaion_XrayMatching_Matching_Modal_Notes_TextArea"
                    value={this.state.Notes}></textarea>
                </div>
                <div style={{ marginTop: "20px", marginLeft: "50px" }}>
                  <div className="Evaluaion_XrayMatching_Matching_Modal2_Button_Div">
                    <Button
                      className="Evaluaion_XrayMatching_Matching_Modal2_Button"
                      variant="outlined"
                      onClick={this.handleModalClose}>
                      {" "}
                      Close{" "}
                    </Button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        );
    }
}
ShowReport.contextType=MyContext;
export default ShowReport;