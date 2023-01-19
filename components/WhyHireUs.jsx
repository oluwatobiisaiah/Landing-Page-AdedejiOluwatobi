import Image from 'next/image'
import React from 'react'

export default function WhyHireUs() {
    return (
        <div className='whyHireUs'>
            <div className="whyHireUsContent">
                <span className="whyHireUsCaption">Business Solutions that will Help You Grow</span>

            </div>
            <Image src="/why-hire-us.png" alt='whyHireUs' priority  height={250} width={500}/>
         
        </div>
    )
}
