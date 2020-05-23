
import React, { Component } from 'react';
import MyContext from '../../helper/themeContext';
import GetData from '../../Fetch/getData1';
import PDFViewer from 'pdf-viewer-reactjs'  
import './evalpdf.css'       
import SemipolarLoading from 'react-loadingg/lib/SemipolarLoading';
import { css } from '@material-ui/system';
import Page1 from '../../assets/page1.png';
import Button from '@material-ui/core/Button';



class Pdf extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:true,base64:""  }
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
            this.setState({loading:false,base64:response.base64pdf})
        }

        else alert("Pdf not found")
    }

    handleDownload = () =>
    {
        var bin = atob(this.state.base64);
        var obj = document.createElement('object');
        obj.style.width = '100%';
        obj.style.height = '842pt';

        obj.style.position='absolute';
        obj.style.top='-16384px';
        obj.style.display='none';

        obj.type = 'application/pdf';
        obj.data = 'data:application/pdf;base64,' + this.state.base64;
        document.body.appendChild(obj);

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
                        Final Report
                    </div>
                    <PDFViewer
                
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
        
                />
                  <div id="Evaluaion_PDF_Next_Button_Div">
                    <Button id="Evaluaion_PatientReport_Next_Button" variant="contained" onClick={this.handleDownload}> Download </Button>
                </div>
                <div id="Evaluaion_PatientReport_Next_Button_Div">
                    <Button id="Evaluaion_PatientReport_Next_Button" variant="contained" onClick={()=>{this.context.history.push('/home')}}> View Recommended Care Pathways </Button>
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