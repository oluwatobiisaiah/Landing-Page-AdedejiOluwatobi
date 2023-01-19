import Image from 'next/image'
import React from 'react'

export default function OurExperence() {
  return (
    <div className='experience'>
        <div className="experienceImage">
        <Image src="/experienceImage.png" alt='Our Experience' height={300} width={400} priority />

        </div>

        <div className="experienceText">
        <span className="experienceTitle">Who we are</span>
         <h2 className='experienceCaption'>Experienced Tech Solutions Provider</h2>
          <p className="experienceDetails">
          HackCity is a one-stop tech company where ideas are transformed into products and businesses. Our product/business development teams have vast experiences and are equipped with the right tools to help you bring your idea to life, no matter how complex or incomplete it is. 
          </p>
        </div>
        

    </div>
)
}
