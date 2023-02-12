import React from 'react';

//Styles
import styles from "./Navbar.module.css"

const Navbar = ({LogoutHadler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                Botogram
            </div>
            <div className={styles.logout} onClick={LogoutHadler}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;