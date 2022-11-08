import { ProviderContext} from '../../App';
import { buildTextPropsObject as buildProps } from '../../functions/generalFunctions';
import { HOME_ADDRESS, ABOUT_ADDRESS, HOME, ABOUT, LINK } from '../../constants';

import StyledText from '../StyledText/StyledText';

import styles from '../NavBar/NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = ({ isSelected }) => {
  const {colorObject} = ProviderContext();
  const {colorTwo} = colorObject;

  const navBarObject = [
    { type: LINK, text: HOME, className: undefined, route: HOME_ADDRESS },
    { type: LINK, text: ABOUT, className: styles.about, route: ABOUT_ADDRESS }
  ]

  return (
    <div className={styles.navBar} style={{backgroundColor: 'transparent'}}>
      <div className={styles.logoContainer}>
        <Link className={styles.logo} style={{ color: colorTwo }} to="/">
          JLR
        </Link>
      </div>
      <div className={styles.linkContainer}>
        {
          navBarObject.map((item, index) => (
            <div
              key={`${item.text}${index}`}
            >
              <StyledText 
                isSelected={isSelected}
                props={buildProps(item.type, item.text, item.className, item.route)}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NavBar;