import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import Image from "next/image";
import ImageComponent from "Components/ImageComponent/ImageComponent";
import SearchBar from "Components/SearchBar/SearchBar";
import FirstComponent from "Components/HotelsComponents/FirstComponent";
import SecondComponent from "Components/HotelsComponents/SecondComponent";
import ServiceComponent from "Components/ServiceApartments/ServiceComponent";
import Shadow3 from '../../Assets/Images/Shadow3.jpg';
import { useRouter } from "next/router";

function ServiceApartments(){
  
  const router = useRouter();
  console.log(router.pathname);

    return (
        <>
        <Header />
        <ImageComponent value={Shadow3} value2={router.pathname} />
        <div style={{paddingLeft:'36em'}}>
        <SearchBar />
        </div>
         <div>
            <ServiceComponent />
         </div>
         <div style={{paddingTop:'6em'}}>
           <div style={{backgroundColor:'orange',height:'6em',justifyContent:'space-around',display:'flex',alignItems:'center'}}>
              <div>
                <p style={{fontSize:'2em',color:'white'}}>We Are Just a Click Away</p>
              </div>
              <div>
                <p style={{fontSize:'2em',color:'white'}}>Contact Us</p>
              </div>
           </div>
         </div>
        <Footer />
        </>
    )
}

export default ServiceApartments;