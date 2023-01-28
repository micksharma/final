import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import ImageComponent from "Components/ImageComponent/ImageComponent";
import Building4 from '../../Assets/Images/Building6.jpg';
import { useRouter } from "next/router";
import ManagedHousingComponent1 from "Components/ManagedHousing/ManagedHousingComponent1";
import InputContainer from "Components/ManagedHousing/InputContainer";


function ManagedHousing(){
    const router = useRouter();
  console.log(router.pathname);

    return (
        <>
        <Header />
        <ImageComponent value={Building4} value2={router.pathname}/>
        <ManagedHousingComponent1 />
        <InputContainer />
        <div style={{backgroundColor:'orange',borderRadius:'.5em',textAlign:'center',width:"12em",height:'2em',marginLeft:'40em',marginBottom:'2em',marginTop:'1em'}}>
            <p style={{color:'white'}}>Make Enquiry</p>
        </div>
        <Footer />
        </>
    )
}

export default ManagedHousing;