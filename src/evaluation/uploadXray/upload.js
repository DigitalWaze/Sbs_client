import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

// import Tick from '../../assets/button-tick.png';

import Dropzone from 'react-dropzone'
 


import './upload.css';


class UploadBox extends Component {
    constructor(props) {
        super(props);
        this.state = { uploaded:false ,file:null }
    }

    handleUpload = (acceptedFiles) =>
    {
        if(acceptedFiles.length>0)
        {
            this.setState({uploaded:true,file:acceptedFiles[0]})
            // this.props.appendFile(acceptedFiles[0],this.props.Xray.name,this.props.Xray.id)
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
                        this.state.uploaded===true?
                            <div id="Evaluaion_UploadXray_Upload_Box_Complete_Div">
                                <span className="complete-circle-with-arrow"></span>
                                <span id="Evaluaion_UploadXray_Upload_Box_Complete_Text_Div">{this.state.file.name}</span>
                            </div>
                        :   null
                    }
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
                   
                    
                    {this.state.uploaded===true ?
                        <div id="Evaluaion_UploadXray_Upload_Next_Button_Div">
                            <Button id="Evaluaion_UploadXray_Upload_Next_Button" variant="contained" onClick={()=>this.props.appendFile(this.state.file,this.props.Xray.name,this.props.Xray.id)}> Next </Button>
                        </div>
                    :   null
                    }
                
                 {console.log(this.props.Xray.name)}
                </div> 
           
        );
    }
}
 
export default UploadBox;