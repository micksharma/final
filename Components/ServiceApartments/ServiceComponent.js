
import Image from "next/image";
import Building1 from '../../Assets/Images/Building1.jpg';
import Building2 from '../../Assets/Images/Building2.jpeg';
import Building3 from '../../Assets/Images/Building3.jpeg';
import Building4 from '../../Assets/Images/Building4.jpg';
import Building5 from '../../Assets/Images/Building5.jpg';
import Building6 from '../../Assets/Images/Building6.jpg';
import Building7 from '../../Assets/Images/Building7.jpeg';
import Building8 from '../../Assets/Images/Bulding8.jpg';
import { Card , Text } from '@nextui-org/react';
import Link from "next/link";

function ServiceComponent() {
   return (
      <div style={{ flexDirection: 'row' }}>
         <div style={{ display: 'flex', paddingTop: '2em', paddingBottom: '2em', justifyContent: "space-evenly" }}>
            <div>
               <div>
                  <Image src={Building1} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em' }} />
               </div>
               <div style={{position:'absolute',zIndex:3 ,top:'48em',left:'11em'}}>
                  <Card css={{ mw: "400px" }}>
                  <Card.Body style={{alignItems:'center'}}>
                     <Link href="/BuildingDetails"><Text style={{cursor:'pointer'}}>DLF MALL Sector 54 Gurgaon</Text> </Link>   
                        <div style={{width:'100%',height:'1px',backgroundColor:'grey'}}/>
                        <Text>3000sq to 4000sq</Text>

                     </Card.Body>
                  </Card>
               </div>
            </div>
            <div>
               <div>
                  <Image src={Building2} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em' }} />
               </div>
               <div style={{position:'absolute',zIndex:3 ,top:'48em',left:'40em' , height:'20em'}}>
                  <Card css={{ mw: "400px" }}>
                  <Card.Body style={{alignItems:'center'}}>
                  <Link href="/BuildingDetails"><Text style={{cursor:'pointer'}}>DLF MALL Sector 54 Gurgaon</Text> </Link>   
                        <div style={{width:'100%',height:'1px',backgroundColor:'grey'}}/>
                        <Text>3000sq to 4000sq</Text>

                     </Card.Body>
                  </Card>
               </div>
            </div>
            <div>
               <div>
                  <Image src={Building3} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em' }} />
               </div>
               <div style={{position:'absolute',zIndex:3 ,top:'48em',left:'70em'}}>
                  <Card css={{ mw: "400px" }}>
                     <Card.Body style={{alignItems:'center'}}>
                     <Link href="/BuildingDetails"><Text style={{cursor:'pointer'}}>DLF MALL Sector 54 Gurgaon</Text> </Link>   
                        <div style={{width:'100%',height:'1px',backgroundColor:'grey'}}/>
                        <Text>3000sq to 4000sq</Text>

                     </Card.Body>
                  </Card>
               </div>
            </div>
         </div>
         <div style={{ display: 'flex', paddingTop: '2em', paddingBottom: '2em', justifyContent: "space-evenly" }}>
            {/* <Image src={Building4} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em', objectFit: 'cover' }} />
            <Image src={Building5} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em', objectFit: 'cover' }} />
            <Image src={Building6} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em', objectFit: 'cover' }} /> */}
             <div>
               <div>
                  <Image src={Building4} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em' }} />
               </div>
               <div style={{position:'absolute',zIndex:3 ,top:'77em',left:'11em'}}>
                  <Card css={{ mw: "400px" }}>
                  <Card.Body style={{alignItems:'center'}}>
                  <Link href="/BuildingDetails"><Text style={{cursor:'pointer'}}>DLF MALL Sector 54 Gurgaon</Text> </Link>   
                        <div style={{width:'100%',height:'1px',backgroundColor:'grey'}}/>
                        <Text>3000sq to 4000sq</Text>

                     </Card.Body>
                  </Card>
               </div>
            </div>
            <div>
               <div>
                  <Image src={Building5} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em' }} />
               </div>
               <div style={{position:'absolute',zIndex:3 ,top:'77em',left:'40em' , height:'20em'}}>
                  <Card css={{ mw: "400px" }}>
                  <Card.Body style={{alignItems:'center'}}>
                  <Link href="/BuildingDetails"><Text style={{cursor:'pointer'}}>DLF MALL Sector 54 Gurgaon</Text> </Link>   
                        <div style={{width:'100%',height:'1px',backgroundColor:'grey'}}/>
                        <Text>3000sq to 4000sq</Text>

                     </Card.Body>
                  </Card>
               </div>
            </div>
            <div>
               <div>
                  <Image src={Building6} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em' }} />
               </div>
               <div style={{position:'absolute',zIndex:3 ,top:'77em',left:'70em'}}>
                  <Card css={{ mw: "400px" }}>
                     <Card.Body style={{alignItems:'center'}}>
                     <Link href="/BuildingDetails"><Text style={{cursor:'pointer'}}>DLF MALL Sector 54 Gurgaon</Text> </Link>   
                        <div style={{width:'100%',height:'1px',backgroundColor:'grey'}}/>
                        <Text>3000sq to 4000sq</Text>

                     </Card.Body>
                  </Card>
               </div>
            </div>
         </div>
         <div style={{ display: 'flex', paddingTop: '2em', paddingBottom: '2em', justifyContent: "space-evenly" }}>
            {/* <Image src={Building7} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em', objectFit: 'cover' }} />
            <Image src={Building8} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em', objectFit: 'cover' }} />
            <Image src={Building1} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em', objectFit: 'cover' }} /> */}
             <div>
               <div>
                  <Image src={Building7} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em' }} />
               </div>
               <div style={{position:'absolute',zIndex:3 ,top:'105em',left:'11em'}}>
                  <Card css={{ mw: "400px" }}>
                  <Card.Body style={{alignItems:'center'}}>
                  <Link href="/BuildingDetails"><Text style={{cursor:'pointer'}}>DLF MALL Sector 54 Gurgaon</Text> </Link>   
                        <div style={{width:'100%',height:'1px',backgroundColor:'grey'}}/>
                        <Text>3000sq to 4000sq</Text>

                     </Card.Body>
                  </Card>
               </div>
            </div>
            <div>
               <div>
                  <Image src={Building1} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em' }} />
               </div>
               <div style={{position:'absolute',zIndex:3 ,top:'105em',left:'40em' , height:'20em'}}>
                  <Card css={{ mw: "400px" }}>
                  <Card.Body style={{alignItems:'center'}}>
                  <Link href="/BuildingDetails"><Text style={{cursor:'pointer'}}>DLF MALL Sector 54 Gurgaon</Text> </Link>   
                        <div style={{width:'100%',height:'1px',backgroundColor:'grey'}}/>
                        <Text>3000sq to 4000sq</Text>

                     </Card.Body>
                  </Card>
               </div>
            </div>
            <div>
               <div>
                  <Image src={Building8} alt="Building1" style={{ width: '25em', height: '24em', borderRadius: '2em' }} />
               </div>
               <div style={{position:'absolute',zIndex:3 ,top:'105em',left:'70em'}}>
                  <Card css={{ mw: "400px" }}>
                     <Card.Body style={{alignItems:'center'}}>
                     <Link href="/BuildingDetails"><Text style={{cursor:'pointer'}}>DLF MALL Sector 54 Gurgaon</Text> </Link>   
                        <div style={{width:'100%',height:'1px',backgroundColor:'grey'}}/>
                        <Text>3000sq to 4000sq</Text>

                     </Card.Body>
                  </Card>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ServiceComponent