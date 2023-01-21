import Image from 'next/image'
import React from 'react'

export default function WhyHireUs() {
    return (
        <div className='whyHireUs'>
            <div className="whyHireUsContent">
                <span className="whyHireUsCaption">Business Solutions that will Help You Grow</span>
                <p className="whyHireUsDetails">
                Beyond providing tech. support and development, we also provide tech startups with marketing resources and the business operations support they need to get their project or company from an idea to a product/company.

                With Hack City Tech., we not only provide such startups with the right tech team to build their products efficiently, we also provide marketing and business operations support/resources. In addition, we provide them with investment and potential business partnership leads from our business network.
                </p>
            </div>
            <Image src="/why-hire-us.png" alt='whyHireUs' className='whyHireUsImage' priority  height={250} width={400}/>
         
        </div>
    )
}
