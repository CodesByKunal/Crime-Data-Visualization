"use client";
import Prindata from "@/utils/serverAction";
export default function Button() {
  const btnHandler = () => {
    console.log("Button Clicked");
  };
  return (
    <>
      <button onClick={btnHandler}>Click ME</button>
      <Prindata/>
    </>
  );
}
