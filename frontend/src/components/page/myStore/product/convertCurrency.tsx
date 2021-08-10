import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Convert: React.FC<{ number: any }> = ({ number }) => {
  const [arr, setArr] = useState<string[]>([]);
  let str = (parseInt(number) / 1000).toString().length - 1;
  let srt2 = (parseInt(number) / 1000000).toString().length - 1;
  useEffect(() => {
    for (let index in number) {
      const character = number[parseInt(index)];
      setArr((prev) => [...prev, character]);
      if (parseInt(index) == str) {
        setArr((prev) => [...prev, "."]);
      }
      if (parseInt(index) == srt2) {
        setArr((prev) => [...prev, "."]);
      }
    }
  }, []);

  return <small>Rp.{arr.join("")}</small>;
};

export default Convert;
