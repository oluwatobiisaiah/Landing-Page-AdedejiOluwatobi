import React, { useContext } from 'react'
import styles from '@/styles/HireUs.module.css'
import Image from 'next/image'
import OptionCard from 'components/Card/OptionCard'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { NavigationContext } from '@/pages/hire-us'
import { useNextBtn,usePreviousBtn } from 'hooks/useHireUsNavigation'


export default function HireUsStepThree() {
  const {navigationState,navigationDispatch} = useContext(NavigationContext)
  return (
    <div className={styles.hireUsStep}>
      <div className={styles.hireUsLeft}>
        <div className={styles.hireUsTitle}>
          <h2>Hire Us</h2>
          <span>Step Three</span>
        </div>

        <div className={styles.hireUsImage}>
          <Image src='/pana-three.png' height={320} width={320} priority alt='Pane1' />
        </div>
      </div>
      <div className={styles.hireUsRight}>
        <p className={styles.hireUsRightTitle}>We boast of highly skilled and experienced tech personnel. We handle every projects with experience</p>
        <div className={styles.progress}>
          <span className={styles.progressCaption}>{navigationState.formProgress}% Completed</span>
          <progress className={styles.hireUsProgressBar} value={navigationState.formProgress} max={100} />
        </div>

        <div className={styles.hireUsForm}>
          <div className={styles.hireUsFormField}>
            <div className={styles.hireUsFormFieldTitle}>
              <span className={styles.dot}></span>
              <span>Which best describes your requirement/engagement timeline ?</span>
            </div>

            <div className={styles.optionFieldCol}>
              <OptionCard />
              <OptionCard />
              <OptionCard />
            </div>
          </div>
          
          <div className={styles.hireUsFormField}>
            <div className={styles.hireUsFormFieldTitle}>
              <span className={styles.dot}></span>
              <span>When are you likely to start this project ?</span>
            </div>

            <div className={styles.optionFieldCol}>
              <OptionCard />
              <OptionCard />
              <OptionCard />
              <OptionCard />
            </div>
          </div>



          <div className={styles.hireUsNavBtn}>
            <a href='#' className='bannerBtn lightBtn' onClick={()=>usePreviousBtn(navigationDispatch)}><AiOutlineArrowLeft /> Previous</a>
            <a href='#' className='bannerBtn darkBtn' onClick={()=>useNextBtn(navigationDispatch)}>Next <AiOutlineArrowRight /> </a>
          </div>


        </div>

      </div>
    </div>)
}
