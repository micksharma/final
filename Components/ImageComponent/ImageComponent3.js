import Image from "next/image";

function ImageComponent3({value4,value5,value6}) {
    return (
        <div style={{display:'flex',justifyContent:'space-around'}}>
        <div> 
           <Image src={value4} alt="Room" style={{width:'42em',height:'40em',borderRadius:'2em',objectFit:'cover'}}/>
       </div>
        <div style={{flexDirection:'row'}}> 
           <div>
           <Image src={value5} alt="Done1" style={{ height:'20em', width:"42em",borderRadius:'2em'}} />
           </div>
           <div>
           <Image src={value6} alt="Done1" style={{ height:'20em', width:"42em",borderRadius:'2em'}} />
           </div>      
        </div>
     </div>
    )
}

export default ImageComponent3