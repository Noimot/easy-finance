import React, { useEffect, useState } from "react";
import { loanApi } from "../../redux/api/loanApi";
import ActiveLoan from "../activeLoan/ActiveLoan";
import { Navbar } from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Card from "../skeleton/Card";
import SkeletonGrid from "../skeleton/SkeletonGrid";
import * as styles from "./style.module.css";

const Home = () => {
  const [state, setState] = useState("loading");

  useEffect(() => {
    console.log(loanApi());
  }, []);

  const notLoading = () => {
    return setState("!loading");
  };

  return (
    <div className={styles.background}>
      <Navbar />
      <Sidebar />
      <div className={styles.loans}>
        <h1>Loans</h1>
      </div>
      <ActiveLoan />
      <div className={styles.grid}>
        {state && [1, 2, 3, 4].map((n) => <SkeletonGrid key={n} />)}
      </div>
      <div className={styles.loans} style={{ marginTop: "40px" }}>
        {notLoading && <Card />}
      </div>
    </div>
  );
};

export default Home;
