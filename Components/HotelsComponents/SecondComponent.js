import Image from "next/image"
import Room from '../../Assets/Images/Room.png';
import Done1 from '../../Assets/Images/Done1.JPG';
import Room3 from '../../Assets/Images/Room3.jpg';
import { Card, Text } from "@nextui-org/react";
import Link from "next/link";

function SecondComponent() {
   return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
         <div style={{ flexDirection: 'row' }}>
            <div>
               <div>
                  <Image src={Done1} alt="Done1" style={{ height: '20em', width: "40em", borderRadius: '2em' }} />
               </div>
               <div style={{ width: '30em', zIndex: 2, position: 'absolute', top: '106em' }}>
                  <Card css={{ mw: "400px" }}>
                     <Card.Body style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: '2em' }}> Air By Ahuja Residences</Text>
                        <div style={{ backgroundColor: 'orange', width: '8em', borderRadius: '.5em' }}>
                        <Link href="/RoomDetails"> <p style={{ color: 'white', paddingLeft: '1.2em' }}>View Details</p> </Link>
                        </div>
                     </Card.Body>
                  </Card>
               </div>
            </div>
            <div>
               <div>
                  <Image src={Room3} alt="Done1" style={{ height: '20em', width: "40em", borderRadius: '2em' }} />
               </div>
               <div style={{ width: '30em', zIndex: 2, position: 'absolute', top: '85em' }}>
                  <Card css={{ mw: "400px" }}>
                     <Card.Body style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: '2em' }}> Air By Ahuja Residences</Text>
                        <div style={{ backgroundColor: 'orange', width: '8em', borderRadius: '.5em' }}>
                        <Link href="/RoomDetails"> <p style={{ color: 'white', paddingLeft: '1.2em' }}>View Details</p> </Link>
                        </div>
                     </Card.Body>
                  </Card>
               </div>
            </div>
         </div>
         <div>
            <div>
            <Image src={Room} alt="Room" style={{ width: '40em', height: '40em', borderRadius: '2em', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '30em', zIndex: 2, position: 'absolute', top: '105em' }}>
                  <Card css={{ mw: "400px" }}>
                     <Card.Body style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: '2em' }}> Air By Ahuja Residences</Text>
                        <div style={{ backgroundColor: 'orange', width: '8em', borderRadius: '.5em' }}>
                        <Link href="/RoomDetails"> <p style={{ color: 'white', paddingLeft: '1.2em' }}>View Details</p> </Link>
                        </div>
                     </Card.Body>
                  </Card>
               </div>
         </div>
      </div>
   )
}


export default SecondComponent;