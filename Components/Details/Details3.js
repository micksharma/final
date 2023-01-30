import Image from "next/image";
import Done1 from '../../Assets/Images/Done1.JPG';
import styles from '../../src/styles/Details.module.css';

function Detail3() {
  return (
    <div>
    <div style={{marginTop:'2em',marginBottom:'2em',position:'relative'}}>
      <Image src={Done1} alt="sample_image" style={{ height: '20em', width: '24em', marginLeft: '4em', borderRadius: "20px",zIndex:2 }} />
    </div>
    <div style={{backgroundColor:'orange',width:'10em',zIndex:4,borderRadius:"20px",textAlign:'center',position:'absolute',left:'75em',top:'56.5em'}}>
       <p style={{color:'white'}}>Service Apartments</p>
    </div>
    </div>
  )
}

export default Detail3;