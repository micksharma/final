import React from "react";
import {useState , useEffect} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

function InputContainer2(){
    const DurationData = [
      
       {label: "Duration", value:"1"},
       {label: "1 Month" , value:"2"},
       {label: "2 Month" , value:"3"},
       {label: "3 Month" , value:"4"},
       {lable: "4 Month" , value:"5"},
       {label: "5 Month" , value:"6"},
       {label: "6 Month" , value:"7"},
       {label: "7 Month" , value:"8"},
       {label: "8 Month" , value:"9"},
       {label: "9 Month" , value:"10"},
       {label: "10 Month", value:"11"},
       {label: "11 Month", value:"12"},
       {label: "12 Month", value:"13"},
       {label: "12+ Month", value:"14"},
    ]
 

    const [duration , setDuration] = useState(DurationData);
    const [value , setValue ] = useState(false);

    function onChange() {
        console.log('Captcha value');
      }

    function Solution({DurationData}){
        const data = DurationData
        console.log(data);
        return(
            <div>
                {  data?.map((item) => {
                     return (
                        <div key={item.value}>
                            <p>{item.lable}</p>
                        </div>
                     )
                })
                   
                }
            </div>
        )
    }

    
    return (
      <div style={{flexDirection:'row'}}>
         <div style={{paddingTop:'2em'}}>
            <p>Enquire Now</p>
         </div>
         <div style={{flexDirection:'row'}}>
        
         <input placeholder="Name" size={20} style={{marginTop:'1em',width:'16em',border:'none',boxShadow: '0 0.5em 1.2em rgb(0 0 0 / 20%)',paddingTop:'.5em',paddingBottom:'.5em',borderRadius:'.2em',paddingLeft:'1em'}}/>
         <input placeholder="Email" size={20} style={{marginTop:'1em',width:'16em',border:'none',boxShadow: '0 0.5em 1.2em rgb(0 0 0 / 20%)',paddingTop:'.5em',paddingBottom:'.5em',borderRadius:'.2em',paddingLeft:'1em'}}/>
         <input placeholder="Contact No" size={20} style={{marginTop:'1em',width:'16em',border:'none',boxShadow: '0 0.5em 1.2em rgb(0 0 0 / 20%)',paddingTop:'.5em',paddingBottom:'.5em',borderRadius:'.2em',paddingLeft:'1em'}}/> 
         <input placeholder="Duration" size={20} style={{marginTop:'1em',width:'16em',border:'none',boxShadow: '0 0.5em 1.2em rgb(0 0 0 / 20%)',paddingTop:'.5em',paddingBottom:'.5em',borderRadius:'.2em',paddingLeft:'1em'}}/>
         <input placeholder="dd-mm-yyyy" size={20} style={{marginTop:'1em',width:'16em',border:'none',boxShadow: '0 0.5em 1.2em rgb(0 0 0 / 20%)',paddingTop:'.5em',paddingBottom:'.5em',borderRadius:'.2em',paddingLeft:'1em'}}/>
         <input placeholder="Message" size={20} style={{marginTop:'1em',width:'16em',border:'none',boxShadow: '0 0.5em 1.2em rgb(0 0 0 / 20%)',borderRadius:'.2em',paddingLeft:'1em',paddingBottom:'3em',paddingTop:'.5em'}}/>
       
         </div>
         <div style={{paddingTop:'1em'}}>
            <ReCAPTCHA
               sitekey="6Lexo0wkAAAAAB7dpEuBJOlqDdafrT-Pu7PJytDm"
               onChange={onChange}
               style={{paddingRight:'1em'}}
               />
         </div>
        <div style={{marginTop:'2em',textAlign:'center',backgroundColor:'orange',borderRadius:'.5em',paddingTop:'.4em',paddingBottom:'.4em'}}>
            <p style={{color:'white'}}>Book Now</p>
        </div>
      </div>
    )
}

export default InputContainer2

