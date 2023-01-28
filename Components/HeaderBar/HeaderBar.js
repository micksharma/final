import styles from '../../src/styles/HeaderBar.module.css';
import Image from 'next/image';
import Logo from '../../Assets/Images/logo_1.png';

function HeaderBar() {
      return (
        <div style={{backgroundColor:'black' , width:'100%',height:"100%",zIndex:10,right:0}}>
              <div className={styles.headerBar_ImageSections}>
               <Image src={Logo} alt="logo_image" className={styles.headerBar_img1} />
            </div>
        </div>
      )
}

export default HeaderBar