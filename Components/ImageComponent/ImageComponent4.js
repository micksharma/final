import Room2 from '../../Assets/Images/Room2.jpg';
import Room3 from '../../Assets/Images/Room3.jpg';
import Image2 from '../../Assets/Images/image2.jpg';
import Image3 from '../../Assets/Images/image3.jpg';
import Image4 from '../../Assets/Images/image4.jpg';
import Image5 from '../../Assets/Images/image5.jpg';
import Image from 'next/image';

import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

export default function ImageComponent4() {
  return (
    <Grid.Container gap={2}>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          
         
          <Card.Body css={{ py: "$10" }}>
             <Image src={Room2} alt="Image2" style={{objectFit:'cover',borderRadius:'2em',height:'16em'}} />
             <Text style={{paddingTop:'1em',fontWeight:'bold',fontSize:'1em'}}>Air By Ahuja Residency</Text>
             <Text style={{paddingTop:'1em'}}>Air Conscious Living By Ahuja Residences</Text>
          </Card.Body>
      
          <Card.Footer>
            <Row justify="flex-end">
              
             
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Body css={{ py: "$10" }}>
          <Image src={Room3} alt="Image2" style={{objectFit:'cover',borderRadius:'2em',height:'16em'}} />
             <Text style={{paddingTop:'1em',fontWeight:'bold',fontSize:'1em'}}>Air By Ahuja Residency</Text>
             <Text style={{paddingTop:'1em'}}>Air Conscious Living By Ahuja Residences</Text>
             
          </Card.Body>
        
         
        </Card>
      </Grid>
    </Grid.Container>
  );
}