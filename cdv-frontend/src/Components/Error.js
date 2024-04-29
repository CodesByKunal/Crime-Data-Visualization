"use client";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Error({ Errorstate }) {
  useEffect(() => {
    if (Errorstate) {
      toast.dismiss();
      notify();
    }
  }, [Errorstate]);

  const notify = () =>
    toast.error("Incorrect username or password", {
      position: "top-center",
      autoClose: true,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });

  return (
    <div>
      <ToastContainer limit={1} newestOnTop={false} />
    </div>
  );
}
