import Image from "next/image";
import Header from "Components/Header/Header";
import ImageComponent from "Components/ImageComponent/ImageComponent";
import Footer from "Components/Footer/Footer";
import BannerImage from '../../Assets/Images/bannerApartments.png';
import Image2 from '../../Assets/Images/Building1.jpg';
import Building8 from '../../Assets/Images/Building8.jpg';
import InputContainer2 from "Components/InputContainer2/InputContainer2";


function ApartmentDetails() {
    return (
     <>
      <Header />
      <ImageComponent value={BannerImage} value2="Service Apartments" />
      <div style={{width:'100%',display:'flex'}}>
        <div style={{width:'80%',flexDirection:'row',marginLeft:'5em'}}>
            {/*Image Component  */}
          <div style={{paddingTop:'2em',paddingBottom:'2em'}}>
           <Image src={Image2} alt="Image2" style={{width:'65em',height:'20em',borderRadius:'2em'}} />
           </div>

           {/* Details Page */}
           <div style={{flexDirection:'row',paddingTop:'1em',paddingBottom:'2em',boxShadow: '0 0.5em 1.2em rgb(0 0 0 / 20%)', borderRadius:'1em',paddingLeft:'1em',paddingRight:'1em',width:'65em'}}>
             <div>
              <p style={{fontSize:'2em'}}> DLF BELAIRE Sector 54 Gurgaon</p>
              </div>
              <div style={{backgroundColor:'orange', height:'1px' , width:"100%"}}/>
              <div>
                <p style={{fontSize:'1.8em'}}>Room Overview</p>
                <p style={{paddingLeft:'0.5em'}}>
                    DLF Belaire, a beautiful offering at DLF Phase 5 Sector 54 Gurgaon. Experience a private lifestyle that comes from staying in a premium gated community s have been designed to offer the best in terms of space and design. It is a luxury habitat surrounded by extensive greens with many apartments overlooking the DLF Golf Course greens. Home to multinational corporations, world-class dining, & shopping avenues. 16-lane expressway and rapid metro network defines seamless connectivity.
                </p>
                <p style={{padddingLeft:'0.2em'}}>
                   Belaire Specifications
                </p>
                   <ul>
                     <li>4 Bedroom Apartments Available with different sizes starting from 3000sqt  to 4217Sqft.</li>
                   </ul>
               
              </div>
           </div>
           {/* Society Amenties */}
            <div style={{flexDirection:'row',marginTop:'3em',boxShadow: '0 0.5em 1.2em rgb(0 0 0 / 20%)',borderRadius:'1.2em',paddingLeft:'1.2em',paddingTop:'1.2em',paddingBottom:'1.3em',width:'65em'}}>
                <div>
                    <p style={{fontSize:'2em'}}>Society Amenties</p>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',paddingRight:'2em'}}>
                    <div>
                    <p>Steam and Sauna</p>
                    </div>
                    <div>
                    <p>Club House</p>
                    </div>
                    <div>
                    <p>Gymnasium</p>
                    </div>
                    <div>
                    <p>Swimming Pool</p>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',paddingLeft:'2em',paddingRight:'2em'}}>
                    <div>
                    <p>Spa</p>
                    </div>
                    <div>
                    <p>Salon</p>
                    </div>
                    <div>
                    <p>Massage</p>
                    </div>
                    <div>
                    <p>Massage</p>
                    </div>
                </div>
            </div>

            {/* Room Amenties */}
           
                <div style={{flexDirection:'row',marginTop:'3em',boxShadow: '0 0.5em 1.2em rgb(0 0 0 / 20%)',borderRadius:'1.2em',paddingLeft:'1.5em',paddingTop:'1.3em',paddingBottom:'1.4em',marginBottom:'1.4em',paddingRight:'1em',width:'65em'}}>
                   <div>
                     <p style={{fontSize:'1.5em'}}>Room Amenties</p>
                   </div>
                   <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div style={{paddingTop:'1em',paddingBottom:'1em'}}>
                    <p style={{}}>Fully Furnished Apartments</p>
                    </div>
                    <div>
                    <p>Air Conditioned</p>
                    </div>
                    <div>
                    <p>Marble Flooring</p>
                    </div>
                    <div>
                    <p>Wooden Flooring</p>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div>
                    <p>Fully Fitted Toilets</p>
                    </div>
                    <div>
                    <p>Fully Furnished Kitchen</p>
                    </div>
                    <div>
                    <p>Massage</p>
                    </div>
                    <div>
                    <p>Massage</p>
                    </div>
                </div>
                </div>
        </div>

        {/* Side Screen */}
        <div style={{width:'20%',flexDirection:'row',paddingRight:'3em'}}>
          <div>
          <div style={{paddingTop:'2em'}}> 
           <Image src={Image2} alt="Image2" style={{width:'16em ',height:'5em',objectFit:'cover',borderRadius:'1em'}} />
          </div>
          <div style={{paddingTop:'2em'}}>
           <Image src={Image2} alt="Image2" style={{width:'16em ',height:'5em',objectFit:'cover',borderRadius:'1em'}} />
          </div>
          <div style={{paddingTop:'2em'}}>
           <Image src={Image2} alt="Image2" style={{width:'16em ',height:'5em',objectFit:'cover',borderRadius:'1em'}} />
          </div>
          </div>
          {/* InputContainer */}
          <div>
              <InputContainer2 />
          </div>
        </div>
      </div>
      <Footer />
     </>
    )
}

export default ApartmentDetails;