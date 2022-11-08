import React from 'react';
import styles from '../ParallaxContainer/ParallaxContainer.module.css';

const ParallaxContainer = ({ image, content }) => {
  return (
    <div className={styles.parallaxContainer} style={{ backgroundImage: `url(${image})` }}>
      <div className="topContentContainer">
        {content}
      </div>
    </div>
  )
}

export default ParallaxContainer;

















// import React from 'react';
// import styles from '../ParallaxContainer/ParallaxContainer.module.css';

// const ParallaxContainer = ({ image, content }) => {
//   return (
//     <div className={styles.parallaxContainer} style={{ backgroundImage: `url(${image})` }}>
//       <div className="topContentContainer">
//         {content}
//       </div>
//     </div>
//   )
// }

// export default ParallaxContainer;