import React from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Convert = (numberInput: string) => {
  let arr: string[] = [];
  let digit = numberInput.length - 1;

  [...numberInput].forEach((number, index) => {
    arr.push(number);
    if (index === digit - 3) {
      arr.push(".");
    }
    if (index === digit - 6) {
      arr.push(".");
    }
  });

  return arr.join("");
};

export default Convert;
