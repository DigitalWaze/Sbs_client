import React, { Component } from 'react';
import MenuImage from  '../../assets/menu.png';
import MenuCloseImage from  '../../assets/cross.png';


import './drawer.css';


class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = { open:false }
    }

    componentDidMount()
    {
        document.getElementById('Main_Drawer_Menu_Div').classList.add('Main_Drawer_Menu_Div_Close')
        document.addEventListener('click',this.handleClickAway);
    }

    componentWillUnmount()
    {
        document.removeEventListener('click',this.handleClickAway);
    }

    toggleMenu = () =>
    {
        if(this.state.open===false)
        {
            this.setState({open:true});
            document.getElementById('Main_Drawer_Menu_Div').classList.remove('Main_Drawer_Menu_Div_Close')
            document.getElementById('Main_Drawer_Menu_Div').classList.add('Main_Drawer_Menu_Div_Open')
        }
        
        else
        {
            this.setState({open:false});
            document.getElementById('Main_Drawer_Menu_Div').classList.remove('Main_Drawer_Menu_Div_Open')
            document.getElementById('Main_Drawer_Menu_Div').classList.add('Main_Drawer_Menu_Div_Close')
        }
    }

    handleClickAway = event =>
    {
        if(this.state.open===true)
        {
            let Div=document.getElementById('Main_Drawer_Menu_Div');
            let Image=document.getElementById('Main_Drawer_Menu_Image')
            if(event.target !== Div && event.target !== Image)
            {
                this.toggleMenu();
            }
        }
    }
    render() { 
        return ( 
        
        <div id="Main_Drawer">

        <div id="Main_Drawer_Menu_Image_Div"   onClick={this.toggleMenu} >
            <img src={MenuImage}  alt="Menu"  id="Main_Drawer_Menu_Image" />
        </div>

        <div id="Main_Drawer_Copyright_Text">
            © 2019 Hip & Knee - Step by Step. All rights reserved
        </div>

        
            <div id="Main_Drawer_Menu_Div">
                
                <img src={MenuCloseImage} onClick={this.toggleMenu} alt="Close"  id="Main_Drawer_Menu_Close_Image"/>
                <div id="Main_Drawer_Menu_Text_Wrapper">
                    <div className="Main_Drawer_Menu_Text">
                        Right Knee Sample Patient
                    </div>
                    <div className="Main_Drawer_Menu_Text">
                        Left Knee Sample Patient
                    </div>
                    <div className="Main_Drawer_Menu_Text">
                        Right Hip Sample Patient
                    </div>
                    <div className="Main_Drawer_Menu_Text">
                        Left Hip Sample Patient
                    </div>
                </div>    
            </div>
       
        

        </div> );
    }
}
 
export default Drawer;