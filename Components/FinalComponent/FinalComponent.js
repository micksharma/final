import Done2 from '../../Assets/Images/Done2.png';
import Image from 'next/image';
import Cards from 'Components/Card/Card';
import Card2 from 'Components/Card/Card2';
import { FlatList } from 'react';
import { Card } from '@nextui-org/react';
import { RxAlignBaseline } from 'react-icons/Rx';
function FinalComponent() {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <p style={{ color: 'black', fontSize: '2em' }}>Most Popular Hotels</p>
            </div>
            <div style={{display:'flex'}}>
                <div>
                    <Image src={Done2} alt="Images" style={{ height: '40em', width: '30em', marginLeft: '4em', borderRadius: '2em', marginRight: '4em', background: 'rgba(black, 0.5)' }} />
                </div>
                <div style={{flexDirection:'row'}}>          
                <div>
                 <p style={{color:'black',fontSize:'1.3em'}}>The Cities Where You Get It All</p>
                </div>
                <div style={{display:'flex'}}>
                   <div style={{marginRight:'3em'}}>
                      <Cards />
                   </div>
                   <div style={{marginRight:'3em'}}>
                      <Cards />
                   </div>
                   <div style={{marginRight:'3em'}}>
                      <Cards />
                   </div>
                </div>
                <div style={{paddingTop:'2em'}}>
                    <div>
                        <p style={{color:'black', fontSize:'1.3em'}}>Popular Ahuja Residences</p>
                    </div>
                    <div>
                        <Card2 />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default FinalComponent;