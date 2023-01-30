import Image from "next/image";
import Done2 from '../../Assets/Images/Done2.png';
import styles from '../../src/styles/Details.module.css';

function Detail2() {
  return (
    <div>
    <div style={{marginTop:'2em',marginBottom:'2em',position:'relative'}}>
      <Image src={Done2} alt="sample_image" style={{ height: '20em', width: '24em', marginLeft: '4em', borderRadius: "20px",zIndex:2 }} />
    </div>
    <div style={{backgroundColor:'orange',width:'8em',zIndex:4,borderRadius:"20px",textAlign:'center',position:'absolute',left:'45em',top:'56.5em'}}>
       <p style={{color:'white'}}>AR Suits</p>
    </div>
    </div>
  )
}

export default Detail2;