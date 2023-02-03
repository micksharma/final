
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import Shadow1 from '../../Assets/Images/Shadow1.jpg';
import Shadow2 from '../../Assets/Images/Shadow2.png';
import Shadow3 from '../../Assets/Images/Shadow3.jpg';


function HeroSection() {
    return (
        <div>
              
              <Carousel>
                  <div>
                      <Image src={Shadow1} alt="image5" style={{height:'32em',width:'95em',objectFit:'cover'}}/>
                  </div>
                  <div>
                      <Image src={Shadow2} alt="image2" style={{height:'32em',width:'95em',objectFit:'cover'}}/>
                  </div>
                  <div>
                      <Image src={Shadow3} alt="image3" style={{height:'32em',width:'95em',objectFit:'cover'}}/>  
                  </div>
                  <div>
                      <Image src={Shadow1} alt="image4" style={{height:'32em',width:'95em',objectFit:'cover'}}/>
                  </div>
                  <div>
                      <Image src={Shadow2} alt="image5" style={{height:'32em',width:'95em',objectFit:'cover'}}/> 
                  </div>
              </Carousel>
            </div>
    )
}

export default HeroSection;