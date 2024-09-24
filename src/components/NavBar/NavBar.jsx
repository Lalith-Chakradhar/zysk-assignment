import React from 'react';
import styles from './NavBar.module.css'; 
import downArrow from '../../assets/down-arrow.png';
import logoIcon from '../../assets/logo-icon.png';
import profileIcon from '../../assets/profile-image.png';

function NavBar() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.mainContainerWrapper}>
            <div className={styles.subContainer}>
                 <div className={styles.logoContainer}>
                    <img src={logoIcon} alt="logo-icon"/>
                    <h3>Untitled UI</h3>
                 </div>
                 <div className={styles.navOptionsContainer}>
                    <nav><button>Home</button></nav>
                    <nav>
                        <button className={styles.navOptionCustom}>
                            <span>Products</span>
                            <img src={downArrow} alt="down-arrow"/> 
                        </button>
                    </nav>
                    <nav>
                        <button className={styles.navOptionCustom}>
                            <span>Resources</span>
                            <img src={downArrow} alt="down-arrow"/> 
                        </button>
                    </nav>
                    <nav><button>Pricing</button></nav>
                 </div>
            </div>
            <div className={styles.profileImage}>
                <img src={profileIcon} alt="profile-icon"/>
            </div>
        </div>
    </div>
  )
}

export default NavBar