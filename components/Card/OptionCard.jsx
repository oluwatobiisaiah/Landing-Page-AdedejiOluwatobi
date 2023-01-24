import React from 'react'
import styles from '../../src/styles/HireUs.module.css'


export default function OptionCard() {
  return (
    <div className={styles.optionCard}>
      <span className={`${styles.dot} ${styles.dotLight}`}></span>
      <span>Healthcare and Pharma</span>
    </div>
  )
}
