"use client";

import { useEffect } from "react";
import { displayAsciiArt } from "./asciiArt";

export default function AsciiRunner() {
  useEffect(() => {
    try {
      displayAsciiArt();
    } catch (err) {
      // don't crash the app if console logging fails
      console.error("Failed to display ascii art", err);
    }
  }, []);

  return null;
}
