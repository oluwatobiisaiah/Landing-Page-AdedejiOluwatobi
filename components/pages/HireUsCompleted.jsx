import React, { useContext } from 'react'
import styles from '@/styles/HireUs.module.css'
import Image from 'next/image'
import { AiFillHome } from 'react-icons/ai'
import { NavigationContext } from '@/pages/hire-us'
import { useNextBtn,usePreviousBtn } from 'hooks/useHireUsNavigation'
import Link from 'next/link'


export default function HireUsCompleted() {
  const {navigationState,navigationDispatch} = useContext(NavigationContext)
  return (
    <div className={styles.hireUsStep}>
      <div className={styles.hireUsLeft}>
        <div className={styles.hireUsTitle}>
          <h2>Hire Us</h2>
          <span>Completed</span>
        </div>

        <div className={styles.hireUsImage}>
          <Image src='/pana-four.png' height={320} width={320} priority alt='Pane1' />
        </div>
      </div>
      <div className={styles.hireUsRight}>
        <p className={styles.hireUsRightTitle}>We boast of highly skilled and experienced tech personnel. We handle every projects with experience</p>
        <div className={styles.progress}>
          <span className={styles.progressCaption}>{navigationState.formProgress}% Completed</span>
          <progress className={styles.hireUsProgressBar} value={navigationState.formProgress} max={100} />
        </div>

        <div className={styles.hireUsFormCenter}>
        <Image src='/completed.png' height={100} width={100} priority alt='Completed' />
        <p className={styles.completedText}>Thank you for reaching out to us with the important details of your project.  One of Management team will reach out to you within 24hours</p>

          <Link className='bannerBtn darkBtn' href='/'><AiFillHome/> Home Page</Link>
        </div>

      </div>
    </div>)
}
