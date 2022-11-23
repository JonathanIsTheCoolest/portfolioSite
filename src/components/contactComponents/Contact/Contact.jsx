import React, {useState} from 'react';
import { ProviderContext } from '../../../App';
import FlashLight from '../../FlashLight/FlashLight';
import NavBar from '../../navBarComponents/NavBar/NavBar';
import ParallaxContainer from '../../ParallaxContainer/ParallaxContainer';
import ScrollingAnimations from '../../ScrollingAnimations/ScrollingAnimations';
import LoadInAnimation from '../../LoadInAnimation/LoadInAnimation';
import ContactSubmitModal from '../ContactSubmitModal/ContactSubmitModal';

import { postEmail } from '../../../functions/emailFunctions';

import styles from './Contact.module.css';

import myPhoto from '../../../assets/myPictures/jonathanContact.png';

const INIT_STATE = {
  name: '',
  email: '',
  message: '',
}
const Contact = ({ isSelected }) => {
  const { colorObject, toggleOffNavBar, introAnimationShouldRun } = ProviderContext();
  const { colorOne, colorTwo, colorThree, colorFour } = colorObject;
  const [ formContent, setFormContent ] = useState(INIT_STATE);
  const [ submissionModal, setSubmissionModal ] = useState(false);
  const { name, email, message } = formContent;

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

  const onClickContactContainer = () => {
    toggleOffNavBar();
    if (submissionModal) {
      setSubmissionModal(false);
      setFormContent(INIT_STATE);
    }
  }

  const onChange = ({ target: { name, value } }) => {
    setFormContent((prevState) => ({ ...prevState, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    postEmail(e, () => setFormContent(INIT_STATE), () => setSubmissionModal(true));
  }

  const leftContentArray = [
    {name: 'name', type: 'text', value: name, func: onChange, classes: `${styles.name} ${styles.nameAndEmail}`},
    {name: 'email', type: 'text', value: email, func: onChange, classes: `${styles.email} ${styles.nameAndEmail}`},
  ];

  const leftFlexContent = 
    leftContentArray.map((item, index) => (
      <label 
        htmlFor={item.name}
        key={`${item.name}${index}`}
        className={item.classes}
      >
        <input 
          name={item.name}
          type={item.type} 
          value={item.value}
          onChange={item.func}
          style={{ borderBottom: `1px solid ${colorTwo}`, color: colorTwo }}
          placeholder={item.name}
        />
      </label>
    ));

  const rightFlexContent = 
    <label className={styles.rightFlexContent} htmlFor="message">
      <textarea 
        onChange={onChange} 
        name="message" 
        id="message"
        value={message}
        placeholder="type your message here"
      >
      </textarea>
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
      className={`container ${styles.contactContainer}`} 
      style={{ backgroundColor: colorOne }} 
      onClick={onClickContactContainer}
    >
      {introAnimationShouldRun ? <LoadInAnimation/> : null}
      <FlashLight/>
      <NavBar isSelected={isSelected}/>
      <ParallaxContainer image={myPhoto}/>
      <section className={`lowerContentContainer ${styles.contactContainer}`}>
        <ScrollingAnimations
          element={form}
          classes={styles.scrollContainerWidth}
        />
      </section>
      <ContactSubmitModal 
        toggleOff={() => {setSubmissionModal(false); setFormContent(INIT_STATE);}} 
        submissionModal={submissionModal} 
        name={name} 
        message={message}
      />
    </div>
  )
}

export default Contact;