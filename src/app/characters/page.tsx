"use client";
import React from "react";
import styles from "./characters.module.scss";
import Image from "next/image";
import Link from "next/link";
import CButton from "@/app/components/CButton/CButton";
import Header from "@/app/components/Header/header";
import Pagination from "@/app/components/Pagintation/pagination";
import CharacterCard from "./characterCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { useEffect, useState } from "react";
import { fetchLocations } from "@/redux/features/locationSlice";
import Loading from "../loading";
import { fetchCharacters } from "@/redux/features/charactersSlice";
const Page = async (context: any) => {
  const [pageNum, setPageNum] = useState(1);
  const { characters, loading, error } = useSelector(
    (state: RootState) => state.characters
  );
  let [tempChar, setTempChar] = useState([]);
  const dispatch: AppDispatch = useDispatch();

  const [statusChar, setStatusChar] = useState("");

  const id = context.searchParams.locationId;

  useEffect(() => {
    dispatch(fetchCharacters({ locationId: id }));
  }, []);

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{ marginLeft: "2%", marginRight: "2%" }}>
        <div className={styles.filterC}>
          <h2>Filter by status:</h2>
          <div className={styles.filterContainer}>
            <CButton buttonType={"DEAD"} setStatus={setStatusChar} />
            <CButton buttonType={"ALIVE"} setStatus={setStatusChar} />
            <CButton buttonType={"UNKNOWN"} setStatus={setStatusChar} />
          </div>
        </div>

        <div className={styles.characterCard}>
          {loading ? (
            <Loading />
          ) : (
            <>
              {characters &&
                characters.data &&
                characters.data.map((char: any, index: any) => {
                  return (
                    <>
                      <CharacterCard
                        name={char.name}
                        image={char.image}
                        status={char.status}
                        species={char.species}
                        id={char.id}
                        characters={characters}
                      />
                    </>
                  );
                })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
