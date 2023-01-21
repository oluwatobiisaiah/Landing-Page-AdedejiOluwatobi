import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footerMain">
                <div className="leftFooter">
                <Image src="/logo-white.png" alt='logo' width={25} height={35} priority />
                <p className="leftFooterText">
                Making the world a better place through constructing elegant hierarchies.
                </p>
                  <div className="socialMediaLinks">
                    
                  </div>
                </div>
                <div className="rightFooter">

                </div>
            </div>

            <div className="footerCopyright">

            </div>

        </div>
    )
}
