import Image from "next/image"
import Room from '../../Assets/Images/Room.png';
import Done1 from '../../Assets/Images/Done1.JPG';
import Room3 from '../../Assets/Images/Room3.jpg';
import Card4 from "Components/Card/Card4";

function FirstComponent() {
    return (
          <div style={{display:'flex',justifyContent:'space-evenly'}}>
             <div> 
                <Image src={Room} alt="Room" style={{width:'30em',height:'40em',borderRadius:'2em',objectFit:'cover'}}/>
            </div>
             <div style={{flexDirection:'row'}}> 
                <div>
                <Image src={Done1} alt="Done1" style={{ height:'20em', width:"30em",borderRadius:'2em'}} />
                </div>
                <div>
                <Image src={Room3} alt="Done1" style={{ height:'20em', width:"30em",borderRadius:'2em'}} />
                </div>      
             </div>
          </div>
    )
}

export default FirstComponent