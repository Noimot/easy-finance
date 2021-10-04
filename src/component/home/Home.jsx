import React, { useEffect } from "react";
import { loanApi } from "../../redux/api/loanApi";
import ActiveLoan from "../activeLoan/ActiveLoan";
import { Navbar } from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import YouTube from "../Skelenton";
import * as styles from "./style.module.css";

const Home = () => {
  useEffect(() => {
    console.log(loanApi());
  }, []);

  return (
    <div className={styles.background}>
      <Navbar />
      <Sidebar />
      <div className={styles.loans}>
        <h1>Loans</h1>
      </div>
      <ActiveLoan />
      <div className={styles.loans}>
        <YouTube />
      </div>
    </div>
  );
};

export default Home;
