"use client";

import React from "react";
import { useState, useEffect } from "react";

export default function RotateString() {
  const textArray = ["Advance AI Bots", "Finance Tracker", "Next-Gen Tech"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []); // Runs only once on mount

  return <div>{textArray[index]}</div>;
}
