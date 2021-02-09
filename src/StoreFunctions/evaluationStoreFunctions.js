
import React from 'react';

import GetDataJson from '../Fetch/getDataJsonAsync';

//images

    //general
import Bone1Image from "../assets/bone3_Bitmap.png";

    //upload-xray-thumbnails
import Xray1 from '../assets/uploadBoxThumb/xray1.jpg';
import Xray2 from '../assets/uploadBoxThumb/xray2.jpg';
import Xray3 from '../assets/uploadBoxThumb/xray3.jpg';
import Xray4Left from '../assets/uploadBoxThumb/xray4Left.jpg';
import Xray4Right from '../assets/uploadBoxThumb/xray4Right.jpg';

//matching evaluation static images

    //right knee thumbnails
import MFV from "../assets/medial-flexion.png";
import MNFV from "../assets/medial-nonflexion.png";
import LFV from "../assets/lateral-flexion.png";
import LNFV from "../assets/lateral-nonflexion.png";
import KV from "../assets/kneecapview.jpg";

    //left knee thumbnails
import LMFV from "../assets/left-medial-flexion.png";
import LMNFV from "../assets/left-medial-nonflexion.png";
import LLFV from "../assets/left-lateral-flexion.png";
import LLNFV from "../assets/left-lateral-nonflexion.png";

    //right-knee-matching-dummy-images 
import MFVUP from "../assets/medial-flexion-up.png";
import MNFVUP from "../assets/medial-nonflexion-up.png";
import LFVUP from "../assets/lateral-flexion-up.png";
import LNFVUP from "../assets/lateral-nonflexion-up.png";
import KVUP from "../assets/kneecap-up.png";

    //left-knee-matching-dummy-images 
import LMFVUP from "../assets/left-medial-flexion-up.png";
import LMNFVUP from "../assets/left-medial-nonflexion-up.png";
import LLFVUP from "../assets/left-lateral-flexion-up.png";
import LLNFVUP from "../assets/left-lateral-nonflexion-up.png";
import LKVUP from "../assets/left-kneecap-up.png";

    //matching images
        //normal
import MFVUP1 from "../assets/eval-comp-xrays/medial-flexion-up-1.png";
import MNFVUP1 from "../assets/eval-comp-xrays/medial-nonflexion-up-1.png";
import LFVUP1 from "../assets/eval-comp-xrays/lateral-flexion-up-1.png";
import LNFVUP1 from "../assets/eval-comp-xrays/lateral-nonflexion-up-1.png";
import KVUP1 from "../assets/eval-comp-xrays/kneecap-up-1.png"

        //moderate
import MFVUP2 from "../assets/eval-comp-xrays/medial-flexion-up-2.png";
import MNFVUP2 from "../assets/eval-comp-xrays/medial-nonflexion-up-2.png";
import LFVUP2 from "../assets/eval-comp-xrays/lateral-flexion-up-2.png";
import LNFVUP2 from "../assets/eval-comp-xrays/lateral-nonflexion-up-2.png";
import KVUP2 from "../assets/eval-comp-xrays/kneecap-up-2.png";

        //near-end-stage
import MFVUP3 from "../assets/eval-comp-xrays/medial-flexion-up-3.png";
import MNFVUP3 from "../assets/eval-comp-xrays/medial-nonflexion-up-3.png";
import LFVUP3 from "../assets/eval-comp-xrays/lateral-flexion-up-3.png";
import LNFVUP3 from "../assets/eval-comp-xrays/lateral-nonflexion-up-3.png";
import KVUP3 from "../assets/eval-comp-xrays/kneecap-up-3.png";

        //end-stage
import MFVUP4 from "../assets/eval-comp-xrays/medial-flexion-up-4.png";
import MNFVUP4 from "../assets/eval-comp-xrays/medial-nonflexion-up-4.png";
import LFVUP4 from "../assets/eval-comp-xrays/lateral-flexion-up-4.png";
import LNFVUP4 from "../assets/eval-comp-xrays/lateral-nonflexion-up-4.png";
import KVUP4 from "../assets/eval-comp-xrays/kneecap-up-4.png";

        //cannot-eval-image
import CEimage from '../assets/eval-comp-xrays/cannotEval.jpg'

export async function LoadNewEval(Store,oldEvaluation,route=null)   {

    let patient = {};
    let evaluation_stage;
    if(oldEvaluation.stage)
    {
        evaluation_stage =  oldEvaluation.stage.id; 
    }
    patient["name"]=oldEvaluation.patient[0].name;    
    patient["birth_date"]=DateFormatter(oldEvaluation.patient[0].birthday,'/')
    patient["age"]=oldEvaluation.patient[0].age;
    patient["gender"]=oldEvaluation.patient[0].gender;
    patient["height"]=oldEvaluation.patient[0].height;
    patient["home_phone"]=oldEvaluation.patient[0].homephone;
    patient["cell_phone"]=oldEvaluation.patient[0].cellphone;
    patient["weight"]=oldEvaluation.patient[0].weight;
    patient["home_address"]=oldEvaluation.patient[0].homeaddress;
    patient["email"]=oldEvaluation.patient[0].email;
    patient["marital_status"]=oldEvaluation.patient[0].maritalstatus;
    patient["date"]=DateFormatter(oldEvaluation.patient[0].date,'-')

    console.log(patient)
    let temp_report_id=oldEvaluation.incomplete_vistor_id;
    if(!temp_report_id)
    {
        temp_report_id = oldEvaluation.report_id;
    }
    console.log(temp_report_id)
    let temp_patient_id=oldEvaluation.patient[0].id;
    console.log(temp_patient_id)
        
    let Eval=[];
    let activeJointIndex=0;

    //populating forms
    let newForm=[];
    let Xrays=[];
    let noOfEvalRemainToUpload=null;

    if(parseInt(evaluation_stage)>1)
    {
        if(oldEvaluation.joint_hurt_priority.length>0)
        {
            const EvalAndForm = await initializeFormAndEval(oldEvaluation.joint_hurt_priority);
            Eval = EvalAndForm.Eval;
            newForm = EvalAndForm.Form;
            activeJointIndex = 0;
            noOfEvalRemainToUpload = Eval.length;
        }  
    }

    if(parseInt(evaluation_stage)>2)
    {
        if(oldEvaluation.form.length>0)
        {
            oldEvaluation.form.forEach(element => {
                let question=newForm.find(el => el.question_id==element.question_id && el.joint_id.toString()==element.joint_id.toString());
                question.visitor_id=element.visitor_id;
                question.pro_severity_id=element.pro_severity_id;
            });
        }
    }

    if(parseInt(evaluation_stage)>3)
    {
        if(oldEvaluation.Uploaded_xrays.length>0)
        {
            let RightKnee=false;
            let LeftKnee=false;

            Eval.forEach(element => {
                if(element.name==="Right Knee")
                {
                    RightKnee=true
                }
                else if(element.name==="Left Knee")
                {
                    LeftKnee=true
                }
                
            });

            console.log(RightKnee)
            console.log(LeftKnee)

            if(RightKnee===true && LeftKnee === true)
            {
                
                Xrays=[
                    {id:7,name:'PA Standing Bilateral Flexion',isDone:false,image:null,thumbnail:Xray1,enable:true},
                    {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:false,image:null,thumbnail:Xray2,enable:false},
                    {id:6,name:'Bilateral Kneecap',isDone:false,image:null,thumbnail:Xray3,enable:false},
                    {id:3,name:'Right Lateral',isDone:false,image:null,thumbnail:Xray4Right,enable:false},
                    {id:5,name:'Left Lateral',isDone:false,image:null,thumbnail:Xray4Left,enable:false},

                ] 
            }

            else if(RightKnee==true)
            {
                Xrays=[
                    {id:7,name:'PA Standing Bilateral Flexion',isDone:false,image:null,thumbnail:Xray1,enable:true},
                    {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:false,image:null,thumbnail:Xray2,enable:false},
                    {id:2,name:'Right Kneecap',isDone:false,image:null,thumbnail:Xray3,enable:false},
                    {id:3,name:'Right Lateral',isDone:false,image:null,thumbnail:Xray4Right,enable:false},
                ] 
            }

            else if(LeftKnee==true)
            {
                Xrays=[
                    {id:7,name:'PA Standing Bilateral Flexion',isDone:false,image:null,thumbnail:Xray1,enable:true},
                    {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:false,image:null,thumbnail:Xray2,enable:false},
                    {id:4,name:'Left Kneecap',isDone:false,image:null,thumbnail:Xray3,enable:false},
                    {id:5,name:'Left Lateral',isDone:false,image:null,thumbnail:Xray4Left,enable:false},
                ] 
            }
        }

        if(oldEvaluation.evaluation.length>0)
        {
            console.log('here at matching eva');
            oldEvaluation.evaluation.forEach((matchingEval) => {

                let curr_processed_xray = oldEvaluation.Processed_Xray.find( xray => xray.id.toString() === matchingEval.processed_xray_id.toString());
                console.log(curr_processed_xray)
                let curr_view_id = curr_processed_xray.view_id;
                console.log(curr_view_id)
                let curr_type_id = curr_processed_xray.processed_xray_type_id;
                console.log(curr_type_id)

                let Curr_Joint_id = oldEvaluation.joint_hurt_priority.find((joint) => joint.id.toString() === curr_processed_xray.joint_hurt_id.toString()).joint_id;
                console.log(Curr_Joint_id)

                let tempEvaluation = Store.state.Evaluations.find(eva => eva.joint_id.toString() === Curr_Joint_id.toString())
                console.log(tempEvaluation)

                let tempEvaType = tempEvaluation.Xrays.find(type => type.id.toString() === curr_type_id.toString())
                console.log(tempEvaType)

                tempEvaType.xrays.find( (view) => view.id.toString() === curr_view_id.toString()).state=matchingEval.xray_matching_id;

            })

            console.log('final',Store.state.Evaluations);
        }
        
    }

    if(parseInt(evaluation_stage)>4)
    {
        
        
    }

    if(route==null)
    {
        route="/evaluation/demographics";
    }

    //get processed xrays images and move on
    if(evaluation_stage>3)    
    {
        await SetProcessedXrays(Xrays,temp_report_id,Store)
        let stateArray = [{key:'noOfEvalRemainToUpload',value:noOfEvalRemainToUpload},{key:'evaluation_stage',value:evaluation_stage},{key:'form',value:newForm},{key:'Eval',value:Eval},{key:'activeJointIndex',value:activeJointIndex},{key:'report_id',value:temp_report_id},{key:'patient_id',value:temp_patient_id},{key:'patient',value:patient}]
        Store.multipleUpdateValueWithHistory(stateArray,route);
    }

    //move on
    else Store.multipleUpdateValueWithHistory([{key:'noOfEvalRemainToUpload',value:noOfEvalRemainToUpload},{key:'evaluation_stage',value:evaluation_stage},{key:'Xrays',value:Xrays},{key:'form',value:newForm},{key:'Eval',value:Eval},{key:'activeJointIndex',value:activeJointIndex},{key:'report_id',value:temp_report_id},{key:'patient_id',value:temp_patient_id},{key:'patient',value:patient}],route)
}

async function SetProcessedXrays(Xrays,report_id,Store)
{
    const isExist = await CheckXrays(Xrays);
    if(isExist===false)
    {
        const response = await getXrays(report_id,Store.baseUrl,Store.state.token);
        const abcd = await setXrays(response,Xrays,Store)
    }

    return;
}


function CheckXrays(Xrays)
{
    let xrayExist = true;

    console.log('checking xrays => ',Xrays)
    Xrays.forEach((xray)=>
    { 
        if(xray.image)
        {
            if(xray.image.toString()==="null" || xray.image.toStrimg()==="" || xray.image.toString()===" ")
            {
                xrayExist=false;
            }
        }
        else xrayExist=false;    
    })

    return xrayExist;
}

async function getXrays(report_id,baseUrl,token)
{
    let req = 
    {
        visitor_id:report_id
    }
    const response = await GetDataJson(baseUrl+'/api/v1/xrays',200,req,token);
    return response;
}

async function setXrays( response,Xrays,Store )
{
    console.log('in set xrays => ',response);
    let contextXrays = Xrays;
    if(response.ResponseCode==="Success")
    {
        response.Xrays.forEach((xray)=>
        {
            let row = contextXrays.find((x)=> x.id.toString()===xray.xray_type_id.toString());
            if(row)
            {
                row.image=xray.url;
            }
        })
    }

    console.log(contextXrays)
    await Store.multipleUpdateValue([{key:'Xrays',value:contextXrays}])
    return;
}



function DateFormatter(date,splitter='/')
{
    
    let CustomDate = date.toString().match(/\d+/g).map(Number);
    let CustomDate_year=CustomDate[0];
    let CustomDate_month=CustomDate[1];
    let CustomDate_date=CustomDate[2];
    if(CustomDate_month.toString().length==1)
    {
        CustomDate_month='0'+CustomDate_month;
    }  
    if(CustomDate_date.toString().length==1)
    {
        CustomDate_date='0'+CustomDate_date;
    }
    return CustomDate_date+splitter+CustomDate_month+splitter+CustomDate_year;
}


function initializeFormAndEval(joint_hurts)
{
    console.log(joint_hurts)
    //Any change in this function, then newEvaluation should also be changed.
    let Form = [];
    let Eval =[];
    for(let i=0; i<joint_hurts.length; i++)
    {    
        let element = joint_hurts[i];
        Form.push({name:'Question1',question_id:1,pro_severity_id:null,visitor_id:null,joint_id:element.joint_id})
        Form.push({name:'Question2',question_id:2,pro_severity_id:null,visitor_id:null,joint_id:element.joint_id})
        Form.push({name:'Question3',question_id:3,pro_severity_id:null,visitor_id:null,joint_id:element.joint_id})
        Form.push({name:'Question4',question_id:4,pro_severity_id:null,visitor_id:null,joint_id:element.joint_id})
        Form.push({name:'Question5',question_id:5,pro_severity_id:null,visitor_id:null,joint_id:element.joint_id})
        Form.push({name:'Question6',question_id:6,pro_severity_id:null,visitor_id:null,joint_id:element.joint_id})
        Form.push({name:'Question7',question_id:7,pro_severity_id:null,visitor_id:null,joint_id:element.joint_id})
        
    
        let name=null;
        if(element.joint_id=='3')
        {
            name='Right Knee'
        }
        else if(element.joint_id=='4')
        {
            name='Left Knee'
        }
        else if(element.joint_id=='1')
        {
            name='Right Hip'
        }
        else if(element.joint_id=='2')
        {
            name='Left Hip'
        }

        Eval.push({visitor_id:element.visitor_id,joint_id:element.joint_id,name:name,priority_id:element.priority_id,isEvaluated:false,joint_hurt_id:element.id})
    }

    Eval.sort(function(a, b){ return a.priority_id-b.priority_id});
    return {Eval,Form}    
}


export function emptyEvalState(global)
{
    let Evaluations=
    [   
        {name:'Right Knee',image:Bone1Image  , joint_id:'3',
            Xrays:[ 
                {name:'Medial',id:1,isDone:false,enable:true,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:true,state:null,state_id:null,notes:null,thumbnail:MFV,up:MFVUP,up1:MFVUP1,up2:MFVUP2,up3:MFVUP3,up4:MFVUP4,up5:CEimage,prediction:''},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,state_id:null,notes:'',thumbnail:MNFV,up:MNFVUP,up1:MNFVUP1,up2:MNFVUP2,up3:MNFVUP3,up4:MNFVUP4,up5:CEimage,prediction:''}]},
                {name:'Lateral',id:2,isDone:false,enable:false,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:LFV,up:LFVUP,up1:LFVUP1,up2:LFVUP2,up3:LFVUP3,up4:LFVUP4,up5:CEimage,prediction:''},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,state_id:null,notes:'',thumbnail:LNFV,up:LNFVUP,up1:LNFVUP1,up2:LNFVUP2,up3:LNFVUP3,up4:LNFVUP4,up5:CEimage,prediction:''}]},
                {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:KV,up:KVUP,up1:KVUP1,up2:KVUP2,up3:KVUP3,up4:KVUP4,up5:CEimage,prediction:''}]},

            ] 
        },

        {name:'Left Knee',image:Bone1Image  , joint_id:'4' ,
            Xrays:[ 
                {name:'Medial',id:1,isDone:false,enable:true,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:true,state:null,notes:null,thumbnail:LMFV,up:LMFVUP,up1:MFVUP1,up2:MFVUP2,up3:MFVUP3,up4:MFVUP4,up5:CEimage,prediction:''},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,notes:'',thumbnail:LMNFV,up:LMNFVUP,up1:MNFVUP1,up2:MNFVUP2,up3:MNFVUP3,up4:MNFVUP4,up5:CEimage,prediction:''}]},
                {name:'Lateral',id:2,isDone:false,enable:false,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:false,state:null,notes:null,thumbnail:LLFV,up:LLFVUP,up1:LFVUP1,up2:LFVUP2,up3:LFVUP3,up4:LFVUP4,up5:CEimage,prediction:''},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,notes:'',thumbnail:LLNFV,up:LLNFVUP,up1:LNFVUP1,up2:LNFVUP2,up3:LNFVUP3,up4:LNFVUP4,up5:CEimage,prediction:''}]},
                {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:null,notes:'',thumbnail:KV,up:LKVUP,up1:KVUP1,up2:KVUP2,up3:KVUP3,up4:KVUP4,up5:CEimage,prediction:''}]},
            ] 
        }
    ]
    global.setState({old:false,Xrays:[],evaluation_stage:0,noOfEvalRemainToUpload:null,XrayMatch:false,UXray:false,Pro:false,Evaluations:Evaluations,Eval:[],form:[],patient:{},report_id:null,patient_id:null,activeJointIndex:0})
}


export function LoadDummyEvaluation(Store,route)
{
    let form = [
        { name: "Question1",question_id: 1, joint_id:3, pro_severity_id: 4, visitor_id: 39, },
        { name: "Question2", question_id: 2, joint_id:3, pro_severity_id: 3,visitor_id: 39,},
        { name: "Question3", question_id: 3, joint_id:3, pro_severity_id: 3, visitor_id: 39, },
        { name: "Question4", joint_id:3, question_id: 4, pro_severity_id: 3, visitor_id: 39, },
        { name: "Question5", question_id: 5, joint_id:3, pro_severity_id: 3,visitor_id: 39, },
        { name: "Question6", joint_id:3, question_id: 6, pro_severity_id: 3, visitor_id: 39, },
        { name: "Question7", question_id: 7, joint_id:3, pro_severity_id: 3, visitor_id: 39, },
        { name: "Question1",question_id: 1, joint_id:4, pro_severity_id: 4, visitor_id: 39, },
        { name: "Question2", question_id: 2, joint_id:4, pro_severity_id: 4,visitor_id: 39,},
        { name: "Question3", question_id: 3, joint_id:4, pro_severity_id: 2, visitor_id: 39, },
        { name: "Question4", joint_id:4, question_id: 4, pro_severity_id: 2, visitor_id: 39, },
        { name: "Question5", question_id: 5, joint_id:4, pro_severity_id: 2,visitor_id: 39, },
        { name: "Question6", joint_id:4, question_id: 6, pro_severity_id: 2, visitor_id: 39, },
        { name: "Question7", question_id: 7, joint_id:4, pro_severity_id: 2, visitor_id: 39, },
    ];

    let Xrays=[
        {id:7,name:'PA Standing Bilateral Flexion',isDone:false,image:Xray1,thumbnail:Xray1,enable:true},
        {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:false,image:Xray2,thumbnail:Xray2,enable:false},
        {id:6,name:'Bilateral Kneecap',isDone:false,image:Xray3,thumbnail:Xray3,enable:false},
        {id:3,name:'Right Lateral',isDone:false,image:Xray4Right,thumbnail:Xray4Right,enable:false},
        {id:5,name:'Left Lateral',isDone:false,image:Xray4Left,thumbnail:Xray4Left,enable:false},

    ];

    let patient={};
    patient.name="Muhammad Ammar";
    patient.date="08-15-2020"

    //[{name:'Normal to Slight',id:'1'},{name:'Moderate',id:'2'},{name:'Near End Stage',id:'3'},{name:'End Stage',id:'4'},{name:'Cannot Evaluate',id:'5'}]

  
    let Evaluations=
    [
        {name:'Right Knee',image:Bone1Image  , joint_id:'3',
            Xrays:[
                {name:'Medial',id:1,isDone:false,enable:true,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:true,state:'1',state_id:null,notes:null,thumbnail:MFV,up:MFVUP,up1:MFVUP1,up2:MFVUP2,up3:MFVUP3,up4:MFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:'1',state_id:null,notes:'',thumbnail:MNFV,up:MNFVUP,up1:MNFVUP1,up2:MNFVUP2,up3:MNFVUP3,up4:MNFVUP4}]},
                {name:'Lateral',id:2,isDone:false,enable:false,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:false,state:'3',state_id:null,notes:null,thumbnail:LFV,up:LFVUP,up1:LFVUP1,up2:LFVUP2,up3:LFVUP3,up4:LFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:'1',state_id:null,notes:'',thumbnail:LNFV,up:LNFVUP,up1:LNFVUP1,up2:LNFVUP2,up3:LNFVUP3,up4:LNFVUP4}]},
                {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:'4',state_id:null,notes:null,thumbnail:KV,up:KVUP,up1:KVUP1,up2:KVUP2,up3:KVUP3,up4:KVUP4}]},
            ]
        },
        {name:'Left Knee',image:Bone1Image  , joint_id:'4' ,
            Xrays:[
            {name:'Medial',id:1,isDone:false,enable:true,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:true,state:'2',notes:null,thumbnail:LMFV,up:LMFVUP,up1:MFVUP1,up2:MFVUP2,up3:MFVUP3,up4:MFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:'1',notes:'',thumbnail:LMNFV,up:LMNFVUP,up1:MNFVUP1,up2:MNFVUP2,up3:MNFVUP3,up4:MNFVUP4}]},
            {name:'Lateral',id:2,isDone:false,enable:false,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:false,state:'2',notes:null,thumbnail:LLFV,up:LLFVUP,up1:LFVUP1,up2:LFVUP2,up3:LFVUP3,up4:LFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:'1',notes:'',thumbnail:LLNFV,up:LLNFVUP,up1:LNFVUP1,up2:LNFVUP2,up3:LNFVUP3,up4:LNFVUP4}]},
            {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:'2',notes:'',thumbnail:KV,up:LKVUP,up1:KVUP1,up2:KVUP2,up3:KVUP3,up4:KVUP4}]},
            ]
        }
    ]
    let Eval=[];
    Eval.push({joint_hurt_id:'12',visitor_id:'39',joint_id:'4',name:'Left Knee',priority_id:1,isEvaluated:false}) 
    Eval.push({joint_hurt_id:'11',visitor_id:'39',joint_id:'3',name:'Right Knee',priority_id:3,isEvaluated:false})   // Right Knee

    Store.multipleUpdateValueWithHistory([
        {key:'type',value:'2'},
        {key:'user_id',value:'2'},
        {key:'user_email',value:'Dummy_ammar@sbs.com'},
        {key:'user_type',value:{id:'2',type:'admin'}},
        {key:'isTutorialCompleted',value:'true'},
        {key:'loading',value:false},
        {key:'patient_id',value:'4948'},{key:'Xrays',value:Xrays},{key:'activeJointIndex',value:0},{key:'Eval',value:Eval},{key:'form',value:form},{key:'patient',value:patient},{key:'evaluation_stage',value:4},{key:'report_id',value:39},{key:'Evaluations',value:Evaluations},{key:'token',value:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTU4OTIwNTk4N30.k8ywG7mAJjyGq3lCmCwY-VVBzqvyP_9kmIKufZYIghs'},
        {key:'UXray',value:'true'},

        
    ],route)
    console.log('----------- UpdateD store with dummy data ------------')
}
    


