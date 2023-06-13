"use client";
import Header from "./components/Header/header";
import styles from "./locations.module.scss";
import Image from "next/image";
import LocationItem from "./locationItem";
import Pagination from "./components/Pagintation/pagination";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import { fetchLocations } from "@/redux/features/locationSlice";
import Loading from "./loading";

export default function Location() {
  const [pageNum, setPageNum] = useState(1);

  const { locations, loading, error } = useSelector(
    (state: RootState) => state.locations
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocations({ pageNum }));
  }, [pageNum]);

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.locationContainer}>
            {locations &&
              locations.data &&
              locations.data.map((location: any) => (
                <LocationItem
                  name={location.name}
                  type={location.type}
                  dimension={location.dimension}
                  residentCount={location.residents}
                />
              ))}
          </div>
          <Pagination
            totalPages={locations?.info?.pages}
            setPageNum={setPageNum}
            pageNum={pageNum}
          />
        </>
      )}
    </div>
  );
}
