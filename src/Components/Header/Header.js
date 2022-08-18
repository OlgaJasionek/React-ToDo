import styles from "./Header.module.css";

import React from "react";

function Header(props) {
  return (
    <div className={styles.header}>
      <h1>TODO LIST</h1>
    </div>
  );
}

export default Header;
