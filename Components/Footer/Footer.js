import {FaPaperPlane } from 'react-icons/fa';

function footer(){
    return (
        <div style={{background:'black',flexDirection:'column' }}>
        <div style={{display:'flex'}}>
         <div style={{paddingLeft:'5em'}}>
            <p style={{color:'white',paddingBottom:'1em',fontSize:'1.2em'}}>About Ahuja Residences</p>
            <p style={{color:'white',width:'40%'}}>Established in 1982, Ahuja Residences is one 
                of India;s leading providers of diverse and 
                Quality.
            </p>
         </div>
         <div>
            <p style={{color:'white',paddingBottom:'1em',fontSize:'1.2em'}}>Quick Links</p>
            <div style={{display:'flex'}}>
            <div style={{paddingRight:'25px'}}>
               <p style={{color:'white'}}>About Us</p>
               <p style={{color:'white'}}>Blogs</p>
               <p style={{color:'white'}}>Picture Gallery</p>
               <p style={{color:'white'}}>Careers</p>
            </div>
            <div style={{flexDirection:'row'}}>
              <p style={{color:'white'}}>FAQs</p>
               <p style={{color:'white'}}>Contact Us</p>
               <p style={{color:'white'}}>Privacy Policy</p>
               <p style={{color:'white'}}>Partners With Us</p>
            </div>
            </div>
         </div>
         <div style={{paddingLeft:'12em',paddingTop:'3em'}}>
            <p style={{color:'white',paddingBottom:'.5em'}}>Newsletter</p>
            <div style={{display:'flex'}}>
            <input type="text" style={{width:'20em',height:'3em'}} placeholder="Enter Your Email"/>
            <div style={{backgroundColor:'orange',width:'4em'}}>
                <FaPaperPlane size={40} color="white" style={{paddingTop:'.4em',paddingLeft:'1em'}}/>
            </div>
            </div>
         </div>
      </div>
      <div style={{textAlign:'center',paddingTop:'1.2em'}}>
        <p style={{color:'white'}}>All Rights Reserved CopyRight 2022 Ahuja Residences Limited.</p>
      </div>
 </div>
    )
}

export default footer;