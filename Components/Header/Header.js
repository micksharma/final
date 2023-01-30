import Logo from '../../Assets/Images/logo_1.png';
import Image from 'next/image';
import styles from '../../src/styles/Header.module.css';
import { useEffect, useState, useRef} from 'react';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/Rx';
import HeaderBar from 'Components/HeaderBar/HeaderBar';

function Header() {
   const [headerColor, setHeaderColor] = useState('container');
   const [condition, setCondition] = useState(true)
   const [sideScreen, setSideScreen] = useState(true)
   const [touched , setTouched] = useState(true);
   const [leave, setLeave] = useState(true);
  
   const navRef = useRef()
   navRef.current = headerColor

   useEffect(() => {
      const handleScroll = () => {
         const show = window.scrollY >  30
         if (show) {
            setHeaderColor('active');
         } else {
            setHeaderColor('container')
         }
      }
      document.addEventListener('scroll',handleScroll)
      return () => {
         document.removeEventListener('scroll',handleScroll)
      }
   }, [])
   
   function Clicked() {
      setTouched(!touched);
       
   }
   function Block() {
      setLeave(!leave);
   }

   return ( 
     <div className={headerColor === 'container' ? styles.container : styles.active}>
         <div className={styles.subContainer}>
            <div className={styles.ImageSections}>
               <Image src={Logo} alt="logo_image" className={styles.img1} />

            </div>
            <div className={styles.icons}>
               { condition ? 
               <FaBars className={styles.icons_fa} size={30} color="white" onClick={() => {  setCondition(!condition)   }}/>
               :
               <RxCross1 className={styles.icons_fa} size={30} color="white" onClick={() => setCondition(!condition)} />
               }
             
            </div>
         </div>
         <div className={styles.header_link} style={{ display: 'flex' }}>
            <p className={styles.header_para1} style={{ paddingRight: '15px' }}><a className={styles.icon} style={{ textDecoration: 'none', color: 'white' }} href="/">Home</a></p>
            <p className={styles.header_para1} style={{ paddingRight: '15px' }}><a className={styles.icon} style={{ textDecoration: 'none', color: 'white' }} href="/Hotels">Hotels</a></p>
            <p className={styles.header_para1} style={{ paddingRight: '15px' }}><a className={styles.icon} style={{ textDecoration: 'none', color: 'white' }} href="/ServiceApartments">Service Apartments</a></p>
            <p className={styles.header_para1} style={{ paddingRight: '15px' }}><a className={styles.icon} style={{ textDecoration: 'none', color: 'white' }} href="/ManagedHousing">Managed Housing</a></p>
            <li className={styles.header_para1} style={{ paddingRight: '15px',listStyleType:'none' }} >
              <a className={styles.icon} style={{ textDecoration: 'none', color: 'white' }} href="/Resources"  onMouseEnter={Clicked} onMouseDownCapture={Clicked}>Resources+</a>
             {!touched ?
               <div style={{position:'absolute',zIndex:'4'}}>
                   <ul style={{listStyleType:'none'}} onMouseLeave={Clicked}>
                   <p style={{backgroundColor:'white'}}>
                   <a className={styles.icon} style={{ textDecoration: 'none', color: 'black'}} href="/Resources/News">News</a>
                   </p>
                   <p style={{backgroundColor:'white'}}>
                   <a className={styles.icon} style={{ textDecoration: 'none', color: 'black'}} href="/Resources/PictureGallery">Picture Gallery</a>
                   </p>
                   <p style={{backgroundColor:'white'}}>
                   <a className={styles.icon} style={{ textDecoration: 'none', color: 'black'}} href="/Resources/Blogs">Blogs</a>
                   </p>
                   <p style={{backgroundColor:'white'}}>
                   <a className={styles.icon} style={{ textDecoration: 'none', color: 'black'}} href="/Resources/Testimonials">Testimonials</a>
                   </p>
                   <p style={{backgroundColor:'white'}}>
                   <a className={styles.icon} style={{ textDecoration: 'none', color: 'black'}} href="/Resources/Faq">FAQs</a>
                   </p>
                 </ul> 
               </div> 
                : null }
            </li>
            <li className={styles.header_para1} style={{ paddingRight: '15px' , listStyleType:'none'}}>
               <a className={styles.icon} style={{ textDecoration: 'none', color: 'white' }} href="/Others" onMouseEnter={Block} onMouseDownCapture={Block}>Others+</a>
               {!leave ?
               <div style={{position:'absolute',zIndex:4}}>
                   <ul style={{listStyleType:'none'}} onMouseLeave={Block}>
                   <p style={{backgroundColor:'white'}}>
                   <a className={styles.icon} style={{ textDecoration: 'none', color: 'black',textAlign:'center'}} href="/Others/PartnerWithUs">Partner With Us</a>
                   </p>
                   <p style={{backgroundColor:'white'}}>
                   <a className={styles.icon} style={{ textDecoration: 'none', color: 'black',textAlign:'center'}} href="/Others/OtherGallery">Other Gallery</a>
                   </p>           
                 </ul> 
               </div> 
                : null }
            </li>
            <p className={styles.header_para1} style={{ paddingRight: '15px' }}><a className={styles.icon} style={{ textDecoration: 'none', color: 'white' }} href="/MyBookings">My Bookings</a></p>
         </div>
         <div className={styles.header_number}>
            <p className={styles.header_para2} style={{ color: 'white' }}>+91-8899770770</p>
         </div>
      </div>
      
   )
}

export default Header