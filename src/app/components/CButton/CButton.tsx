"use client";
import styles from "./CButton.module.scss";
export default function CButton({ buttonType, setStatus }) {
  let buttonBackgroundStyle = "";
  let buttonText = "";

  if (buttonType === "DEAD") {
    buttonBackgroundStyle = "red";
    buttonText = "Dead";
  }
  if (buttonType === "ALIVE") {
    buttonBackgroundStyle = "green";
    buttonText = "Alive";
  }
  if (buttonType === "UNKNOWN") {
    buttonBackgroundStyle = "grey";
    buttonText = "Unknown";
  }
  return (
    <button
      className={`${styles.btn} ${styles[buttonBackgroundStyle]}`}
      onClick={() => setStatus(buttonText)}
    >
      <div className={styles.circle}></div>
      {buttonText}
    </button>
  );
}
