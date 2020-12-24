import React, { Component } from "react";

import './Zoom.css'

export default class Zoom extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.figureRef=React.createRef();
    this.state = {
      backgroundImage: `url(${this.props.src})`,
      backgroundPosition: '0% 0%',
      zoomable:true,
      backgroundSize:250,
    }
  }

  

  componentDidMount()
  {
    // console.log(document.getElementById('aaa').width);
  }

  handleMouseMove = e => {
    if(this.state.zoomable===true)
    {
      const { left, top, width, height } = e.target.getBoundingClientRect()
      const x = (e.pageX - left) / width * 100
      const y = (e.pageY - top) / height * 100
      this.setState({ backgroundPosition: `${x}% ${y}%` })
    }
    
  }

  imageLoad = (e) =>
  {
    console.log(e.target.width)
    console.log(e.target.height)
    document.getElementById('Myfigure').style.width=e.target.width+'px';
    document.getElementById('Myfigure').style.height=e.target.height+'px';
  }

  // imageLoad = (e) =>
  // {
  //   this.figureRef.current.style.width=(this.myRef.current.width) + 'px' ;
  //   console.log((this.myRef.current.height) + 'px' )
  //   this.figureRef.current.style.height=(this.myRef.current.height) +'px';
  // }


  wheel = (e) =>
  {
    e.persist();
    console.log(e);

    var zoomOut;

    zoomOut= e.deltaY>0;
    console.log(zoomOut)

    if(zoomOut==true)
    {
      if(this.state.backgroundSize>100)
      {let backgroundsize=this.state.backgroundSize-5;
      this.figureRef.current.style.backgroundSize=`${this.state.backgroundSize-5}%  ${this.state.backgroundSize-5}%`;

      this.setState({backgroundSize:backgroundsize})}
    }

    else
    { 
     
      let backgroundsize=this.state.backgroundSize+5;
      this.figureRef.current.style.backgroundSize=`${this.state.backgroundSize+5}%  ${this.state.backgroundSize+5}%`;

      this.setState({backgroundSize:backgroundsize})
    }

  }

  mouseEnter = (e) =>
  {
    this.figureRef.current.style.backgroundSize=`${this.state.backgroundSize}%  ${this.state.backgroundSize}%`;
  }

    

  handleClick = () =>
  {
    
    if(this.state.zoomable===false)
    {
      this.myRef.current.style.opacity="";
    }
    if(this.state.zoomable===true)
    {
      this.myRef.current.style.opacity=0;
      this.figureRef.current.style.backgroundSize=`${this.state.backgroundSize}%  ${this.state.backgroundSize}%`;

    }
    this.setState({zoomable:!this.state.zoomable})
  }



  render = () =>  
  <div style={{width:'100%',height:'320px'}}>
    <div className="zoom-pan">
      <figure id="Myfigure" ref={this.figureRef} onMouseEnter={this.mouseEnter} onWheel = {(e) => this.wheel(e)} onMouseMove={this.handleMouseMove} onClick={this.handleClick} style={{ marginBottom:'0px',backgroundImage: `url(${this.props.src})`, backgroundPosition: this.state.backgroundPosition}}>
        <img src={this.props.src} ref={this.myRef} id="images" onLoad={this.imageLoad}  alt="xray" />
      </figure>
    </div>
  </div>
  
}


//props receive ->  
    //props.src   //image - image to display 



  // render = () =>
  // <div style={{display:'inline-block',width:'100%',height:'calc(100% - 4px)',verticalAlign:'top'}}>
  //   {/* <div style={{width:'100%',maxHeight:'100%',height:'100%'}}>  */}
  //     <div className="zoom-pan">

  //     <div className="border-wrapper" style={{border:this.props.active?'15px solid #81bd17':null}}>
  //       <figure id="Myfigure" ref={this.figureRef} onMouseEnter={this.mouseEnter} onWheel = {(e) => this.wheel(e)} onMouseMove={this.handleMouseMove} onClick={this.handleClick} style={{ marginBottom:'0px',backgroundImage: `url(${this.props.src})`, backgroundPosition: this.state.backgroundPosition}}>
  //           <img src={this.props.src} ref={this.myRef} id="images" onLoad={this.imageLoad}  alt="xray" />
  //         </figure>
  //       </div>
  //     </div>
        
  //   {/* </div> */}
  // </div>  
  //}