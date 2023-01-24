import React, { useContext } from 'react'
import styles from '@/styles/HireUs.module.css'
import Image from 'next/image'
import OptionCard from 'components/Card/OptionCard'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { NavigationContext } from '@/pages/hire-us'
import { useNextBtn } from 'hooks/useHireUsNavigation'

export default function HireUsStepOne() {
  const {navigationState,navigationDispatch} = useContext(NavigationContext)

  return (
    <div className={styles.hireUsStep}>
      <div className={styles.hireUsLeft}>
        <div className={styles.hireUsTitle}>
          <h2>Hire Us</h2>
          <span>Step One</span>
        </div>

        <div className={styles.hireUsImage}>
          <Image src='/pana-one.png' height={320} width={320} priority alt='Pane1' />
        </div>
      </div>
      <div className={styles.hireUsRight}>
        <p className={styles.hireUsRightTitle}>We boast of highly skilled and experienced tech personnel. We handle every projects with experience</p>
        <div className={styles.progress}>
          <span className={styles.progressCaption}>{navigationState.formProgress}% Completed</span>
          <progress className={styles.hireUsProgressBar} value={0} max={100} />
        </div>

        <div className={styles.hireUsForm}>
          <div className={styles.hireUsFormField}>
            <div className={styles.hireUsFormFieldTitle}>
              <span className={styles.dot}></span>
              <span>What can <b>Hack City Tech</b> do for you?</span>
            </div>

            <div className={styles.optionFieldColTwo}>
              <OptionCard />
              <OptionCard />
              <OptionCard />
              <OptionCard />
              <OptionCard />


            </div>
          </div>
          <div className={styles.hireUsFormField}>
            <div className={styles.hireUsFormFieldTitle}>
              <span className={styles.dot}></span>
              <span>What can <b>Hack City Tech</b> do for you?</span>
            </div>

            <div className={styles.optionFieldCol}>
              <textarea />

            </div>

          </div>
          <div className={styles.hireUsNavBtn}>
            <span></span>
            <a href='#' className='bannerBtn darkBtn' onClick={()=>useNextBtn(navigationDispatch)}>Next <AiOutlineArrowRight/> </a>
          </div>


        </div>

      </div>
    </div>
  )
}
