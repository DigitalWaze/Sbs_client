// JointSummary Screen...!

import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import "./JointSummary.css";
import MyContext from '../../helper/themeContext';

import Search from '../../assets/search.png';
import ImageViewModalWithZoom from '../../components/ImageViewModal/ImageViewModalWithZoom';


const comparments = [
    { name: 'Normal to Slight', id: '1',color:'#B3D89B' },
    { name: 'Moderate', id: '2' ,color:'#FAF075'},
    { name: 'Near End Stage', id: '3' , color:'#F26E82'},
    { name: 'End Stage', id: '4' , color:'#F26E82'},
    {name:'Cannot Evaluate',id:'5',color:'#E4E4E4'}
]

class JointSummary extends Component {
    constructor(props) {
        super(props);
        this.state = { ActiveImage:null,modal:false}
        console.log(props);
    }

    handleSearchClick = (Xray) =>
    {
        this.setState({ActiveImage:Xray,modal:true})
    }
    
    modalClose = () =>
    {
        this.setState({modal:false})
    }

    render() {
        return (
            // Main container
            <div id="JointSummary-main-box">
                <div id="all-content-wrapper">
                    <div id="JointSummary-box-1">

                        <div>
                            <h1 id="JointSummary-heading"> {`${this.props.Joint_Name} Summary`} </h1>

                            <div id="JointSummary-row-1">
                                <div style={{ marginLeft: "25px" }}>
                                    <h3 id="JointSummary-part-1-heading"> Medial </h3>
                                    <div id="JointSummary-part-1" style={{ backgroundColor: comparments.find((comp) => comp.id.toString() === this.props.Compartment1.toString()).color }} >
                                        {comparments.find((comp) => comp.id.toString() === this.props.Compartment1.toString()).name}
                                    </div>
                                </div>

                                <div>
                                    <h3 id="JointSummary-part-1-heading">  Lateral </h3>
                                    <div id="JointSummary-part-1" style={{ backgroundColor: comparments.find((comp) => comp.id.toString() === this.props.Compartment2.toString()).color }} >
                                        {comparments.find((comp) => comp.id.toString() === this.props.Compartment2.toString()).name}
                                    </div>
                                </div>

                                <div>
                                    <h3 id="JointSummary-part-1-heading"> Kneecap </h3>
                                    <div id="JointSummary-part-1" style={{ backgroundColor: comparments.find((comp) => comp.id.toString() === this.props.Compartment3.toString()).color }} >
                                        {comparments.find((comp) => comp.id.toString() === this.props.Compartment3.toString()).name}
                                    </div>
                                </div>

                                <div id="JointSummary-part-last-box">
                                    <h3 id="JointSummary-part-2-heading">  KOOS </h3>
                                    <div id="JointSummary-part-4" style={{backgroundColor:this.props.Score<74?'#F26E82':'#B3D89B'}}>
                                        {this.props.Score}
                                    </div>
                                </div>
                            </div>

                            {/* Row: 2 */}
                            <div id="JointSummary-row-1" style={{ borderTop: "2px solid white", paddingTop:"20px" }}>
                            
                                {
                                    this.context.state.Xrays.map((xray) =>
                                        <div style={{display:'inline-block',padding:'0px 10px 0px 0px',position:'relative',maxWidth:'25%'}}  >
                                            <img src={xray.image} alt="Xray" style={{maxHeight:'125px' , height:'auto', width:'auto'}}/>
                                            <div className="Evaluaion_Report_Box_Search_Box" onClick={()=>{this.handleSearchClick(xray.image)}}>
                                                <img src={Search} alt="Search" style={{width:'20px'}} />
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <ImageViewModalWithZoom modalState={this.state.modal}  modalClose={this.modalClose} ActiveImage={this.state.ActiveImage} />

                    </div>

                    <div id="RCPE-Welcome-box-2">
                        <div id="RCPE-Welcome-footer-div1">
                            <Button
                                id="RCPE-Welcome-btn-1"
                                variant="contained"
                                onClick={this.props.handleBackClick}
                            >
                                {" "} Back {" "}
                            </Button>
                        </div>

                        <div id="RCPE-Welcome-footer-div3">
                            <Button
                                id="JointSummary-btn-2"
                                variant="contained"
                                onClick={this.props.handleNextClick}
                            >
                                {" "} View Treatment Options {" "}
                            </Button>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

JointSummary.contextType = MyContext
export default JointSummary;