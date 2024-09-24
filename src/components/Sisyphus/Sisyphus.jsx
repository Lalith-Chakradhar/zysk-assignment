import React from 'react';
import styles from './Sisyphus.module.css';
import SisyphusLogo from '../../assets/SisyphusLogo.png';
import Avatar from '../../assets/Avatar.png';
import { Stack } from '@mui/material';

function Sisyphus() {
  return (
    <div className={styles.mainContainer}>
      <Stack gap={5} direction="column">
          <div><img src={SisyphusLogo} alt="sisyphus logo"/></div>
          <h2>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h2>
          <div>
            <div><img src={Avatar} alt="product manager profile image"/></div>
            <p className={styles.managerTitle}>Candice Wu</p>
            <p style={{marginTop:"0.5rem", color:"#475467"}}>Product Manager, Sisyphus</p>
          </div>
      </Stack>
    </div>
  );
}

export default Sisyphus;