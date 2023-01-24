import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <div className='navBar'>
            <div className="navLogo">
                <Image src="/logo.png" alt='logo' width={30} height={50} priority />
                <span className='logoText'>HackCity</span>

            </div>

            <div className="nav">
                <div className="navLink">
                 <span>Services</span>
                </div>
                <div className="navLink">
                  <span>Career</span>
                </div>
                <div className="navLink">
                  <span>Contact Us</span>
                </div>
            </div>

            <div className="navMainBtn">
              <Link className='navBtn' href='hire-us'>Hire Developers</Link>
            </div>
        </div>
    )
}
