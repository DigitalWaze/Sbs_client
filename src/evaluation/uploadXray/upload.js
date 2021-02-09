import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

// import Tick from '../../assets/button-tick.png';

import Dropzone from 'react-dropzone'
import PostFormData from './uploadPostForm';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import './upload.css';
import MyContext from '../../helper/themeContext';


class UploadBox extends Component {
    constructor(props) {
        super(props);
        this.state = { uploaded:false ,file:null,loading:false }
    }

    handleUpload = (acceptedFiles) =>
    {
        if(acceptedFiles.length>0)
        {
            
            this.setState({file:acceptedFiles[0],loading:true,uploaded:false })
            let form_data = new FormData();
            form_data.append('visitor_id',this.context.state.report_id)
            let file=acceptedFiles[0];
            form_data.append('img',file)
            form_data.append('xray_type_id',this.props.Xray.id)

            PostFormData(this.context.baseUrl+'/api/v1/xray/upload-single',200,form_data,this.context.state.token,this.newSetMe) 
            // this.props.appendFile(acceptedFiles[0],this.props.Xray.name,this.props.Xray.id)
        }
    }

    handleDelete = () =>
    {
        //this.props.handleDelete
    }

    newSetMe = (response) =>
    {
        console.log(response);
        if(response.responseCode==="Success")
        {   
            this.setState({uploaded:true,loading:false,viewType:response.viewType})
        }

        else
        {
            this.setState({loading:false})
            alert('Unable to upload!, Please try again')
        }

    }
    render() { 
        return ( 
                
                <div id="Evaluaion_UploadXray_Upload_Box1_Div">
                    <span className="Evaluaion_UploadXray_Upload_Box_Head">
                        <strong>  {this.props.Xray.name} </strong> 
                    </span>
                    <div className="Evaluaion_UploadXray_Upload_Box_Line">
                    </div>
                    <div className="circle-with-arrow" style={{backgroundColor:this.state.uploaded?'#b4ec51':'hsla(0, 0%, 100%, 0.27)'}}></div>
                    {
                        this.state.loading===true?
                            <div id="Evaluaion_UploadXray_Upload_Box_Complete_Div">
                                <span className="complete-circle-with-arrow"></span>
                                <span id="Evaluaion_UploadXray_Upload_Box_Complete_Text_Div">{this.state.file.name}</span>
                                <div className = "Evaluaion_UploadXray_Upload_Box_Loader_Div">
                                    <span className = "Evaluaion_UploadXray_Upload_Box_Loader_Text"> Identifying View </span>
                                    <Loader
                                        type="Rings"
                                        color="#B4EC51"
                                        height={60}
                                        width={60}   
                                        style={{display:'inline-block',verticalAlign:'middle',opacity:'1'}}                                 
                                    /> 
                                </div>
                            </div>
                    
                    : this.state.uploaded===true?

                        <div id="Evaluaion_UploadXray_Upload_Box_Complete_Div">
                            <span className="complete-circle-with-arrow"></span>
                            <span id="Evaluaion_UploadXray_Upload_Box_Complete_Text_Div">{this.state.file.name} <Button variant="contained" className="Evaluaion_UploadXray_Upload_Box_Delete_Button" onClick={this.handleDelete}> <DeleteOutlinedIcon color="default"/> </Button></span>
                            
                        </div>

                    :
                        <Dropzone accept={'image/jpeg,image/png'} multiple={false} onDrop={acceptedFiles => this.handleUpload(acceptedFiles)}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                            <div {...getRootProps()} id="Evaluaion_UploadXray_Upload_Box_Main">
                                <input {...getInputProps()} />
                                <div className="circle-with-arrow-tiny" ></div>
                                <div id="Evaluaion_UploadXray_Upload_Box_Main_Text">Drag and Drop or Click Here <br/> to Upload Xray</div>
                            </div>
                            </section>
                        )}
                        </Dropzone>
                    }
                   
                    
                    {this.state.uploaded===true ?
                        <div id="Evaluaion_UploadXray_Upload_Next_Button_Div">
                            <Button id="Evaluaion_UploadXray_Upload_Next_Button" variant="contained" onClick={()=>this.props.appendFile(this.state.file,this.props.Xray.name,this.props.Xray.id)}> Next </Button>
                        </div>
                    :   null
                    }
                
                </div> 
           
        );
    }
}
 
UploadBox.contextType=MyContext;
export default UploadBox;