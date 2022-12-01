import React from "react";
import { ProviderContext } from '../../../App';

import { COPY, COPIED, FAILED_TO_COPY } from "../../../constants";

import { makeNameIntoTitle } from "../../../functions/generalFunctions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from '../ContactSubmitModal/ContactSubmitModal.module.css';

const EMAIL = 'jonathanlascano2393@gmail.com';

const ContactSubmitModal = ({ toggleOff, submissionError, submissionModal, name, message, clipboardMessage, setClipboardMessage }) => {
  const { colorObject } = ProviderContext();
  const { colorTwo, colorThree, colorFour } = colorObject;

  const formattedMessage = message.split('\n').map((item, index) => (
    <span key={`${item}${index}`}>
      {item}
      <br/>
    </span>
  ))

  const copyText = (itemToCopy, setMessage) => {
    const setTimeoutToCopy = () => 
      setTimeout(() => { setMessage(COPY); }, 1000)
    ;
    const setClipMessage = (message) => {
      if (!!setMessage) {
        setMessage(message);
        setTimeoutToCopy();
      }
    }
    navigator.clipboard
    .writeText(itemToCopy)
    .then(() => {
      console.log('Async: Copying to clipboard was successful!');
      setClipMessage(COPIED);
    })
    .catch((error) => {
      console.error(`Async: Could not copy text: ${error}`)
      setClipMessage(FAILED_TO_COPY);
    })
  }
  return (
    <div
      className={ submissionModal ? styles.modalContainer : styles.modalContainerHidden}
      style={{ backgroundColor: colorFour, borderColor: colorThree }}
    >
      <div style={{ color: colorTwo }} className={styles.messageContainer}>
        <FontAwesomeIcon onClick={toggleOff} icon={faXmark} className={styles.XMark} style={{ color: colorTwo }}/>
        Hi <strong>{!!name ? makeNameIntoTitle(name) : null}</strong>,
        <br/><br/>
        {
          submissionError ?
          `It seems there was a problem submitting your message` :
          `Your message has been received!`
        }
        <br/><br/>
        <div style={{ borderColor: colorThree }} className={styles.clientMessageContainer}>
          <div style={{ backgroundColor: `${colorThree}2F`, color: colorThree }} className={styles.clientMessage}>
            {formattedMessage}
          </div>
          {
            submissionError ?
            <input 
              style={{ borderColor: colorThree, backgroundColor: colorFour, color: colorTwo }} 
              className={styles.copyTextButton} 
              onClick={() => copyText(message, setClipboardMessage)} 
              type="button" 
              value={ clipboardMessage }
            /> 
            :
            null
          }
        </div>
        {
          submissionError ?
          <>
            <div className={styles.smallText}>Please copy your message! It will be lost upon exiting the modal.</div>
            <br />
            <div>
              You can contact me via email at:
              <br />
              <strong 
                onClick={() => copyText(EMAIL)}
                className={styles.email}
              >
                {EMAIL}
              </strong>
            </div> 
          </>
          :
          null
        }
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