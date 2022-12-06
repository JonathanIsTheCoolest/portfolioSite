import React, {useState, useEffect} from 'react';
import { ProviderContext } from '../../../App';
import ParallaxContainer from '../../ParallaxContainer/ParallaxContainer';
import ScrollingAnimations from '../../ScrollingAnimations/ScrollingAnimations';
import LoadInAnimation from '../../LoadInAnimation/LoadInAnimation';
import ContactSubmitModal from '../ContactSubmitModal/ContactSubmitModal';

import { COPY, CONTACT } from '../../../constants';

import { postEmail } from '../../../apiCalls/emailFunctions';
import { nameAndTitleValidation, emailValidation, messageValidation, requiredValidation } from '../../../validations/contactFormValidations';

import styles from './Contact.module.css';

import myPhoto from '../../../assets/myPictures/jonathanContact.png';

const INIT_STATE = {
  name: '',
  email: '',
  message: '',
}

const Contact = () => {
  const { colorObject, toggleOffNavBar, introAnimationShouldRun, setNavSelected } = ProviderContext();
  const { colorOne, colorTwo, colorThree, colorFour } = colorObject;
  const [ formContent, setFormContent ] = useState(INIT_STATE);
  const [ formContentErrors, setFormContentErrors ] = useState(INIT_STATE);
  const [ submissionModal, setSubmissionModal ] = useState(false);
  const [ submissionError, setSubmissionError ] = useState(false);
  const [ clipboardMessage, setClipboardMessage ] = useState(COPY);

  useEffect (() => {
    setNavSelected(CONTACT)
  }, [setNavSelected])

  const { name, email, message } = formContent;

  const errorColor = { color: colorFour };

  const inlineFloatingBoxStyles = {
    backgroundColor: 'transparent',
    borderColor: colorTwo,
    color: colorTwo,
  };
  
  const inlineFlexItemStyles = {
    backgroundColor: colorThree,
    borderColor: 'transparent',
    color: colorTwo,
  };

  const absoluteClasses = [
    styles.bottomLeftBoxOne, styles.bottomLeftBoxTwo, styles.topRightBoxOne, styles.topRightBoxTwo
  ];

  const makeBoxDiv = (key, classes) => {
    return <div key={key} style={inlineFloatingBoxStyles} className={classes}></div>
  };

  const onClickResetModal = () => {
    if (submissionModal) {
      setSubmissionError(false);
      setSubmissionModal(false);
      setFormContent(INIT_STATE);
      setClipboardMessage(COPY);
    }
  }

  const onClickContactContainer = ({ target }) => {
    toggleOffNavBar();
    if (!target.closest(".contactModal")) {
      onClickResetModal();
    }
  }

  const onChange = ({ target: { name, value } }) => {
    setFormContent((prevState) => ({ ...prevState, [name]: value }))
  }

  const onBlur = (errorFunction) => ({ target: { name, value } }) => {
    setFormContentErrors((prevState) => ({ ...prevState, [name]: errorFunction(name, value) }))
  }

  const onSubmit = (e) => {
    const errorArray = [];
    e.preventDefault();

    for (const key in formContent) {
      if (!formContent[key]) {
        errorArray.push(key)
        setFormContentErrors((prevState) => ({
          ...prevState,
          [key]: requiredValidation(key, formContent[key])   
        }))
      } else if (!!formContentErrors[key]) {
        errorArray.push(key)
      }
    }

    if (!errorArray.length) {
      postEmail(e, setSubmissionError, () => setSubmissionModal(true));
    }
  }

  const leftContentArray = [
    {name: 'name', type: 'text', value: name, onChange: onChange, onBlur: onBlur(nameAndTitleValidation), classes: `${styles.name} ${styles.nameAndEmail}`},
    {name: 'email', type: 'text', value: email, onChange: onChange, onBlur: onBlur(emailValidation), classes: `${styles.email} ${styles.nameAndEmail}`},
  ];

  const leftFlexContent = 
    leftContentArray.map((item, index) => (
      <div key={`${item.name}${index}`}>
        <label 
          htmlFor={item.name}
          className={item.classes}
        >
          <input 
            name={item.name}
            type={item.type} 
            value={item.value}
            onChange={item.onChange}
            onBlur={item.onBlur}
            style={{ borderBottom: `1px solid ${colorTwo}`, color: colorTwo }}
            placeholder={item.name}
          />
        </label>
        <div style={errorColor} className={styles.errorMessage}>{formContentErrors[item.name]}</div>
      </div>
    ));

  const rightFlexContent = 
    <label className={styles.rightFlexContent} htmlFor="message">
      <textarea 
        onChange={onChange} 
        onBlur={onBlur(messageValidation)}
        name="message" 
        id="message"
        value={message}
        placeholder="type your message here"
      >
      </textarea>
      <div style={errorColor} className={styles.errorMessage}>{formContentErrors.message}</div>
    </label>;

  const form = 
    <form 
      autoComplete="off" 
      className={`flexItems ${styles.formFlexContainer}`} 
      style={inlineFlexItemStyles} 
      onSubmit={onSubmit}
    >
      <div className={styles.outerFlexOne}>
        <div className={styles.innerFlexOne}>{leftFlexContent}</div>
        <div className={styles.innerFlexTwo}>{rightFlexContent}</div>
      </div>
      <div className={styles.outerFlexTwo}>
        <input style={{ backgroundColor: colorFour, color: colorTwo }} type="submit" value="SEND"/>
      </div>
      {
        absoluteClasses.map((item, index) => (
          makeBoxDiv((`${item.replace('styles.', '')}${index}`), item)
        ))
      }
    </form>;
  return (
    <div 
      onClick={onClickContactContainer}
      className={`container ${styles.contactContainer}`} 
      style={{ backgroundColor: colorOne }} 
    >
      {introAnimationShouldRun ? <LoadInAnimation/> : null}
      <ParallaxContainer image={myPhoto}/>
      <section className={`lowerContentContainer ${styles.contactContainer}`}>
        <ScrollingAnimations
          element={form}
          classes={styles.scrollContainerWidth}
        />
      </section>
      <div className="contactModal">
        <ContactSubmitModal 
          toggleOff={onClickResetModal} 
          submissionError={submissionError}
          submissionModal={submissionModal} 
          setClipboardMessage={setClipboardMessage}
          clipboardMessage={clipboardMessage}
          name={name} 
          message={message}
        />
      </div>
    </div>
  )
}

export default Contact;