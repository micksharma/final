import Image from "next/image";
import Done2 from '../../Assets/Images/Done2.png';
import Room4 from '../../Assets/Images/Room4.jpg';
import Room6 from '../../Assets/Images/Room6.jpg';
import Room8 from '../../Assets/Images/Room8.jpeg';

function Guide() {
    return (
        <div style={{ marginBottom: '10em' }}>
            <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: '2em' }}>Always Hava A Guide In Your Pocket</p>
            </div>
            <div style={{ display: 'flex', justifyContent:'space-evenly'}}>
                <div style={{height:'30em'}}>
                    <Image src={Done2} alt="sample_image" style={{ height: '20em', width: '20em', marginLeft: '1em', borderRadius: "20px" }} />
                    <p style={{paddingLeft:'2em'}}> ConCious living:The New Differentiation for travellers </p>
                </div>
                <div style={{height:'30em'}}>
                    <Image src={Room4} alt="sample_image" style={{ height: '20em', width: '20em', marginLeft: '1em', borderRadius: "20px" }} />
                    <p style={{paddingLeft:'2em'}}> ConCious living:The New Differentiation for travellers </p>
                    <div style={{backgroundColor:'orange',textAlign:'center',width:'8em',marginLeft:'8em',borderRadius:'2em'}}>
                        <p style={{color:'white'}}>Follow Us On</p>
                    </div>
                </div>
                <div style={{height:'30em'}}>
                    <Image src={Room6} alt="sample_image" style={{ height: '20em', width: '20em', marginLeft: '1em', borderRadius: "20px" }} />
                    <p style={{paddingLeft:'2em'}}> ConCious living:The New Differentiation for travellers </p>

                </div>
                <div style={{height:'30em'}}>
                    <Image src={Room8} alt="sample_image" style={{ height: '30em', width: '18em', marginLeft: '.5em', borderRadius: "20px" , zIndex:0,opacity:0.6,position:'absolute'}} />
                    <div style={{flexDirection:'column',zIndex:1 ,marginLeft:'3em',marginTop:'10em'}}>
                        <p style={{color:'black',fontSize:'22px'}}>JOIN NEWSLETTER</p>
                        <input style={{paddingTop:'1em',paddingBottom:'1em'}} value="Enter Your Email" />
                    </div>
                </div>
                
                <div>
                </div>
            </div>
        </div>
    )
}

export default Guide;