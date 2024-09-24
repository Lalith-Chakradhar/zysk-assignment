import React from 'react';
import styles from './Footer.module.css';
import { Stack, Link } from '@mui/material';
import LogoIcon from '../../assets/logo-icon.png';

const footerDetails = {
    Product: [
      "Overview",
      "Features",
      "Solutions",
      "Tutorials",
      "Pricing",
      "Releases"
    ],
    Company: [
      "About us",
      "Careers",
      "Press",
      "News",
      "Media kit",
      "Contact"
    ],
    Resources: [
      "Blog",
      "Newsletter",
      "Events",
      "Help centre",
      "Tutorials",
      "Support"
    ],
    Usecases: [
      "Startups",
      "Enterprise",
      "Government",
      "SaaS centre",
      "Marketplaces",
      "Ecommerce"
    ],
    Social: [
      "Twitter",
      "LinkedIn",
      "Facebook",
      "GitHub",
      "AngelList",
      "Dribbble"
    ],
    Legal: [
      "Terms",
      "Privacy",
      "Cookies",
      "Licenses",
      "Settings",
      "Contact"
    ]
  };
  
function Footer() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.footerNotesContainer}>
                <Stack
                direction="row"
                justifyContent="space-between"
                spacing={4}
                sx={{ padding: '20px' }}
            >
                {Object.keys(footerDetails).map((category) => (
                <Stack key={category} spacing={1} sx={{ minWidth: '150px' }}>
                    <p className={styles.footerNoteCategory}>{category === 'Usecases' ? 'Use cases' : category}</p>
                    {footerDetails[category].map((link) => (
                    <Link
                        key={link}
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        underline="none"
                        color="inherit"
                    >
                        <p className={styles.footerNoteContext}>{link}</p>
                    </Link>
                    ))}
                </Stack>
                ))}
            </Stack>
        </div>
        <hr style={{ width: '80%', border: '1px solid #D0D5DD', marginBottom: '1.5rem' }}/>
        <div className={styles.copyrightContainer}>
            <div className={styles.logoContainer}>
                        <img src={LogoIcon} alt="logo-icon"/>
                        <h3>Untitled UI</h3>
            </div>
            <p>© 2077 Untitled UI. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer