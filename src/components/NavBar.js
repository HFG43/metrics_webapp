import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import micIcon from '../Assets/micIcon.svg';
import configIcon from '../Assets/configIcon.svg';

const NavBar = () => (
  <>
    <nav className={styles.navbar}>
      <div>
        <span>
          <Link to="/home">&lt;</Link>
        </span>
        <span>2022</span>
      </div>
      <p />
      <div>
        <img className={styles.navbar_mic_icon} src={micIcon} alt="microphone icon" />
        <img className={styles.navbar_config_icon} src={configIcon} alt="configuration icon" />
      </div>
    </nav>
  </>
);
export default NavBar;
