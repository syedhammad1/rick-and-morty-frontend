import React from "react";
import styles from "./characterDetail.module.scss";
import Image from "next/image";
import Link from "next/link";
import CButton from "@/app/components/CButton/CButton";

const OtherCharCard = async ({}) => {
  return (
    <div>
      <div className={styles.otherCharDetailInfo}>
        <div>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt=""
            width={150}
            height={150}
            className={styles.characterCardDetailImage}
          />
        </div>
        <div>
          <h1>Japhets's Grandson</h1>
          <h2>Narnia Dimension</h2>
          <h2>Narnin - Male</h2>
        </div>
      </div>
    </div>
  );
};

export default OtherCharCard;
