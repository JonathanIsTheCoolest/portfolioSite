import React from "react";
import { ProviderContext } from '../../App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from '../ContactSubmitModal/ContactSubmitModal.module.css';

const ContactSubmitModal = ({ toggleOff, submissionModal, name, message }) => {
  const { colorObject } = ProviderContext();
  const { colorTwo, colorThree, colorFour } = colorObject;
  return (
    <div
      onClick={toggleOff} 
      className={ submissionModal ? styles.modalContainer : styles.modalContainerHidden}
      style={{ backgroundColor: colorFour, borderColor: colorThree }}
    >
      <div style={{ color: colorTwo }} className={styles.messageContainer}>
        Hi <strong>{name}</strong>,
        <br/><br/>
        Your message has been received!
        <br/><br/>
        <div style={{ borderColor: colorThree }} className={styles.clientMessageContainer}>
          <FontAwesomeIcon icon={faXmark} className={styles.XMark} style={{ color: colorTwo }}/>
          <div style={{ backgroundColor: `${colorThree}2F`, color: colorThree }} className={styles.clientMessage}>
            {message}
          </div>
        </div>
        <br/>
        I'll get back to you as soon as possible.
        <br/><br/>
        Sincerely,
        <br/>
        Jonathan Lascano-Rusu
      </div>
    </div>
  )
}

export default ContactSubmitModal;