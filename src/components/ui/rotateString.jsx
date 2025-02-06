"use client";

import React from "react";
import { useState, useEffect } from "react";

function rotate(text, setText) {
  let interval = setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    setText(text); // Update state
  }, 1000);

  // setTimeout(() => clearInterval(interval));

  // return () => clearInterval(interval), 3000; // Cleanup interval on unmount
}

export default function RotateString() {
  const [rotatedText, setRotatedText] = useState("Advanced AI Bots");

  useEffect(() => {
    const cleanup = rotate(rotatedText, setRotatedText);
    return cleanup; // Cleanup when component unmounts
  }, []); // Run only once on mount
  return <div>{rotatedText}</div>;
}
