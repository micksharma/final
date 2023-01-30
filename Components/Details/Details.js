import Image from "next/image";
import Done1 from '../../Assets/Images/Done1.JPG';
import styles from '../../src/styles/Details.module.css';

function Detail() {
  return (
    <div className={styles.DetailsPage}>
    <div style={{marginTop:'2em',marginBottom:'2em',position:'relative'}}>
      <Image src={Done1} alt="sample_image" style={{ height: '20em', width: '24em', marginLeft: '4em', borderRadius: "20px",zIndex:2 }} />
    </div>
    <div className={styles.DetailsPageBar} style={{backgroundColor:'orange',width:'6em',zIndex:4,borderRadius:"20px",textAlign:'center',position:'absolute',left:'15em',top:'56.5em'}}>
       <p style={{color:'white'}}>Hotels</p>
    </div>
    </div>
  )
}

export default Detail;