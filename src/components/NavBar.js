import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import { clearFilter } from '../Redux/CompaniesSlice/CompaniesSlice';
import styles from './NavBar.module.css';
import micIcon from '../Assets/micIcon.svg';
import configIcon from '../Assets/configIcon.svg';

const NavBar = () => {
  const location = useLocation();
  const home = location.pathname === '/home';
  const navCentralText = home ? 'Market View' : 'Company View';
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearFilter());
  };

  return (
    <>
      <div className={styles.navbar_position}>
        <nav className={styles.navbar}>
          <div>
            <span>
              <Link to="/home" onClick={handleClear}>&lt;</Link>
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
      </div>
    </>
  );
};

export default NavBar;
