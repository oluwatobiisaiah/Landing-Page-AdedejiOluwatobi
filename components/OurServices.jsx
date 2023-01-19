import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowCircleRight } from 'react-icons/hi'

export default function OurServices() {
  return (
    <div className='ourService'>
      {/* <> */}
      <h2 className='ourServiceText'>Our Services</h2>

      <div className="ourServiceGrid">

        <div className="ourServiceBox">
          <div className="ourServiceBoxContent">
            <Image src='/web-dev-icon.png' width={50} height={50} alt='serviceIcon' priority />
            <span className="ourServiceBoxText">Web Application</span>
            <p className='ourServiceBoxDetails'>Design and development of websites and web applications of all kind. Our experienced developers handle it all.</p>
          </div>


          <Link href={'#'} className="ourServiceBoxLink"> <HiArrowCircleRight /> <span>Learn More</span></Link>
        </div>

        <div className="ourServiceBox">
          <div className="ourServiceBoxContent">
            <Image src='/mobile-app-icon.png' width={50} height={50} alt='serviceIcon' priority />
            <span className="ourServiceBoxText">Mobile Application</span>
            <p className='ourServiceBoxDetails'>HackCity Tech focus on user experience making your potential customers engaged</p>
          </div>

          <Link href={'#'} className="ourServiceBoxLink"> <HiArrowCircleRight /> <span>Learn More</span></Link>

        </div>

        <div className="ourServiceBox">
          <div className="ourServiceBoxContent">
            <Image src='/blockchain-icon.png' width={50} height={50} alt='serviceIcon' priority />
            <span className="ourServiceBoxText">Blockchain Application</span>
            <p className='ourServiceBoxDetails'>HackCity Tech focus on user experience making your potential customers engaged</p>
          </div>

          <Link href={'#'} className="ourServiceBoxLink"> <HiArrowCircleRight /> <span>Learn More</span></Link>

        </div>

        <div className="ourServiceBox">
          <div className="ourServiceBoxContent">
            <Image src='/game-pad-icon.png' width={50} height={50} alt='serviceIcon' priority />
            <span className="ourServiceBoxText">Game Application</span>
            <p className='ourServiceBoxDetails'>HackCity Tech focus on user experience making your potential customers engaged</p>
          </div>

          <Link href={'#'} className="ourServiceBoxLink"> <HiArrowCircleRight /> <span>Learn More</span></Link>

        </div>

        <div className="ourServiceBox">
          <div className="ourServiceBoxContent">
            <Image src='/bot-icon.png' width={50} height={50} alt='serviceIcon' priority />
            <span className="ourServiceBoxText">Bot Application</span>
            <p className='ourServiceBoxDetails'>HackCity Tech focus on user experience making your potential customers engaged</p>
          </div>

          <Link href={'#'} className="ourServiceBoxLink"> <HiArrowCircleRight /> <span>Learn More</span></Link>

        </div>

        <div className="ourServiceBox">
          <div className="ourServiceBoxContent">
            <Image src='/pnp-icon.png' width={50} height={50} alt='serviceIcon' priority />
            <span className="ourServiceBoxText">PnP Microservices</span>
            <p className='ourServiceBoxDetails'>HackCity Tech focus on user experience making your potential customers engaged</p>
          </div>

          <Link href={'#'} className="ourServiceBoxLink"> <HiArrowCircleRight /> <span>Learn More</span></Link>

        </div>


      </div>

    </div>
  )
}
