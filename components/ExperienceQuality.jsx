import Image from 'next/image'
import React from 'react'

export default function ExperienceQuality() {
    return (
        <div className='experienceQualityContainer'>
            <div className="experienceQuality">
                <div className="header">
                    <div className="icon"><Image src="/gear-icon.png" alt='gearIcon' width={40} height={40} priority /></div>
                    <div className="text">Tech + Business</div>
                </div>
                <div className="body">
                    <p className="text">
                        We go beyond software development, we also offer business development services
                    </p>
                </div>
            </div>

            <div className="experienceQuality">
                <div className="header">
                    <div className="icon"><Image src="/female-icon.png" alt='gearIcon' width={40} height={40} priority /></div>
                    <div className="text">Vetted + Experienced</div>
                </div>
                <div className="body">
                    <p className="text">
                    Team of well-vetted experienced developers for your tech and business needs                    </p>
                </div>
            </div>

            <div className="experienceQuality">
                <div className="header">
                    <div className="icon"><Image src="/target-icon.png" alt='gearIcon' width={40} height={40} priority /></div>
                    <div className="text">Effective + Efficient</div>
                </div>
                <div className="body">
                    <p className="text">
                    Adopts an effective and efficient development scheme, saving you time and money
                    </p>
                </div>
            </div>


        </div>
    )
}
