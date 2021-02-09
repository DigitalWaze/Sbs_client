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
        this.state = { loading:true,rows:[]}
    }


    componentDidMount()
    {
      GetData(this.context.baseUrl+'/api/v1/user/all-incomplete-reports',200,this.context.state.token,this.setMe);
    }

    setMe = (response) =>
    { 
      if(response.reports.length>0)
      {
        // response.forEach(element => {
        // let mydate=element.patient[0].date.toString().match(/\d+/g).map(Number);
        // let mydate_year=mydate[0];
        // let mydate_month=mydate[1];
        // let mydate_date=mydate[2];

        // if(mydate_month.toString().length==1)
        // {
        //     mydate_month='0'+mydate_month;
        // }
        
        // if(mydate_date.toString().length==1)
        // {
        //     mydate_date='0'+mydate_date;
        // }
        // let newdate=mydate_month+'-'+mydate_date+'-'+mydate_year;
        //     rows.push({patient_id:element.patient[0].id,patient_name:element.patient[0].name,evaluation_date:newdate,report_id:element.id})
        // });

        this.setState({rows:response.reports,loading:false})
      }
      else this.setState({loading:false})
    }

    handleRecover = (id) =>
    {
      this.setState({loading:true})
      this.context.newEval();
      GetData(this.context.baseUrl+`/api/v1/get/incomplete-report?report_id=${id}`,200,this.context.state.token,this.setMeTwo)
    }
    

    setMeTwo = (response) =>
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
                    {this.state.rows.map((row, id) => (
                      
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