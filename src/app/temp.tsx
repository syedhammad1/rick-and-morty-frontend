"use client";

import { useGetUsersQuery } from "@/redux/services/userApi";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/features/userSlice";
import { RootState, AppDispatch } from "../redux/store";
import { useEffect } from "react";

export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);

  const { users, loading, error } = useSelector(
    (state: RootState) => state.usere
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          increment by number
        </button>

        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
      <div>
        <h1>Users</h1>
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
