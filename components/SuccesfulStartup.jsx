import Image from 'next/image'
import React from 'react'

export default function SuccesfulStartup() {
    return (
        <div className='successfulStartup'>
            <h2 className='successfulStartupText'>Successful  Businesses & Startups</h2>
            <div className='successfulStartupImages'>
                <Image src='/image-313.png' priority className='startupLogo' alt='startuplogo' width={70} height={70}/>
                <Image src='/image-314.png' priority className='startupLogo' alt='startuplogo' width={70} height={70}/>
                <Image src='/image-317.png' priority className='startupLogo' alt='startuplogo' width={70} height={70}/>
                <Image src='/image-318.png' priority className='startupLogo' alt='startuplogo' width={70} height={70}/>
                <Image src='/image-320.png' priority className='startupLogo' alt='startuplogo' width={70} height={70}/>
                <Image src='/image-323.png' priority className='startupLogo' alt='startuplogo' width={70} height={70}/>

            </div>

        </div>
    )
}
