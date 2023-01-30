import React from "react";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import ImageComponent from "Components/ImageComponent/ImageComponent";
import Done2 from '../../Assets/Images/Done2.png';
import Done1 from '../../Assets/Images/Done1.JPG';
import Image from "next/image";
import Shadow1 from '../../Assets/Images/Shadow1.jpg';
import Shadow2 from '../../Assets/Images/Building3.jpeg';
import Shadow3 from '../../Assets/Images/Shadow3.jpg';

function RoomDetails() {
    return (
         <>
         <Header />
         <ImageComponent value={Done2} value2="Hotels-Room1" />
         <div style={{display:'flex',paddingTop:'3em',paddingBottom:'3em'}}>
            <div style={{width:'80%',paddingLeft:'5em'}}>
                <div>
                 <Image src={Done1} alt={Done1} style={{width:'67em',height:'24em',objectFit:'cover',borderRadius:'1em'}} />
                 </div>
                 <div style={{display:'flex',paddingTop:'2em',justifyContent:'space-between'}}>
                 <Image src={Done1} alt={Done1} style={{width:'10em',height:'5em',objectFit:'cover',borderRadius:'1em'}} />
                 <Image src={Shadow1} alt="Shadow1" style={{width:'10em',height:'5em',objectFit:'cover',borderRadius:'1em'}} />
                 <Image src={Shadow2} alt="Shadow2" style={{width:'10em',height:'5em',objectFit:'cover',borderRadius:'1em'}} />
                 <Image src={Shadow3} alt="Shadow3" style={{width:'10em',height:'5em',objectFit:'cover',borderRadius:'1em'}} />
                 </div>
                 <div style={{flexDirection:'row',paddingTop:'2em'}}>
                     <div>
                        <p style={{fontSize:'2em'}}>Air By Ahuja Residences</p>
                     </div>
                     <div style={{backgroundColor:'black',width:'100%',height:'1px',marginTop:'1em'}} />
                     <div style={{paddingTop:'1em'}}>
                        <p style={{fontSize:'1.5em'}}>Room OverView</p>
                     </div>
                     <div style={{paddingTop:'1em'}}>
                        <p style={{fontSize:'1em'}}>
                        Introduction to Hotel Industry. A hotel is a place where bonafide traveller can receive food and shelter, provided she/he is in a position to pay for it and is in fit condition to be received. Inns –Public houses in early times in England were called inns.
                        </p>
                     </div>
                     <div style={{backgroundColor:'black',width:'100%',height:'1px',marginTop:'1em'}} />
                     <div style={{paddingTop:'1em'}}>
                        <p style={{fontSize:'1.5em',paddingBottom:'1em'}}>Room Types</p>
                        
                     </div>
                 </div>
            </div>
            <div style={{width:'20%'}}>
      
            </div>
         </div>
         <Footer />
         </>
    )
}

export default RoomDetails