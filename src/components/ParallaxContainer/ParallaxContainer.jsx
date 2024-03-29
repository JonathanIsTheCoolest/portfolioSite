import React from 'react';
import Image from '../Image/Image'
import styles from '../ParallaxContainer/ParallaxContainer.module.css';
import { isMobile } from '../../functions/generalFunctions';

const ParallaxContainer = ({ image, content }) => {
  return (
    <div className={!isMobile ? styles.parallaxContainer : styles.removeParallax} style={ !isMobile ? { backgroundImage: `url(${image})` } : null}>
      <div style={{ position: 'absolute', height: '100vh' }}>
        {
          isMobile ?
          <Image
            src={image}
            alt="Jonathan Lascano"
          /> :
          null
        }
      </div>
      <div className="topContentContainer">
        {content}
      </div>
    </div>
  )
}

export default ParallaxContainer;





















// import React from 'react';
// import styles from '../ParallaxContainer/ParallaxContainer.module.css';
// import { isMobile } from '../../functions/generalFunctions';

// const ParallaxContainer = ({ image, content }) => {
//   return (
//     <div className={!isMobile ? styles.parallaxContainer : styles.removeParallax} style={{ backgroundImage: `url(${image})` }}>
//       <div className="topContentContainer">
//         {content}
//       </div>
//     </div>
//   )
// }

// export default ParallaxContainer;