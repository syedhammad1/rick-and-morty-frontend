"use client";
import { useEffect, useState } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  let [isBack, setIsBack] = useState(false);
  useEffect(() => {
    if (window.location.href.toString().split("/")[4]) {
      setIsBack(true);
    }
  }, []);
  return (
    <div className={styles.headerContainer}>
      <div
        className={styles.backBtn}
        onClick={() => {
          if (isBack) {
            return (window.location.href = `/`);
          }
          return router.back();
        }}
      >
        <Image src="/back.png" alt="back button" width={100} height={70} />
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/rickmortyimg.png"
          alt="rick and morty"
          width={230}
          height={130}
        />
      </div>
    </div>
  );
};

export default Header;
