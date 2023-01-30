import { Card, Text } from "@nextui-org/react";
function FinalCard() {
    return (
        <div style={{  width:'30em'}}>
        <Card css={{ mw: "400px" }}>
           <Card.Body style={{alignItems:'center'}}>
              <Text style={{fontSize:'2em'}}> Air By Ahuja Residences</Text>
              <div style={{backgroundColor:'orange', width:'8em',borderRadius:'.5em'}}>
                  <p style={{color:'white',paddingLeft:'1.2em'}}>View Details</p>
              </div>
           </Card.Body>
        </Card>
     </div>
    )
}

export default FinalCard;