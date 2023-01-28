function BookDetails() {
    return (
        <div style={{ flexDirection: "row" ,paddingTop:'2em',paddingBottom:'2em'}}>
            <div style={{ backgroundColor: 'black', justifyContent: 'space-evenly', display: 'flex' }}>
                <p style={{ color: 'white' }}>Future Bookings</p>
                <p style={{ color: 'white' }}>Past Bookings</p>
            </div>
            <div style={{ flexDirection: 'row' }}>
                <div style={{ height: 1, width: '100%', backgroundColor: 'grey' }} />
                <div style={{textAlign:'center',borderColor:'black'}}>
                    <p style={{ color: 'blue' }}>No Future Booking Details Found</p>
                </div>
            </div>
        </div>
    )
}

export default BookDetails