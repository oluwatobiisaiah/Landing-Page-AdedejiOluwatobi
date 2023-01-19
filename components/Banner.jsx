import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';



export default function Banner() {
    return (
        <div className='banner'>
            <div className="bannerText">
                <span className="bannerTitle">HackCity Tech Inc.</span>
                {/* <p className="bannerCaption"> */}
                <h1 className="bannerCaption">
                    <TypeAnimation
                        sequence={['Tech', 1000, 'Tech Innovation', 1000, 'Tech Innovation and ',
                            1000, 'Tech Innovation and Business ', 1000, 'Tech Innovation and Business Development Hub.', 1000, '', 500]}
                        //  Continuing previous Text
                        wrapper="div"
                        cursor= {false}
                        repeat={Infinity}
                    />
                </h1>
                {/* </p> */}
                <div className="bannerDetails">
                    Equipped with the resources to jumpstart your idea. Experienced software and business developers for all your needs, simple or complex.
                </div>
                <div className="bannerBtnContainer">
                    <span className="bannerBtn darkBtn">Hire Developers</span>
                    <span className="bannerBtn lightBtn">Contact Us</span>
                </div>
            </div>

            {/* <div className="bannerImage"> */}
                <Image src="/bannerImage.png" alt='bannerImage' className='bannerImage' height={300} width={600} priority />
            {/* </div> */}
        </div>
    )
}
