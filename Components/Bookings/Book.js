import { Input } from '@nextui-org/react';
import { Radio } from '@nextui-org/react';
import BookDetails from './BookDetails';

function Book() {
    return (
        <div style={{ flexDirection: 'row',marginLeft:'5em',marginRight:'5em' }}>
            <div>
                <p style={{color:'black',paddingTop:'1em',fontSize:'2em'}}>BOOKINGS</p>
            </div>
            <div style={{ height: 2, width: '100%', backgroundColor: 'grey' }} />
            <div style={{ display: 'flex', marginTop:'4em',justifyContent:'space-evenly'}}>
                <div style={{ paddingLeft: '2em' }}>
                    <Input placeholder="Booking ID" />
                </div>
                <div >
                    <Radio.Group defaultValue="A" orientation="horizontal">
                        <Radio value="A">Email</Radio>
                        <Radio value="B">Mobile</Radio>
                    </Radio.Group>
                </div>
                <div>
                    <Input placeholder="Email Used for Booking" />
                </div>
                <div style={{ backgroundColor: 'orange', borderRadius: '.5em', textAlign: 'center', width: "12em", height: '2em', marginLeft: '20em', marginBottom: '2em'}}>
                    <p style={{ color: 'white' }}>Search</p>
                </div>
            </div>
            <BookDetails />
        </div>
    )
}

export default Book;