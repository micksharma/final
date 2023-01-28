import { TbUserCircle } from "react-icons/Tb";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

function Card4() {
    return (
      <div style={{ flexDirection: 'row',marginLeft:'2em' }}>
        <div>
          <Card css={{ mw: "400px" }}>
            <Card.Body>
                <div>
                    <p> Air Ahuja Residences</p>
                </div>
                  <div style={{background:'orange',borderRadius:'1em',alignItems:'center'}}>
                    <p style={{color:'white'}}>View Details</p>
                </div>
            </Card.Body>
          </Card>
  
        </div>
      </div>
    )
  }
  
  export default Card4;