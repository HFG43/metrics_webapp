import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';
import micIcon from '../Assets/micIcon.svg';
import configIcon from '../Assets/configIcon.svg';

const NavBar = () => {
  const location = useLocation();
  const home = location.pathname === '/home';
  const navCentralText = home ? 'Market View' : 'TBD';

  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <span>
            <Link to="/home">&lt;</Link>
          </span>
          <span>2022</span>
        </div>
        <p>{navCentralText}</p>
        <div className={styles.mic_config_container}>
          <img
            className={styles.navbar_mic_icon}
            src={micIcon}
            alt="microphone icon"
          />
          <img
            className={styles.navbar_config_icon}
            src={configIcon}
            alt="configuration icon"
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
