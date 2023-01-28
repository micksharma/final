import { Card, Text } from "@nextui-org/react";
import Image from "next/image";
import Room from '../../Assets/Images/Room2.jpg';
export default function Cards() {
  return (
    <Card css={{ mw: "400px" }}>
      <Card.Body>
         <div style={{display:'flex'}}>
            <div>
            <Image src={Room} alt="Images" style={{width:'4em',height:'4em',marginRight:'4em',borderRadius:'2em'}} />
            </div>
            <div style={{flexDirection:'column'}}>
                <p> New Delhi</p>
                <p> 1 Hotel</p>
            </div>
         </div>
      </Card.Body>
    </Card>
  );
}