import React, { useEffect, useState } from "react";
import styles from "./characterCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import CButton from "@/app/components/CButton/CButton";
import { useRouter, usePathname } from "next/navigation";
const CharacterCard = async ({ name, image, status, species, id }: any) => {
  let statusColor = status ? status.toLowerCase() : "";
  return (
    <div>
      <Link href={`characters/${id}`}>
        <img
          src={image}
          alt=""
          width={300}
          height={300}
          className={styles.characterCardImage}
        />
        <h1>{name}</h1>
        <div className={styles.characterDetail}>
          <div
            className={`${styles.characterCircle} ${styles[statusColor]}`}
          ></div>
          <h2>
            {status} - {species}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;
