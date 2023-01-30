import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import ImageComponent from "Components/ImageComponent/ImageComponent";
import Image2 from '../../Assets/Images/hotel4.jpg';
import Image from "next/image";
function BuildingDetails() {
    return (
       <div>
          <Header />
          <ImageComponent value={Image2} value2="Service Apartments" />
          <div style={{display:'flex',paddingTop:'3em',paddingBottom:'3em'}}>
            <div style={{width:'80%',paddingLeft:'5em'}}>
                <div>
                 <Image src={Image2} alt="Image2" style={{width:'67em',height:'24em',objectFit:'cover',borderRadius:'1em'}} />
                 </div>
            </div>
            <div style={{width:'20%'}}>
      
            </div>
         </div>
          <Footer />
       </div>
    )
}

export default BuildingDetails