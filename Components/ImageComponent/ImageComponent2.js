import Image from "next/image"

function ImageComponent2({value3}) {
    return (
        <div>
            <div>
                <div style={{ marginTop: '2em', marginBottom: '2em', position: 'relative' }}>
                    <Image src={value3} alt="sample_image" style={{ height: '26em', width: '24em', marginLeft: '4em', borderRadius: "20px", zIndex: 2 }} />
                </div>
                {/* <div style={{ backgroundColor: 'orange', width: '6em', zIndex: 4, borderRadius: "20px", textAlign: 'center', position: 'absolute', left: '15em', top: '64em' }}>
                    <p style={{ color: 'white' }}>Hotels</p>
                </div> */}
            </div>
        </div>
    )
}

export default ImageComponent2