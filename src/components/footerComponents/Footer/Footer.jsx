import React from 'react';
import { ProviderContext } from '../../../App';
import ExternalLinks from '../../ExternalLinks/ExternalLinks';

import { FIRST_NAME, LAST_NAME } from '../../../constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import styles from './Footer.module.css';

const Footer = () => {
  const { colorObject } = ProviderContext();
  const { colorTwo, colorThree } = colorObject
  return (
    <footer style={{ backgroundColor: colorThree }} className={ `${styles.footerContainer}`}>
      <div className={styles.linkContainer}>
        <ExternalLinks/>
      </div>
      <div className={styles.copyRightContainer}>
        <FontAwesomeIcon className={styles.copyRightIcon} icon={faCopyright} style={{ color: colorTwo }}/> <span style={{ color: colorTwo }} className={styles.copyRightText}>2022 {FIRST_NAME} {LAST_NAME}</span>
      </div>
    </footer>
  )
}

export default Footer;