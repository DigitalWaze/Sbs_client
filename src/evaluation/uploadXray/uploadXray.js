import React, { Component } from 'react';

import MyContext from '../../helper/themeContext';
// import firebase from '../../helper/firebase';

import './uploadXray.css';

import Xray1 from '../../assets/uploadBoxThumb/xray1.jpg';
import Xray2 from '../../assets/uploadBoxThumb/xray2.jpg';
import Xray3 from '../../assets/uploadBoxThumb/xray3.jpg';
import Xray4Left from '../../assets/uploadBoxThumb/xray4Left.jpg';
import Xray4Right from '../../assets/uploadBoxThumb/xray4Right.jpg';

import Acknowledge from './acknowledge';
import OverviewBox from './overview'; 
import UploadBox from './upload';
import ExportScript from './exportScript';

import { SemipolarLoading } from 'react-loadingg';
// import PostData from '../../Fetch/postData3';
import PostFormData from './uploadPostForm';


let uploaded=0;

const AcknowledgePage = 0
const ExportScriptPage = 1
const OverviewPage = 2
const UploadPage = 3

class UploadXray extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            page:AcknowledgePage,
            activeId:0,
            Xrays:[],
            files:[],
            req:[],
            loading:false,
            uploadButton:false
        }
    }

    UNSAFE_componentWillMount()
    {   

        uploaded=0;
        if(this.context.state.Xrays && this.context.state.Xrays!=null && this.context.state.Xrays.length>0)
        {
            alert('here')
            let activeId=this.context.state.Xrays.length-1;
            this.setState({Xrays:this.context.state.Xrays,activeId,files:[],OverView:true,req:[],loading:false,page:OverviewPage})
        }
        else 
        {
            let RightKnee=false;
            let LeftKnee=false;
            this.context.state.Eval.forEach(element => {
                if(element.name==="Right Knee")
                {
                    RightKnee=true
                }
                else if(element.name==="Left Knee")
                {
                    LeftKnee=true
                }
                
            });
            if(RightKnee===true && LeftKnee === true)
            {
                
                let Xrays=[
                    {id:7,name:'PA Standing Bilateral Flexion',isDone:false,image:null,thumbnail:Xray1,enable:true},
                    {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:false,image:null,thumbnail:Xray2,enable:false},
                    {id:6,name:'Bilateral Kneecap',isDone:false,image:null,thumbnail:Xray3,enable:false},
                    {id:3,name:'Right Lateral',isDone:false,image:null,thumbnail:Xray4Right,enable:false},
                    {id:5,name:'Left Lateral',isDone:false,image:null,thumbnail:Xray4Left,enable:false},

                ] 
                this.setState({Xrays,page:AcknowledgePage,
                activeId:0,
                files:[],
                req:[],
                loading:false,})
            }

            else if(RightKnee===true)
            {
                let Xrays=[
                    {id:7,name:'PA Standing Bilateral Flexion',isDone:false,image:null,thumbnail:Xray1,enable:true},
                    {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:false,image:null,thumbnail:Xray2,enable:false},
                    {id:2,name:'Right Kneecap',isDone:false,image:null,thumbnail:Xray3,enable:false},
                    {id:3,name:'Right Lateral',isDone:false,image:null,thumbnail:Xray4Right,enable:false},

                ] 
                this.setState({Xrays,page:AcknowledgePage,
                activeId:0,
                files:[],
                req:[],
                loading:false,})

            }

            else if(LeftKnee===true)
            {
                let Xrays=[
                    {id:7,name:'PA Standing Bilateral Flexion',isDone:false,image:null,thumbnail:Xray1,enable:true},
                    {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:false,image:null,thumbnail:Xray2,enable:false},
                    {id:4,name:'Left Kneecap',isDone:false,image:null,thumbnail:Xray3,enable:false},
                    {id:5,name:'Left Lateral',isDone:false,image:null,thumbnail:Xray4Left,enable:false},

                ] 
                this.setState({Xrays,page:AcknowledgePage,
                activeId:0,
                files:[],
                req:[],
                loading:false,})
            }
        }
    }

    appendFile = (file,xrayname,xrayid) =>
    {
        let files=this.state.files;
        let fileObj={visitor_id:this.context.state.report_id,xray_type_id:xrayid,file:file,name:xrayname};
        files.push(fileObj);

        let Xrays=this.state.Xrays;
        Xrays[this.state.activeId].isDone=true;
        Xrays[this.state.activeId].image=URL.createObjectURL(file);

        if(this.state.activeId===this.state.Xrays.length-1) //last one for upload
        {
            this.setState({Xrays,page:OverviewPage,file,uploadButton:true})
        }

        else
        {
            Xrays[this.state.activeId+1].enable=true;
            this.setState({Xrays,page:OverviewPage,file})
        }
       

       

    }

    handleOverviewClick = (id) =>
    {
        this.setState({page:UploadPage,activeId:id})
    }


    Old = () =>
    {
        this.context.multipleUpdateValueWithHistory([{key:'UXray',value:true}],'./patient-profile')
    }

    handleUploadClick = () =>
    {
        if(this.state.activeId===this.state.Xrays.length-1) // always true because button appear on this condition - reference *appendFile function 
        {
            if(this.state.files.length===0)
            {
                alert('error');
                this.context.history.push('./patient-profile')
                return;
            }

          
            console.log(this.state.files);
            this.setState({loading:true})

            let i=0;

            console.log(this.state.files)

            let form_data = new FormData();
            form_data.append('visitor_id',this.context.state.report_id)

            for(i=0;i<this.state.files.length;i++)
            {
                let file=this.state.files[i];
                form_data.append(file.xray_type_id,file.file)
            }

            PostFormData(this.context.baseUrl+'/api/v1/upload/xray',200,form_data,this.context.state.token,this.newSetMe)


            
        }

       
        
    }

    
  


    newSetMe = (response) =>
    {
        console.log(response);
        if(response.responseCode==="Success")
        {   
            this.context.multipleUpdateValue([{key:'UXray',value:true},{key:'evaluation_stage',value:4},{key:'Xrays',value:this.state.Xrays}])
            this.context.history.push('./patient-profile')
        }
    }

    // checkAllUploaded = (uploaded,url,visitor_id,xray_type_id)  =>
    // {
    //     let req=this.state.req;
    //     req.push({visitor_id:visitor_id,xray_type_id:xray_type_id,image_url:url})
    //     if(uploaded===this.state.files.length)
    //     {
    //         PostData(this.context.baseUrl+'/api/v1/upload/xray',201,req,this.context.state.token,this.setMe)
    //     }
    // }

    // setMe = (response) =>
    // {
    //     if(response.length>0)
    //     {

    //         let oldEvaluations = this.context.state.oldEvaluations;
    //         let currEvaIndex = oldEvaluations.findIndex(evaluation => evaluation.id.toString() === this.context.state.activeEvaluation.id.toString() );

    //         oldEvaluations[currEvaIndex].stage.id=4;
    //         oldEvaluations[currEvaIndex].stage.stage="All Xrays Uploaded";

    //         let currentEvaluation = oldEvaluations[currEvaIndex];
            
    //         this.context.multipleUpdateValueWithHistory([{key:'UXray',value:true},{key:'Xrays',value:this.state.Xrays},{key:'oldEvaluations',value:oldEvaluations},{key:'activeEvaluation',value:currentEvaluation}])

    //         this.context.updateSession();
    //         this.context.history.push('./patient-profile')


    //     }
    // }


    handlePageChange = (page) =>
    {
        this.setState({page})
    }


    getPage = () =>
    {
        switch(this.state.page)
        {
            case 0: return <Acknowledge handleBackClick = {()=> this.context.history.push('./patient-profile')} Xrays={this.state.Xrays} handleYesClick={()=>this.handlePageChange(OverviewPage)} handleNoClick={()=>this.handlePageChange(ExportScriptPage)} />;
            case 1: return <ExportScript Xrays={this.state.Xrays} handleClick={(id)=>this.handleOverviewClick(id)} handleEntryClick={()=>this.handlePageChange(OverviewPage)} handleBackClick={()=>this.handlePageChange(AcknowledgePage)} />;
            case 2: return <OverviewBox Old={this.Old} handleUpload={this.handleUploadClick}  Xrays={this.state.Xrays} handleClick={(id)=>this.handleOverviewClick(id)} uploadButton={this.state.uploadButton} />;
            case 3: return <UploadBox  appendFile={(file,name,id)=>this.appendFile(file,name,id)} Xray={this.state.Xrays[this.state.activeId]} />
            default: return <div> Unreachable step</div>;
        }

    }

    render() { 
        return ( 
        
            <div id="Evaluaion_UploadXray_Main_Div">
            {this.state.loading===true?

                <SemipolarLoading size={"large"} color={'#b4ec51'}/>

            :
                <div  id="Evaluaion_UploadXray_Content1_Wrapper">
                    <div id="Evaluaion_UploadXray_Heading1_Div">
                        Upload X-rays
                    </div>
                    {
                        this.getPage()
                    }
                </div>
            }

            

        </div> );
    }
}
UploadXray.contextType=MyContext;
export default UploadXray;