
import React, { Component } from 'react';
import MyContext from '../../helper/themeContext';
import GetData from '../../Fetch/getData1';
import SemipolarLoading from 'react-loadingg/lib/SemipolarLoading';
import Button from '@material-ui/core/Button';

//css from evaluation pdf
class CompletePdf extends Component {
    constructor(props) {
        super(props);
        this.state = { loading:true,base64:"",blobUrl:'' }
    }



    componentDidMount = () =>
    {
        let req={
            visitor_id:this.context.state.report_id
        }
        GetData(this.context.baseUrl+'/api/v1/get-prc/pdf',200,req,this.context.state.token,this.setMe)
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
                
            {this.state.loading===false?
                <div id="Evaluation_PDF_Content_Wrapper" >
                    
                    
                    <div id="Evaluaion_pdf_Container">

                        <div id="Evaluaion_pdf_child1">
                            <div id="Evaluaion_pdf_Heading1_Div">
                                Patient Summary + Recommended Care Pathway
                            </div>
                            <div id="Evaluaion_pdf_iframe_wrapper">
                                <iframe title="pdf" src={ this.state.blobUrl}  style={{width:'100%',height:'100%'}} >
                                </iframe>
                            </div>
                            <div id="Evaluaion_PDF_Back_Button_Div">
                                <Button id="Evaluaion_PDF_Button" variant="contained" onClick={()=>{ this.context.history.push('./report')}}> Back </Button>
                            </div>
                        </div>
                        
                        <div id="Evaluaion_pdf_child2">
                            <div id="Evaluaion_PDF_Download_Button_Div" className="Evaluation_PDF_Button_Div" >
                                <Button id="Evaluaion_PDF_Button" variant="contained" onClick={this.handleDownload}> Download </Button>
                            </div>
                            
                            <div id="Evaluaion_PDF_Back_Home_Button_Div" className="Evaluation_PDF_Button_Div">
                                <Button id="Evaluaion_PDF_Button" variant="contained" onClick={()=>{ this.context.history.push('/home')}}> Back to Home </Button>
                            </div>
                        </div>      
                    </div>
                </div>:
                <SemipolarLoading size={"large"} color={'#b4ec51'}/>
            }
        </div>     
        );
    }
}
 
CompletePdf.contextType=MyContext;
export default CompletePdf;