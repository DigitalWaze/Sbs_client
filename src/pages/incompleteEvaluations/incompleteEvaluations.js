import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


import './incompleteEvaluations.css';
import MyContext from '../../helper/themeContext';
import GetData from '../../Fetch/getDataUniversal';
import { SemipolarLoading } from 'react-loadingg';
import { LoadNewEval } from '../../StoreFunctions/evaluationStoreFunctions';


class IncompleteEvaluations extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:false}
    }

    handleClick = () =>
    {
        this.context.clearEvalState();
        this.context.history.push('./welcome')
    }

    componentDidMount()
    {

    }

    handleRecover = (id) =>
    {
      this.setState({loading:true})
      this.context.newEval();
      GetData(this.context.baseUrl+`/api/v1/get/report?report_id=${id}`,200,this.context.state.token,this.setMe)
    }

    setMe = (response) =>
    {
      if(response.incomplete_vistor_id!=null && response.incomplete_vistor_id!=undefined && response.incomplete_vistor_id!=="" && response.incomplete_vistor_id!==" ")
      {
        LoadNewEval(this.context,response);
      }      
    }  

    render() { 
        return (
          <div id="Evaluaion_PatientReport_Main_Div">
            {this.state.loading == true ? (
              <SemipolarLoading size={"large"} color={"#b4ec51"} />
            ) : (
              <div id="Evaluaion_PatientReport_Content_Wrapper" style={{ justifyContent: "flex-start" }}>
                <div id="Evaluaion_PatientReport_Heading1_Div">Select a Report to Resume</div>

                <div id="Evalution_History_Table_Wrapper" style={{ width: "80vw" }}>
                  <div id="Evalution_History_Table_Head">
                    <div style={{ width: "calc(15% - 20px)", display: "inline-block", marginRight: "20px" }}>Patient Id</div>
                    <div style={{ width: "calc(15% - 20px)", display: "inline-block", marginRight: "20px" }}>Report Id</div>
                    <div style={{ width: "calc(40% - 20px)", display: "inline-block", marginRight: "20px" }}>Last Stage Completed</div>
                    <div style={{ width: "calc(30% - 20px)", display: "inline-block", marginRight: "20px" }}></div>
                  </div>

                  <div
                    id="Evalution_History_Table_Line"
                    style={{ width: "100%", height: "2px", background: "#ffffff" }}>      
                  </div>

                  <div id="Evalution_History_Table_Body">
                    {this.context.state.oldEvaluations.map((row, id) => (
                      
                      <div className="Evalution_History_Table_Body_Row">
                        <div
                          className="Evalution_History_Table_Body_Text"
                          style={{ width: "calc(15% - 20px)", display: "inline-block", marginRight: "20px" }}>
                          {row.visitor.patient_id}
                        </div>
                        <div
                          className="Evalution_History_Table_Body_Text"
                          style={{ width: "calc(15% - 20px)", display: "inline-block", marginRight: "20px" }}>
                          {row.visitor.id}
                        </div>
                        <div
                          className="Evalution_History_Table_Body_Text"
                          style={{ width: "calc(40% - 20px)", display: "inline-block", marginRight: "20px" }}>
                          {row.stage.stage}
                        </div>
                        <div style={{ width: "calc(30% - 20px)", display: "inline-block", marginRight: "20px" }}>
                          <Button
                            className="Evaluaion_History_Button"
                            variant="contained"
                            onClick={() => {
                              this.handleRecover(row.visitor.id);
                            }}>
                            {" "}
                            Resume Report{" "}
                          </Button>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>

                <div id="Evaluaion_PatientReport_Back_Button_Div">
                  <Button
                    id="Evaluaion_PatientReport_Next_Button"
                    variant="contained"
                    onClick={() => this.context.history.goBack()}>
                    {" "}
                    Back{" "}
                  </Button>
                </div>

                <div id="Evaluaion_PatientReport_Next_Button_Div">
                  <Button
                    id="Evaluaion_PatientReport_Next_Button"
                    variant="contained"
                    onClick={() => {
                      this.context.history.push("/home");
                    }}>
                    {" "}
                    BACK TO HOME{" "}
                  </Button>
                </div>
              </div>
            )}
          </div>
        );
    }
}
IncompleteEvaluations.contextType=MyContext;
export default IncompleteEvaluations;