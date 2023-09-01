import React from 'react';
import { ProviderContext } from '../../App';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

import styles from './ExternalLinks.module.css';

const ExternalLinks = () => {
  const { colorObject } = ProviderContext();
  const { colorTwo } = colorObject;

  const iconArray = [
    {name: 'gitHub', ref: 'https://github.com/JonathanIsTheCoolest', icon: faGithubAlt, color: colorTwo},
    {name: 'linkedIn', ref: 'https://www.linkedin.com/in/jonathan-lascano-rusu-214ba0177/', icon: faLinkedin, color: colorTwo},
    {name: 'medium', ref: 'https://medium.com/@jonathanlascanobenham', icon: faMedium, color: colorTwo},
  ]
  return (
    <>
      {
        iconArray.map((item, index) => (
          <a key={`${item}${index}`} href={item.ref}>
            <FontAwesomeIcon className={styles.externalLinks} icon={item.icon} style={{ color: item.color }}/>      
          </a>
        ))
      }
    </>
  )
}

export default ExternalLinks;