import React, { Component } from 'react';

//components
import Zoom from '../Zoom/Zoom';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import html2canvas from 'html2canvas'

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import './ImageViewModal.css'

class ImageViewModalWithZoom extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    updateView = () =>
    {
        const img = document.getElementById("images");
        const ele = document.getElementById("Myfigure");

        const myimage = document.createElement("IMG");
        myimage.id = "abcd"

        myimage.crossOrigin = "Anonymous";
        myimage.onload = async function() {

           

          


            // myimage.width = 400;
            // myimage.height = 320;

            
            // console.log(myimage.width)
            // console.log(myimage.height)
            
            // console.log(ele.style.backgroundSize)
            // console.log(ele.style.backgroundPositionX);
            // console.log(ele.style.backgroundPositionY);

            // const myimage = document.createElement("IMG");

            // var demoCalc = window.getComputedStyle(ele).getPropertyValue('background-position');
            // var srcX = ele.style.width.replace('px','') - (parseFloat(demoCalc) / 100 * ele.offsetWidth);
            // var srcY = ele.style.height.replace('px','') - (parseFloat(demoCalc) / 100 * ele.offsetHeight);

            // console.log('srcX',srcX)
            // console.log('srcY',srcY)

            // myimage.style.backgroundSize = ele.style.backgroundSize;
            // myimage.style.backgroundPosition = `${ ele.style.backgroundPositionX } ${ ele.style.backgroundPositionY }`
            

            // console.log('newImage background Size ',myimage.style.backgroundSize)
            // console.log('newImage background Position ',myimage.style.backgroundPosition)


              // Create canvas
            // const newcanvas = document.createElement('canvas');
            // const newctx = newcanvas.getContext('2d');
            // newcanvas.width = img.width;
            // newcanvas.height = img.height;


            let pagetwo=document.getElementById("Myfigure");
                await new html2canvas(pagetwo,{
                    useCORS: true,
                    allowTaint: false,
                    letterRendering: true,
                    logging:true,
                    }).then( async function(canvas2) {
                        
                        const link = document.createElement('a');
                        link.download = "myfile";
                        link.href = canvas2.toDataURL("image/png")
                        link.click();
                    })

            // Draw the image
            // newctx.drawImage(myimage,0,0,myimage.width,myimage.height,0,0,myimage.width,myimage.height  );

            // document.body.appendChild(myimage)


            // const link = document.createElement('a');
            // link.download = "myfile";
            // link.href = newcanvas.toDataURL("image/png");
            // link.click();

            // console.log('srcY',srcY)

            // canvas.width = newImg.width;
            // canvas.height = newImg.height;

            // console.log(newImg.width);

            

            // console.log('ele.style.backgroundPositionX',ele.style.backgroundPositionX)
            // console.log('ele.style.backgroundPositionY',ele.style.backgroundPositionY)

            // console.log('ele.width',ele.style.width.replace('px',''))
            // console.log('ele.height',ele.style.height.replace('px',''))

            // console.log('parseFloat(ele.style.backgroundPositionX)',parseFloat(ele.style.backgroundPositionX))

            // var newsrcX = newImg.width - (parseFloat(ele.style.backgroundPositionX) *  newImg.width)/100;
            // var newsrcY = newImg.height - (parseFloat(ele.style.backgroundPositionY) *  newImg.height)/100;

            // console.log('newsrcX',newsrcX)
            // console.log('newsrcY',newsrcY)

            // var srcW = newImg.width;
            // var srcH = newImg.height;

            // console.log('srcW',newsrcX)
            // console.log('srcH',newsrcY)

            // ctx.drawImage(newImg,newsrcX,newsrcY,srcW,srcH,0,0,srcW,srcH);
            // const link = document.createElement('a');
            // link.download = "myfile";
            // link.href = canvas.toDataURL("image/png");
            // link.click();
            // localStorage.setItem( "savedImageData", canvas.toDataURL("image/png") );
        }
        myimage.src = img.src;
        // make sure the load event fires for cached images too
        // if ( img.complete || img.complete === undefined ) {
        //     newImg.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        //     newImg.src = src;
        // }


        // const ele = document.getElementById("Myfigure");
        // var c = document.createElement("CANVAS");
        // const ctx = c.getContext("2d");

        // console.log(ele.style.backgroundPositionX)
        // ctx.drawImage(img, ele.style.backgroundPositionX, ele.style.backgroundPositionY,'500px','300px',    );
        // document.body.appendChild(c);


      
      
        // housekeeping - remove the temporary anchor element
        //a.remove();  


    }

    render() { 
        return ( 
        
        <Modal
            open={this.props.modalState}
            onClose={this.props.modalClose}
        >

            <div className="XrayImage_Modal_Wrapper">

                <Backdrop style={{zIndex:4,color:'#fff'}} open={this.props.loader}>
                    <CircularProgress color="inherit" />
                </Backdrop>

                <div className="XrayImage_Modal">
                    {
                        this.props.ActiveImage!=null?
                        <Zoom src={this.props.ActiveImage} style={{width:'100%',maxWidth:"510px"}}/>
                        :null
                    }
                    <Button onClick={this.props.modalClose} variant="contained" id="XrayImage_Modal_Close_Button"> Close </Button>
                    {this.props.showUpdateView ? <Button onClick={this.props.modalClose} variant="contained" id="XrayImage_Modal_Update_View_Button" onClick={this.props.updateView}> Update View </Button> : null}

                </div>
            </div>
            
        </Modal> );
    }
}
 
export default ImageViewModalWithZoom;


//props receive ->  
    //props.modalState    //boolean - state of modal
    //props.modalClose    //function - close modal
    //props.ActiveImage   //image - image to display 