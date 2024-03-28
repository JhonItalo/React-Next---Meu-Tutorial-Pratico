"use client";
import { useEffect, useState } from "react";
import React from "react";

export default function UseClient() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData()
  }, []);
  return (
    <>
      <div>{data}</div>
    </>
  );
}
