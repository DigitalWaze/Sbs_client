
import React, { Component } from 'react';
import MyContext from '../../helper/themeContext';
import GetData from '../../Fetch/getData1';
import PDFViewer from 'pdf-viewer-reactjs'  
import './evalpdf.css'       
import SemipolarLoading from 'react-loadingg/lib/SemipolarLoading';

import Button from '@material-ui/core/Button';



class Pdf extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:true,base64:"",blobUrl:'' }
    }



    componentDidMount = () =>
    {
        let req={
            visitor_id:this.context.state.report_id
        }
        GetData(this.context.baseUrl+'/api/v1/get/pdf',200,req,this.context.state.token,this.setMe)
        // Get  (this.context.baseUrl+'/api/v1/download/pdf',token,callback)
    
    }

    setMe= (response) =>
    {
        console.log(response)

        if(response.base64pdf)
        {
            const byteCharacters = atob(response.base64pdf);
            const byteNumbers = new Array(byteCharacters.length);
            console.log('length:' + byteCharacters.length)
            
            for (let i = 0; i < byteCharacters.length; i++) 
            {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], {type: 'application/pdf'});
            const blobUrl = URL.createObjectURL(blob);



            this.setState({loading:false,base64:response.base64pdf,blobUrl})
        }

        else alert("Pdf not found")
    }

    handleDownload = () =>
    {
       

        var link = document.createElement('a');
        link.innerHTML = 'Download PDF file';
        link.download = this.context.state.patient_id+'_Report.pdf';
        link.href = 'data:application/octet-stream;base64,' + this.state.base64;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
    render() { 
        return ( 
            <div id="Evaluation_PDF_MAIN_DIV">
                
            {this.state.loading==false?
                <div id="Evaluation_PDF_Content_Wrapper" >
                    
                    <div id="Evaluaion_pdf_Heading1_Div">
                        Patient Summary
                    </div>
                    {/* <PDFViewer
                
                    document={{
                    base64:this.state.base64 }}
                    scale={1}
                    canvasCss={'report-canvas-div'}
                    
                    watermark={{
                        text: "SBS - Digitalwaze", //Watermark text
                        diagonal: true, // Watermark placement true for Diagonal, false for Horizontal
                        opacity: 0.4, // Watermark opacity ranges from 0 to 1
                        size: 32, // Fontsize of Watermark
                        color: '#000000', // Color(hexcode) of the watermark

                    }}

                    loader={this.state.loading}
                    navigation={{ css:{navbarWrapper:'report-navbar-wrapper'}} }
        
                /> */}

                <iframe src={ this.state.blobUrl} height="100%" style={{width:'calc(100vw - 500px)',marginLeft:'150px'}} ></iframe>
                    <div id="Evaluaion_PDF_Next_Button_Div">
                        <Button id="Evaluaion_PatientReport_Next_Button" variant="contained" onClick={this.handleDownload}> Download </Button>
                    </div>
                    <div id="Evaluaion_PatientReport_Next_Button_Div">
                        <Button id="Evaluaion_PatientReport_Next_Button" variant="contained" onClick={()=>{ this.context.history.push('./evaluation-history')}}> View Evaluation History </Button>
                    </div>
            </div>:
            <SemipolarLoading size={"large"} color={'#b4ec51'}/>
            }

        </div>
            
        );
    }
}
 
Pdf.contextType=MyContext;
export default Pdf;