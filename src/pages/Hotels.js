import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import Image from "next/image";
import ImageComponent from "Components/ImageComponent/ImageComponent";
import SearchBar from "Components/SearchBar/SearchBar";
import FirstComponent from "Components/HotelsComponents/FirstComponent";
import SecondComponent from "Components/HotelsComponents/SecondComponent";
import Shadow3 from '../../Assets/Images/Shadow3.jpg';
import { useRouter } from "next/router";

function Hotels(){
 
  const router = useRouter();
  console.log(router.pathname);

    return (
        <>
        <Header />
        <ImageComponent value={Shadow3} value2={router.pathname}/>
        <div style={{paddingLeft:'36em'}}>
        <SearchBar />
        </div>
        <div style={{paddingTop:'2em',paddingBottom:'2em'}}>
          <FirstComponent />
        </div>
        <div style={{paddingTop:'2em',paddingBottom:'2em'}}>
           <SecondComponent />
        </div>
        <Footer />
        </>
    )
}

export default Hotels;