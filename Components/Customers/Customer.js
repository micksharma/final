import { TbUserCircle } from "react-icons/Tb";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import Card3 from "Components/Card/Card3";

function Customer() {
  return (
    <div style={{ flexDirection: 'row',marginLeft:'2em',marginBottom:'3em',marginTop:'2em' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: 'black', fontSize: '1.5em' }}> See What Customers Say</p>
      </div>
      {/* <div>
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

      </div> */}
       <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <Card3 />
          <Card3 />
          <Card3 />
       </div>

    </div>
  )
}

export default Customer;