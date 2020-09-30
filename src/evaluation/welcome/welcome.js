import React, { Component } from "react";

import Button from "@material-ui/core/Button";

import MyContext from "../../helper/themeContext";

import Bone2Image from "../../assets/bone1_Bitmap.png";


import Bone1Image from '../../assets/bone3_Bitmap.png'
import MFV from '../../assets/medial-flexion.png'
import MNFV from '../../assets/medial-nonflexion.png'
import LFV from '../../assets/lateral-flexion.png'
import LNFV from '../../assets/lateral-nonflexion.png'
import KV from '../../assets/kneecapview.jpg'

import MFVUP from '../../assets/medial-flexion-up.png'
import MNFVUP from '../../assets/medial-nonflexion-up.png'
import LFVUP from '../../assets/lateral-flexion-up.png'
import LNFVUP from '../../assets/lateral-nonflexion-up.png'
import KVUP from '../../assets/kneecap-up.png'


import LMFVUP from '../../assets/left-medial-flexion-up.png'
import LMNFVUP from '../../assets/left-medial-nonflexion-up.png'
import LLFVUP from '../../assets/left-lateral-flexion-up.png'
import LLNFVUP from '../../assets/left-lateral-nonflexion-up.png'
import LKVUP from '../../assets/left-kneecap-up.png'

import MFVUP1 from '../../assets/medial-flexion-up-1.png'
import MNFVUP1 from '../../assets/medial-nonflexion-up-1.png'
import LFVUP1 from '../../assets/lateral-flexion-up-1.png'
import LNFVUP1 from '../../assets/lateral-nonflexion-up-1.png'
import KVUP1 from '../../assets/kneecap-up-1.png'

import MFVUP2 from '../../assets/medial-flexion-up-2.png'
import MNFVUP2 from '../../assets/medial-nonflexion-up-2.png'
import LFVUP2 from '../../assets/lateral-flexion-up-2.png'
import LNFVUP2 from '../../assets/lateral-nonflexion-up-2.png'
import KVUP2 from '../../assets/kneecap-up-2.png'

import MFVUP3 from '../../assets/medial-flexion-up-3.png'
import MNFVUP3 from '../../assets/medial-nonflexion-up-3.png'
import LFVUP3 from '../../assets/lateral-flexion-up-3.png'
import LNFVUP3 from '../../assets/lateral-nonflexion-up-3.png'
import KVUP3 from '../../assets/kneecap-up-3.png'

import MFVUP4 from '../../assets/medial-flexion-up-4.png'
import MNFVUP4 from '../../assets/medial-nonflexion-up-4.png'
import LFVUP4 from '../../assets/lateral-flexion-up-4.png'
import LNFVUP4 from '../../assets/lateral-nonflexion-up-4.png'
import KVUP4 from '../../assets/kneecap-up-4.png'

import LMFV from '../../assets/left-medial-flexion.png'
import LMNFV from '../../assets/left-medial-nonflexion.png'
import LLFV from '../../assets/left-lateral-flexion.png'
import LLNFV from '../../assets/left-lateral-nonflexion.png'


import "./welcome.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="Evaluaion_Welcome_Main_Div">
        <div id="Evaluaion_Welcome_Text_Wrapper">
          <div id="Evaluaion_Welcome_Heading1_Div">
            Hip & Knee <br />
            Step by Step
          </div>
          <div id="Evaluaion_Welcome_Neon_Line"></div>
          <div id="Evaluaion_Welcome_Heading2_Div">
            Patient Evaluation
            <br />
            and Diagnosis
          </div>
          <div id="Evaluaion_Welcome_Text_Div">
            Start a patient evaluation by inputting the patient’s demographics,
            joints that hurt, patient reported outcome (PRO) and X-rays.
          </div>
          <div id="Evaluaion_Welcome_Next_Button_Div">
            <Button
              id="Evaluaion_Welcome_Next_Button"
              variant="contained"
              onClick={() => {

                let Evaluations=
                [   
                    {name:'Right Knee',image:Bone1Image  , joint_id:'3',
                        Xrays:[ 
                            {name:'Medial',id:1,isDone:false,enable:true,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:true,state:null,state_id:null,notes:null,thumbnail:MFV,up:MFVUP,up1:MFVUP1,up2:MFVUP2,up3:MFVUP3,up4:MFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,state_id:null,notes:'',thumbnail:MNFV,up:MNFVUP,up1:MNFVUP1,up2:MNFVUP2,up3:MNFVUP3,up4:MNFVUP4}]},
                            {name:'Lateral',id:2,isDone:false,enable:false,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:LFV,up:LFVUP,up1:LFVUP1,up2:LFVUP2,up3:LFVUP3,up4:LFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,state_id:null,notes:'',thumbnail:LNFV,up:LNFVUP,up1:LNFVUP1,up2:LNFVUP2,up3:LNFVUP3,up4:LNFVUP4}]},
                            {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:null,state_id:null,notes:null,thumbnail:KV,up:KVUP,up1:KVUP1,up2:KVUP2,up3:KVUP3,up4:KVUP4}]},

                        ] 
                    },

                    {name:'Left Knee',image:Bone1Image  , joint_id:'4' ,
                        Xrays:[ 
                            {name:'Medial',id:1,isDone:false,enable:true,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:true,state:null,notes:null,thumbnail:LMFV,up:LMFVUP,up1:MFVUP1,up2:MFVUP2,up3:MFVUP3,up4:MFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,notes:'',thumbnail:LMNFV,up:LMNFVUP,up1:MNFVUP1,up2:MNFVUP2,up3:MNFVUP3,up4:MNFVUP4}]},
                            {name:'Lateral',id:2,isDone:false,enable:false,xrays:[{name:'Flexion View',id:1,image:null,isDone:false,enable:false,state:null,notes:null,thumbnail:LLFV,up:LLFVUP,up1:LFVUP1,up2:LFVUP2,up3:LFVUP3,up4:LFVUP4},{name:'Non-Flexion View',image:null,id:2,isDone:false,enable:false,state:null,notes:'',thumbnail:LLNFV,up:LLNFVUP,up1:LNFVUP1,up2:LNFVUP2,up3:LNFVUP3,up4:LNFVUP4}]},
                            {name:'Kneecap',id:3,isDone:false,enable:false,xrays:[{name:'Kneecap',id:3,image:null,isDone:false,enable:false,state:null,notes:'',thumbnail:KV,up:LKVUP,up1:KVUP1,up2:KVUP2,up3:KVUP3,up4:KVUP4}]},
                        ] 
                    }

                ]
                this.context.multipleUpdateValue([{key:'Xrays',value:[]},{key:'XrayMatch',value:false},{key:'UXray',value:false},{key:'Pro',value:false},{key:'Evaluations',value:Evaluations},{key:'Eval',value:[]},{key:'form',value:[]},{key:'patient',value:{}},{key:'report_id',value:null} ])
                this.context.history.push("./new-or-existing");
              }}
            >
              {" "}
              Next{" "}
            </Button>
          </div>
        </div>
        <div id="Evaluaion_Welcome_Image_div">
          <img src={Bone2Image} alt="SBS" id="Evaluaion_Welcome_Image_Bone" />
        </div>
      </div>
    );
  }
}
Welcome.contextType = MyContext;
export default Welcome;
