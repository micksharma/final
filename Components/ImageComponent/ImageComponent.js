import Image from "next/image";
import Shadow3 from '../../Assets/Images/Shadow3.jpg';



function ImageComponent({value ,value2}) {
    return (
      <div>
        <Image src={value} alt={Shadow3} style={{height:'20em',width:'95em',objectFit:'cover',zIndex:1}} />
        <div style={{flexDirection:'row',position:'absolute',zIndex:2,left:'38em',top:'7em'}}>
           <p style={{color:'orange', fontSize:'3em'}}>Rooms and Suits</p>
           <p style={{color:'orange',fontSize:"2em",paddingLeft:'2.8em'}}>Hotels</p>
        </div>
        <div style={{backgroundColor:'white',display:'flex',justifyContent:'space-evenly',width:'14em',height:'3em',position:'absolute',right:'2em',top:'17em',alignItems:'center'}}>
            <p>Home</p>
            <div style={{height:'60%',width:5,backgroundColor:'black'}} />
            <p>{value2}</p>
        </div>
      </div>
    )
}

export default ImageComponent