import Image from 'next/image'
import Link from 'next/link'
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
                        <Link href='#'><Image src='/linkdln-icon.png' priority alt='igIcon' height={20} width={20} /> </Link>
                        <Link href='#'><Image src='/facebook-icon.png' priority alt='igIcon' height={20} width={20} /> </Link>
                        <Link href='#'><Image src='/ig-icon.png' priority alt='igIcon' height={20} width={20} /> </Link>
                        <Link href='#'><Image src='/twitter-icon.png' priority alt='igIcon' height={20} width={20} /> </Link>
                        <Link href='#'><Image src='/github-icon.png' priority alt='igIcon' height={20} width={20} /> </Link>

                    </div>
                </div>

                <div className="rightFooter">
                    <div className="rightFooterBox">
                        <span className="rightFooterBoxHeader">SOLUTIONS</span>
                        <span className="rightFooterBoxText">Marketing</span>
                        <span className="rightFooterBoxText">Analytics</span>
                        <span className="rightFooterBoxText">Commerce</span>
                        <span className="rightFooterBoxText">Insights</span>
                    </div>

                    <div className="rightFooterBox">
                        <span className="rightFooterBoxHeader">SOLUTIONS</span>
                        <span className="rightFooterBoxText">Marketing</span>
                        <span className="rightFooterBoxText">Analytics</span>
                        <span className="rightFooterBoxText">Commerce</span>
                        <span className="rightFooterBoxText">Insights</span>
                    </div>

                    <div className="rightFooterBox">
                        <span className="rightFooterBoxHeader">SOLUTIONS</span>
                        <span className="rightFooterBoxText">Marketing</span>
                        <span className="rightFooterBoxText">Analytics</span>
                        <span className="rightFooterBoxText">Commerce</span>
                        <span className="rightFooterBoxText">Insights</span>
                    </div>

                </div>
            </div>

            <div className="footerCopyright">
              <span>&copy; 2023 HackCity, Inc. All rights reserved.</span>
            </div>

        </div>
    )
}
