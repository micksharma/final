import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";
import Done1 from '../../../Assets/Images/Done1.JPG'
import ImageComponent from "Components/ImageComponent/ImageComponent";
import ImageComponent4 from "Components/ImageComponent/ImageComponent4";

function Blogs() {
    return (
    <>
      <Header />
       <ImageComponent value={Done1} value2="Blogs" />
       <div style={{marginLeft:'20em'}}>
       <ImageComponent4 />
       </div>
      <Footer />
      </>  
    )
}

export default Blogs;