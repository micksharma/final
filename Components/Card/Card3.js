import { TbUserCircle } from "react-icons/Tb";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

function Card3() {
    return (
      <div style={{ flexDirection: 'row',marginLeft:'2em' }}>
        <div>
          <Card css={{ mw: "400px" }}>
            <Card.Body>
               <div style={{flexDirection:"row"}}>
                  <div style={{display:'flex'}}>
                    <div style={{marginLeft:'1em'}}>
                    <TbUserCircle size={50} />
                    </div>
                    <div style={{marginLeft:'2em'}}>
                       <p>Stakshi Taryon</p>
                       <p>Gurugram</p>
                    </div>
                  </div>
                  <p style={{paddingLeft:'1.2em',paddingTop:'1em'}}>
                    A travel agency is a private retailer or public service that provides travel and tourism-related 
                    services to the general public on behalf of accommodation or travel suppliers to offer different
                    kinds of travelling packages for each destination. A travel agency is a private retailer or 
                     service that provides travel and tourism-related services to the general public on behalf of accommodation 
                     or travel suppliers to offer different kinds of travelling packages for each destination.
                  </p>
               </div>
            </Card.Body>
          </Card>
  
        </div>
      </div>
    )
  }
  
  export default Card3;