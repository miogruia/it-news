import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
