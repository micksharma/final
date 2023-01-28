import Image from "next/image";
import maps from '../../Assets/Images/maps.png';


function Location() {
    return (
        <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ width: '50%' }}>
                <Image src={maps} alt="Location_map" style={{ width: '45em' }} />
            </div>
            <div style={{ width: '50%' }}>
                <p style={{ paddingLeft: '5em', paddingTop: '5em', fontSize: '1.5em' }}>1500+Rooms, 4+Cities ,And 40+ Years of Expertise</p>
                <p style={{ paddingLeft: '5em', fontSize: '1.5em' }}>Service Apartments, Hotels and Managed Corporate Housing</p>
                <div style={{ display: 'flex' }}>
                    <div style={{ paddingLeft: '7.5em' }}>
                        <p style={{ fontSize: '1.4em' }}>4</p>
                        <p style={{ color: 'orange' }}>Cities</p>
                    </div>
                    <div style={{ paddingLeft: '4em' }}>
                        <p style={{ fontSize: '1.4em' }}>400+</p>
                        <p style={{ color: 'orange' }}>Hotels & Homes</p>
                    </div>
                </div>
                <div style={{paddingLeft:'7.5em',flexWrap:'wrap'}}>
                    {/* <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{width:'5px', height:'5px',borderRadius:'50%',backgroundColor:'orange',marginTop:'1.5em',marginRight:'.5em'}} />
                         <div>
                            <p>Delhi</p>
                         </div>
                    </div> */}
                    {/* <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{width:'5px', height:'5px',borderRadius:'50%',backgroundColor:'orange',marginTop:'1.5em',marginRight:'.5em'}} />
                         <div>
                            <p>Delhi</p>
                         </div>
                    </div> */}
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{width:'5px', height:'5px',borderRadius:'50%',backgroundColor:'orange',marginTop:'1.5em',marginRight:'.5em'}} />
                         <div>
                            <p>Delhi</p>
                         </div>
                    </div>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{width:'5px', height:'5px',borderRadius:'50%',backgroundColor:'orange',marginTop:'1.5em',marginRight:'.5em'}} />
                         <div>
                            <p>Delhi</p>
                         </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Location;