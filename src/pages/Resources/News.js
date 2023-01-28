import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import ImageComponent from "Components/ImageComponent/ImageComponent";
import Shadow3 from '../../../Assets/Images/Shadow3.jpg';
import Image from "next/image";
import Forbes1 from '../../../Assets/Images/Forbes1.jpg';
import Forbes2 from '../../../Assets/Images/Forbes2.jpg';
import Forbes3 from '../../../Assets/Images/Forbes3.jpg';
import Forbes4 from '../../../Assets/Images/Forbes4.png';
import { useRouter } from "next/router";
import { TbScale } from "react-icons/Tb";


function News() {

  const router = useRouter()


  return (
    <>
      <Header />
      <ImageComponent value={Shadow3} value2="News" />
      <div style={{ flexDirection: 'row' }}>
        <div style={{ textAlign: 'center', paddingTop: '1em', paddingBottom: '1em' }}>
          <p style={{ fontSize: '2em' }}>Latest News</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ flexDirection: 'row' }}>
            <Image src={Forbes1} alt="Forbes_Image" style={{ width: '40em', height: '30em', objectFit: 'cover', borderRadius: '1em' }} />
            <div style={{ flexDirection: 'row' }}>
              <p>01 August 2022</p>
              <p>Forbes India</p>
              <p>Families in Business Tomorro Family Business Requires a new approach for </p>

            </div>
          </div>
          <div style={{ flexDirection: 'row' }}>
            <div style={{ display: 'flex', paddingTop: '1em', paddingBottom: '1em' }}>
              <div>
                <Image src={Forbes2} alt="Forbes2_Image" style={{ width: '15em', height: '10em', objectFit: 'cover' }} />
              </div>
              <div style={{ flexDirection: 'row', paddingLeft: '1.5em' }}>
                <p>01 August 2022</p>
                <p>Forbes India</p>
                <p>Families in Business Tomorro Family Business Requires a new approach for </p>

              </div>
            </div>
            <div style={{ backgroundColor: 'orange', width: '60%', height: '2px' }} />
            <div style={{ display: 'flex', paddingTop: '1em', paddingBottom: '1em' }}>
              <div>
                <Image src={Forbes3} alt="Forbes2_Image" style={{ width: '15em', height: '10em', objectFit: 'cover' }} />
              </div>
              <div style={{ flexDirection: 'row', paddingLeft: '1.5em' }}>
                <p>01 August 2022</p>
                <p>Forbes India</p>
                <p>Families in Business Tomorro Family Business Requires a new approach for </p>

              </div>
            </div>
            <div style={{ backgroundColor: 'orange', width: '100%', height: '1px' }} />
            <div style={{ display: 'flex', paddingTop: '1em', paddingBottom: '1em' }}>
              <div>
                <Image src={Forbes4} alt="Forbes2_Image" style={{ width: '15em', height: '10em', objectFit: 'cover' }} />
              </div>
              <div style={{ flexDirection: 'row', paddingLeft: '1.5em' }}>
                <p>01 August 2022</p>
                <p>Forbes India</p>
                <p>Families in Business Tomorro Family Business Requires a new approach for </p>

              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ flexDirection: 'row',paddingLeft:'1em',paddingTop:'2em',paddingBottom:'2em'}}>
            <div>
              <Image src={Forbes4} alt="Forbes2_Image" style={{ width: '25em', height: '16em', objectFit: 'cover' }} />
            </div>
            <div style={{ flexDirection: 'row' ,paddingLeft:'1.5em'}}>
              <p>01 August 2022</p>
              <p>Forbes India</p>
              <p>Families in Business Tomorro Family Business Requires a new approach for </p>

            </div>
            <div style={{ backgroundColor: 'orange', width: '20%', height: '1px',marginTop:'1em',marginLeft:'1.2em' }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default News;