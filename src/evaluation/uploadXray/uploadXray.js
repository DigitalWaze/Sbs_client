import React, { Component } from 'react';

import MyContext from '../../helper/themeContext';
import firebase from '../../helper/firebase';

import './uploadXray.css';

import Xray1 from '../../assets/xray1.jpeg';
import Xray2 from '../../assets/xray2.jpeg';
import Xray3 from '../../assets/xray3.jpeg';
import Xray4 from '../../assets/xray4.png';
import OverviewBox from './overview';
import UploadBox from './upload';

import { SemipolarLoading } from 'react-loadingg';
import PostData from '../../Fetch/postData3';
import PostFormData from './uploadPostForm';


let uploaded=0;


class UploadXray extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            OverView:true,
            activeId:0,
            Xrays:[],
            files:[],
            req:[],
            loading:false,
        }
    }

    UNSAFE_componentWillMount()
    {   

        uploaded=0;
        if(this.context.state.Xrays && this.context.state.Xrays!=null && this.context.state.Xrays.length>0)
        {
            let activeId=this.context.state.Xrays.length-1;
            this.setState({Xrays:this.context.state.Xrays,activeId,files:[],OverView:true,req:[],loading:false})
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
                    {id:12,name:'PA Standing Bilateral Flexion',isDone:false,image:null,thumbnail:Xray1,enable:true},
                    {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:false,image:null,thumbnail:Xray2,enable:false},
                    {id:6,name:'Bilateral Kneecap',isDone:false,image:null,thumbnail:Xray3,enable:false},
                    {id:3,name:'Right Lateral',isDone:false,image:null,thumbnail:Xray3,enable:false},
                    {id:5,name:'Left Lateral',isDone:false,image:null,thumbnail:Xray4,enable:false},

                ] 
                this.setState({Xrays,OverView:true,
                activeId:0,
                files:[],
                req:[],
                loading:false,})
            }

            else if(RightKnee==true)
            {
                let Xrays=[
                    {id:12,name:'PA Standing Bilateral Flexion',isDone:false,image:null,thumbnail:Xray1,enable:true},
                    {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:false,image:null,thumbnail:Xray2,enable:false},
                    {id:2,name:'Right Kneecap',isDone:false,image:null,thumbnail:Xray3,enable:false},
                    {id:3,name:'Right Lateral',isDone:false,image:null,thumbnail:Xray4,enable:false},

                ] 
                this.setState({Xrays,OverView:true,
                activeId:0,
                files:[],
                req:[],
                loading:false,})

            }

            else if(LeftKnee==true)
            {
                let Xrays=[
                    {id:12,name:'PA Standing Bilateral Flexion',isDone:false,image:null,thumbnail:Xray1,enable:true},
                    {id:1,name:'PA Standing Bilateral Non-Flexion',isDone:false,image:null,thumbnail:Xray2,enable:false},
                    {id:4,name:'Left Kneecap',isDone:false,image:null,thumbnail:Xray3,enable:false},
                    {id:5,name:'Left Lateral',isDone:false,image:null,thumbnail:Xray4,enable:false},

                ] 
                this.setState({Xrays,OverView:true,
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
        this.setState({file})

    }

    handleOverviewClick = (id) =>
    {
        this.setState({OverView:false,activeId:id})
    }


    Old = () =>
    {
        console.log('here')
        this.context.multipleUpdateValueWithHistory([{key:'UXray',value:true}],'./patient-profile')
    }

    // handleUploadClick = () =>
    // {
    //     if(this.state.activeId===this.state.Xrays.length-1)
    //     {
    //         //all done
    //         if(this.state.files.length==0)
    //         {
    //             this.context.history.push('./patient-profile')
    //             return;
    //         }
    //         let global =this;
    //         var storage = firebase.storage();
    //         console.log(this.state.files);
    //         this.setState({loading:true})

    //         let uploaded=0;
    //         let i=0;

    //         console.log(this.state.files)
    //         for(i=0;i<this.state.files.length;i++)
    //         {
    //             let file=this.state.files[i];
    //             var storageRef = storage.ref().child('xray-images/'+file.visitor_id+ " "+file.name);
    //             storageRef.put(file.file).then(function(snapshot) {
    //                 snapshot.ref.getDownloadURL().then(function(downloadURL) {
    //                     console.log('File available at ', downloadURL);
    //                     uploaded=uploaded+1;
    //                     global.checkAllUploaded(uploaded,downloadURL,file.visitor_id,file.xray_type_id);
    //                   });
                    
    //             });
    //         }

            
    //     }

    //     else
    //     {
    //         let Xrays=this.state.Xrays;
    //         Xrays[this.state.activeId].isDone=true;
    //         Xrays[this.state.activeId+1].enable=true;
    //         this.setState({Xrays,OverView:true})
    //     }
        
    // }
  handleUploadClick = () =>
    {
        if(this.state.activeId===this.state.Xrays.length-1)
        {
            //all done
            if(this.state.files.length==0)
            {
                this.context.history.push('./patient-profile')
                return;
            }
            let global =this;
            var storage = firebase.storage();
            console.log(this.state.files);
            this.setState({loading:true})

            let i=0;

            console.log(this.state.files)
            for(i=0;i<this.state.files.length;i++)
            {
                let file=this.state.files[i];
                let form_data = new FormData();
                form_data.append('image',file.file)
                form_data.append('visitor_id',file.visitor_id)
                form_data.append('xray_type_id',file.xray_type_id)


                if(i==this.state.files.length-1)
                {
                    form_data.append('update_state',true)
                }

                else form_data.append('update_state',false)

                for (var value of form_data.values()) {
                    console.log(value); 
                 }

                PostFormData(this.context.baseUrl+'/api/v1/upload/xray',201,form_data,this.context.state.token,this.newSetMe)

            }

            
        }

        else
        {
            let Xrays=this.state.Xrays;
            Xrays[this.state.activeId].isDone=true;
            Xrays[this.state.activeId+1].enable=true;
            this.setState({Xrays,OverView:true})
        }
        
    }
  


    newSetMe = (response) =>
    {
        console.log(response);
        uploaded = uploaded + 1
        if(uploaded==this.state.files.length)
        {
            this.setState({loading:false});
            this.context.updateSession();
            this.context.setCookie('evaluation_stage',4,30);
            this.context.multipleUpdateValueWithHistory([{key:'UXray',value:true},{key:'Xrays',value:this.state.Xrays}],'./patient-profile')
        }
    }

    checkAllUploaded = (uploaded,url,visitor_id,xray_type_id)  =>
    {
        let req=this.state.req;
        req.push({visitor_id:visitor_id,xray_type_id:xray_type_id,image_url:url})
        if(uploaded==this.state.files.length)
        {
            // this.setState({loading:false});
            // PostData =   (url,statusCode,req,token,callback) 
            PostData(this.context.baseUrl+'/api/v1/upload/xray',201,req,this.context.state.token,this.setMe)
        }
    }

    setMe = (response) =>
    {
        if(response.length>0)
        {
            this.setState({loading:false});
            this.context.updateSession();
            this.context.setCookie('evaluation_stage',4,30);
            this.context.multipleUpdateValueWithHistory([{key:'UXray',value:true},{key:'Xrays',value:this.state.Xrays}],'./patient-profile')
        }
    }

    render() { 
        return ( 
        
            <div id="Evaluaion_UploadXray_Main_Div">
            {this.state.loading==true?

                <SemipolarLoading size={"large"} color={'#b4ec51'}/>

            :
                <div  id="Evaluaion_UploadXray_Content1_Wrapper">
                    <div id="Evaluaion_UploadXray_Heading1_Div">
                        Upload X-rays
                    </div>
                    {
                        this.state.OverView===true?
                            <OverviewBox Old={this.Old}  Xrays={this.state.Xrays} handleClick={(id)=>this.handleOverviewClick(id)}/>
                        :
                            <UploadBox  appendFile={(file,name,id)=>this.appendFile(file,name,id)} Xray={this.state.Xrays[this.state.activeId]} handleClick={this.handleUploadClick}/>


                    }
                </div>
            }

            

        </div> );
    }
}
UploadXray.contextType=MyContext;
export default UploadXray;