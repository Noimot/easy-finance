import React from "react";
import * as styles from "./style.module.css";

const ActiveLoan = () => {
  return (
    <section className={styles.background}>
      <h1>My Active Loans</h1>
      <div className={styles.flex}>
        <p>Reference Number</p>
        <p>Total Amount(#)</p>
        <p>Data Applied</p>
        <p>Data Disbursed</p>
        <p>Repayment Dates</p>
        <p>Actions</p>
      </div>
      <p>No results found</p>
    </section>
  );
};

export default ActiveLoan;
