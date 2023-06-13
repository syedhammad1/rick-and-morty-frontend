"use client";
import Link from "next/link";
import styles from "./locations.module.scss";
import { useRouter } from "next/navigation";
export default function LocationItem({
  name,
  type,
  dimension,
  residentCount,
}: any) {
  return (
    <div className={styles.locationItemContainer}>
      <Link href={{ pathname: `/characters`, query: { locationId: name } }}>
        <h1>{name} </h1>
        <div className={styles.flextest}>
          <h2>Type</h2>
          <h2>: {type}</h2>
        </div>
        <div className={styles.flextest}>
          <h2>Dimension</h2>
          <h2>: {dimension}</h2>
        </div>
        <div className={styles.flextest}>
          <h2>Resident Count</h2>
          <h2>: {residentCount}</h2>
        </div>
      </Link>
    </div>
  );
}
