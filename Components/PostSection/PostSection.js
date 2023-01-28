import Image from "next/image";
import Done1 from '../../Assets/Images/Done1.JPG';
import Room5 from '../../Assets/Images/Room5.jpg';
import Room3 from '../../Assets/Images/Room3.jpg';
import Room13 from '../../Assets/Images/Room13.jpg';
import Room11 from '../../Assets/Images/Room11.jpg';

function PostSection() {
    return (
        <div style={{marginBottom:'10em'}}>
            <div style={{textAlign:'center'}}>
            <p style={{fontSize:'2em'}}>Explore Latest Instagram Posts</p>
            </div>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <div>
                <Image src={Done1} alt="sample_image"  style={{height:'20em', width:'20em' ,marginLeft:'2em',borderRadius:"20px"}}/>
            </div>
            <div>
                <Image src={Room5} alt="sample_image"  style={{height:'20em', width:'20em' ,marginLeft:'2em',borderRadius:"20px"}}/>
            </div>
            <div>
                <Image src={Room3} alt="sample_image"  style={{height:'20em', width:'20em' ,marginLeft:'2em',borderRadius:"20px"}}/>
            </div>
            <div>
                <Image src={Room13} alt="sample_image"  style={{height:'20em', width:'20em' ,marginLeft:'2em',borderRadius:"20px"}}/>
            </div>
            </div>
          
        </div>
    )
}

export default PostSection;