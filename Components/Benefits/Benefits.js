import Image from "next/image";
import Office from '../../Assets/Images/office.png';
import { FaThumbsUp } from "react-icons/fa";

function Benefits() {
    return (
      <div style={{width:'100%',display:'flex'}}>
        <div style={{width:'50%'}}>
            <Image src={Office} alt='sample image' style={{width:'42em',height:'30em',marginLeft:'3em',borderRadius:'4em'}} />
        </div>
        <div style={{width:'50%',marginLeft:'4em'}}>
           <p style={{fontSize:'1.5em'}}>The Major Benefits of Getting An Apartment Directly From <span style={{}}> Ahuja Residences </span></p>
           <div>
            <div style={{display:'flex'}}>
                <div>
                <FaThumbsUp color="orange" size={30} style={{marginTop:'2em'}}/>
                </div>
                <div style={{marginLeft:'2em'}}>
                    <p style={{fontSize:'1.5em'}}>No Brokerage Charge</p>
                    <p>Explorer reservations requires a 6 month minimum stay , but come with our Best Rates.</p>
                </div>
            </div>    
            <div style={{display:'flex', marginTop:'1em'}}>
                <div>
                <FaThumbsUp color="orange" size={30} style={{marginTop:'2em'}}/>
                </div>
                <div style={{marginLeft:'2em'}}>
                    <p  style={{fontSize:'1.5em'}}>No Brokerage Charge</p>
                    <p>Explorer reservations requires a 6 month minimum stay , but come with our Best Rates.</p>
                </div>
            </div>    
            <div style={{display:'flex',marginTop:'1em'}}>
                <div>
                <FaThumbsUp color="orange" size={30} style={{marginTop:'2em'}}/>
                </div>
                <div style={{marginLeft:'2em'}}>
                    <p  style={{fontSize:'1.5em'}}>No Brokerage Charge</p>
                    <p>Explorer reservations requires a 6 month minimum stay , but come with our Best Rates.</p>
                </div>
            </div>       
           </div>
        </div>
      </div>
    )
}

export default Benefits;