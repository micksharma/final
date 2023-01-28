
import Image from "next/image";
import Building1 from '../../Assets/Images/Building1.jpg';
import Building2 from '../../Assets/Images/Building2.jpeg';
import Building3 from '../../Assets/Images/Building3.jpeg';
import Building4 from '../../Assets/Images/Building4.jpg';
import Building5 from '../../Assets/Images/Building5.jpg';
import Building6 from '../../Assets/Images/Building6.jpg';
import Building7 from '../../Assets/Images/Building7.jpeg';
import Building8 from '../../Assets/Images/Bulding8.jpg';


function ServiceComponent() {
    return (
      <div style={{flexDirection:'row'}}>
         <div style={{display:'flex',paddingTop:'2em',paddingBottom:'2em',justifyContent:"space-evenly"}}>
            <Image src={Building1} alt="Building1" style={{width:'25em',height:'24em',borderRadius:'2em'}}/>
            <Image src={Building2} alt="Building1" style={{width:'25em',height:'24em',borderRadius:'2em',objectFit:'cover'}}/>
            <Image src={Building3} alt="Building1" style={{width:'25em',height:'24em',borderRadius:'2em',objectFit:'cover'}}/>
         </div>
         <div style={{display:'flex',paddingTop:'2em',paddingBottom:'2em',justifyContent:"space-evenly"}}>
            <Image src={Building4} alt="Building1" style={{width:'25em',height:'24em',borderRadius:'2em',objectFit:'cover'}}/>
            <Image src={Building5} alt="Building1" style={{width:'25em',height:'24em',borderRadius:'2em',objectFit:'cover'}}/>
            <Image src={Building6} alt="Building1" style={{width:'25em',height:'24em',borderRadius:'2em',objectFit:'cover'}}/>
         </div>
         <div style={{display:'flex',paddingTop:'2em',paddingBottom:'2em',justifyContent:"space-evenly"}}>
            <Image src={Building7} alt="Building1" style={{width:'25em',height:'24em',borderRadius:'2em',objectFit:'cover'}}/>
            <Image src={Building8} alt="Building1" style={{width:'25em',height:'24em',borderRadius:'2em',objectFit:'cover'}}/>
            <Image src={Building1} alt="Building1" style={{width:'25em',height:'24em',borderRadius:'2em',objectFit:'cover'}}/>
         </div>
      </div>
    )
}

export default ServiceComponent