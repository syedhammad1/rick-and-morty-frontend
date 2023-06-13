"use client";
import React from "react";
import styles from "./characterDetail.module.scss";
import Image from "next/image";
import OtherCharCard from "./otherCharacters";
import Header from "@/app/components/Header/header";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { useEffect, useState } from "react";
import { fetchLocations } from "@/redux/features/locationSlice";
import Loading from "../../loading";
import { fetchCharDetail } from "@/redux/features/charDetailslice";
const Page = async (context: any) => {
  const id = context.params.id;
  const { charData, loading, error } = useSelector(
    (state: RootState) => state.characterDetail
  );
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharDetail({ charId: id }));
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styles.otherChars}>
        <div>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt=""
            width={500}
            height={500}
            className={styles.characterCardDetailImage}
          />
          <h1>{charData && charData.character && charData.character.name}</h1>
          <h1>
            {charData && charData.character && charData.character.status} -{" "}
            {charData && charData.character && charData.character.species}
          </h1>
        </div>

        <div className={styles.charCardContainer}>
          <div>
            <h1>Other characters</h1>
          </div>
          <div>
            <div className={styles.extraCharacters}>
              <OtherCharCard />
              <OtherCharCard />
              <OtherCharCard />
              <OtherCharCard />
              <OtherCharCard />
              <OtherCharCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
