"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar Parent Box */}
      <div
        className={`h-dvh sm:h-screen sticky top-0 left-0 bg-yt ${
          open ? "sm:min-w-52 w-12" : "sm:min-w-20 w-12"
        } transform duration-300 flex flex-col justify-center items-center gap-1 overflow-hidden`}
        onClick={() => {
          setOpen(true);
        }}
      >
        {/* Section-0*/}
        <div className="h-40  w-full flex justify-center items-start p-2">
          {/* App Name */}
          <div className="p-2 sm:bg-violet-800 rounded-md w-full flex flex-row justify-center items-center sm:mt-2">
            <div className=" sm:text-white text-violet-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-headset-vr"
                viewBox="0 0 16 16"
              >
                <path d="M8 1.248c1.857 0 3.526.641 4.65 1.794a5 5 0 0 1 2.518 1.09C13.907 1.482 11.295 0 8 0 4.75 0 2.12 1.48.844 4.122a5 5 0 0 1 2.289-1.047C4.236 1.872 5.974 1.248 8 1.248" />
                <path d="M12 12a4 4 0 0 1-2.786-1.13l-.002-.002a1.6 1.6 0 0 0-.276-.167A2.2 2.2 0 0 0 8 10.5c-.414 0-.729.103-.935.201a1.6 1.6 0 0 0-.277.167l-.002.002A4 4 0 1 1 4 4h8a4 4 0 0 1 0 8" />
              </svg>
            </div>
            <div
              className={`w-full text-l ml-6  ${
                open ? "sm:block hidden" : "hidden"
              } whitespace-nowrap overflow-hidden`}
            >
              CitiLens
            </div>
          </div>
          {/* App Name Ends */}
        </div>

        {/* Section-1 */}
        <div className="h-full border-b border-gray-700 w-full p-2 space-y-5 flex justify-center flex-col">
          {/* Profile */}
          <Link
            href={"/dashboard/profile"}
            className="p-2  hover:bg-yt-h rounded-md w-full flex flex-row justify-center items-center"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </div>
            <div
              className={`w-full text-l ml-6  ${
                open ? "sm:block hidden" : "hidden"
              } whitespace-nowrap overflow-hidden`}
            >
              Profile
            </div>
          </Link>

          {/* Indox */}
          <Link
            href={"./indox"}
            className="p-2  hover:bg-yt-h rounded-md w-full flex flex-row justify-center items-center"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-chat-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              </svg>
            </div>
            <div
              className={`w-full text-l ml-6  ${
                open ? "sm:block hidden" : "hidden"
              } whitespace-nowrap overflow-hidden`}
            >
              Indox
            </div>
          </Link>

          {/* Settings */}
          <Link
            href={"./settings"}
            className="p-2  hover:bg-yt-h rounded-md w-full flex flex-row justify-center items-center"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-gear-fill"
                viewBox="0 0 16 16"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
            </div>
            <div
              className={`w-full text-l ml-6  ${
                open ? "sm:block hidden" : "hidden"
              } whitespace-nowrap overflow-hidden`}
            >
              Setting
            </div>
          </Link>
          {/* Setting-ends */}
        </div>

        {/* Section-2 */}
        <div className="h-full  w-full flex flex-col justify-center items-center space-y-5 p-2">
          {/* Analytics */}
          <Link
            href={"/dashboard/analytics"}
            className="p-2  hover:bg-yt-h rounded-md w-full flex flex-row justify-center items-center"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bar-chart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
              </svg>
            </div>
            <div
              className={`w-full text-l ml-6  ${
                open ? "sm:block hidden" : "hidden"
              } whitespace-nowrap overflow-hidden`}
            >
              Analytics
            </div>
          </Link>
          {/* Heatmap */}
          <Link
            href={"./heatmap"}
            className="p-2  hover:bg-yt-h rounded-md w-full flex flex-row justify-center items-center"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
            </div>
            <div
              className={`w-full text-l ml-6  ${
                open ? "sm:block hidden" : "hidden"
              } whitespace-nowrap overflow-hidden`}
            >
              Heatmaps
            </div>
          </Link>
          {/* AI Prediction */}
          <Link
            href={"./ai-models"}
            className="p-2  hover:bg-yt-h rounded-md w-full flex flex-row justify-center items-center"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-robot"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
              </svg>
            </div>
            <div
              className={`w-full text-l ml-6  ${
                open ? "sm:block hidden" : "hidden"
              }  whitespace-nowrap overflow-hidden`}
            >
              AI Models
            </div>
          </Link>
          {/* AI Prediction ends */}
        </div>
        {/* Section-3 */}
        <div className="h-full  w-full flex justify-end items-end p-2 flex-col gap-3">
          {/* Close Button */}
          <div
            className={`p-2 text-red-600 hover:bg-red-900 hover:text-white rounded-md w-full  flex-row justify-center items-center ${
              open ? "sm:flex hidden" : "hidden"
            }`}
            onClick={(event) => {
              setOpen(false);
              event.stopPropagation();
            }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
              </svg>
            </div>
            <div className="w-full text-l ml-4">Close</div>
          </div>
          {/* Logout */}
          <div className="p-2 sm:bg-red-700 sm:hover:bg-red-900 rounded-md w-full flex flex-row justify-center items-center mb-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                />
              </svg>
            </div>
            <div
              className={`w-full text-l ml-6  ${
                open ? "sm:flex hidden" : "hidden"
              }`}
            >
              Logout
            </div>
          </div>
          {/* Logout ends */}
        </div>
        {/* Section-3 ends */}
      </div>
    </>
  );
}
