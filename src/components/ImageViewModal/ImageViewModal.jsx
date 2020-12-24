import React, { Component } from 'react';

//components
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';


import './ImageViewModal.css'

class ImageViewModal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        
        <Modal
            open={this.props.modalState}
            onClose={this.props.modalClose}
        >
            <div className="XrayImage_Modal_Wrapper">
                <div className="XrayImage_Modal">
                    <img src={this.props.ActiveImage} alt="Xray" style={{display:'block',maxHeight:'60vh'}} />
                    <Button onClick={this.props.modalClose} variant="contained" id="XrayImage_Modal_Close_Button"> Close </Button>
                </div>
            </div>
            
        </Modal> );
    }
}
 
export default ImageViewModal;


//props receive ->  
    //props.modalState    //boolean - state of modal
    //props.modalClose    //function - close modal
    //props.ActiveImage   //image - image to display 