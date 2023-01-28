import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import Image from "next/image";
import ImageComponent from "Components/ImageComponent/ImageComponent";
import Shadow2 from '../../../Assets/Images/Shadow1.jpg';
import { useState } from "react"; 
import Hotel1 from '../../../Assets/Images/hotel1.jpg';
import Hotel2 from '../../../Assets/Images/Hotel2.jpg';
import Hotel3 from '../../../Assets/Images/hotel3.jpg';
import Hotel4 from '../../../Assets/Images/hotel4.jpg';
import Hotel5 from '../../../Assets/Images/hotel5.jpg';
import Hotel6 from '../../../Assets/Images/hotel6.jpg';
import Hotel7 from '../../../Assets/Images/hotel7.jpg';
import Hotel8 from '../../../Assets/Images/hotel8.jpg';
import Hotel9 from '../../../Assets/Images/hotel9.jpg';
import Residential from '../../../Assets/Images/Residential1.jpg';
import Residential2 from '../../../Assets/Images/Residential2.jpg';
import Residential3 from '../../../Assets/Images/Residential3.jpg';
import Residential4 from '../../../Assets/Images/Residential4.jpg';
import Residential5 from '../../../Assets/Images/Residential5.jpg';
import ImageComponent2 from "Components/ImageComponent/ImageComponent2";
import ImageComponent3 from "Components/ImageComponent/ImageComponent3";


function PictureGallery() {

   const [positive, setPositive] = useState(true);
   const [data , setData] = useState([{
      "Hotels&Resort":"",
      "Residential":""
   }])
   function ShowPositive() {
     setPositive(!positive)
   }

    return (
    <>
      <Header />
       <ImageComponent value={Shadow2} value2="Picture-Gallery" />
       <div style={{flexDirection:'row'}}>
       <div style={{backgroundColor:'white',display:'flex',justifyContent:'space-evenly',width:'14em',height:'3em',marginLeft:'40em',marginTop:'1em'}}>
           <div style={{flexDirection:'row'}}>
            <div style={{cursor:'pointer'}}>
            <p onClick={ShowPositive}>Hotels & Resort</p>
            </div>
            { positive &&
            
            <div style={{backgroundColor:'orange',height:'1px',width:"100%"}}/>
            }
       
            </div> 
            <div style={{height:'60%',width:2,backgroundColor:'black'}} />
            <div style={{flexDirection:'row'}}>
            <div style={{cursor:'pointer'}}>
            <p onClick={ShowPositive}>Residential</p>
            </div>
            {!positive && 
            <div style={{backgroundColor:'orange',height:'1px',width:"100%"}}/>
             }
            </div> 
        </div>
       </div>
       {/* Hotels Section */}
       {positive === true && 
      <div>
      <div style={{display:'flex',justifyContent:'space-evenly'}}>
         <ImageComponent2 value3={Hotel1}/>
         <ImageComponent2 value3={Hotel2} />
         <ImageComponent2 value3={Hotel3} />
      </div> 
      <div>
        <ImageComponent3 value4={Hotel4} value5={Hotel5} value6={Hotel6} />
      </div>
      <div style={{paddingLeft:'2em',borderRadius:'2em',paddingTop:'2em'}}>
        <Image src={Hotel7} alt="Hotel7" style={{width:'88em',height:'25em',borderRadius:'4em',objectFit:'cover'}} />
      </div>
      <div style={{display:'flex',justifyContent:'space-evenly'}}>
         <ImageComponent2 value3={Hotel8}/>
         <ImageComponent2 value3={Hotel9} />
         <ImageComponent2 value3={Hotel1} />
      </div>

      </div>
}
  {
    positive === false && 
    <div style={{flexDirection:'row'}}>
         <div style={{display:'flex',justifyContent:'space-evenly'}}>
         <ImageComponent2 value3={Residential}/>
         <ImageComponent2 value3={Residential2} />
         <ImageComponent2 value3={Residential3} />
      </div> 
      <div>
        <ImageComponent3 value4={Residential4} value5={Residential5} value6={Residential} />
      </div>
    </div>
    
   }
      <Footer />
      </>  
    )
}

export default PictureGallery;