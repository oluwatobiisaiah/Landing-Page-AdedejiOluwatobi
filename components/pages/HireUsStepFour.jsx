import React, { useContext } from 'react'
import styles from '@/styles/HireUs.module.css'
import Image from 'next/image'
import OptionCard from 'components/Card/OptionCard'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { NavigationContext } from '@/pages/hire-us'
import { useNextBtn,usePreviousBtn } from 'hooks/useHireUsNavigation'


export default function HireUsStepFour() {
  const {navigationState,navigationDispatch} = useContext(NavigationContext)
  return (
    <div className={styles.hireUsStep}>
      <div className={styles.hireUsLeft}>
        <div className={styles.hireUsTitle}>
          <h2>Hire Us</h2>
          <span>Step Four</span>
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

        <div className={styles.hireUsForm}>
        <div className={styles.hireUsFormField}>
            <div className={styles.hireUsFormFieldTitle}>
              <span className={styles.dot}></span>
              <span>What is the price estimate for the project ?</span>
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
