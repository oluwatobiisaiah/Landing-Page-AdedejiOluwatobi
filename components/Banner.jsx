import Image from 'next/image'
import Link from 'next/link';
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
                            1000,  'Tech Innovation and Business Development Hub.', 1000, '', 500]}
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
                    <Link className="bannerBtn darkBtn" href='hire-us'>Hire Developers</Link>
                    <Link className="bannerBtn lightBtn" href='#'>Contact Us</Link>
                </div>
            </div>

            {/* <div className="bannerImage"> */}
                <Image src="/bannerImage.png" alt='bannerImage' className='bannerImage' height={300} width={300} priority />
            {/* </div> */}
        </div>
    )
}
