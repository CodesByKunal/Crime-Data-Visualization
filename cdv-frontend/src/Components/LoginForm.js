"use client";
import Link from "next/link";
import Error from "../Components/Error.js";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const submitHandler = async (e) => {
    try {
      setDisabled(true);
      e.preventDefault();

      if (!username || !password) {
        setError(true);
        throw new Error("Username and Password must not be empty");
      }

      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: `${JSON.stringify({ username: username, password: password })}`,
      });

      if (!response.ok || response.status != 200) {
        setError(true);
        setDisabled(true);
        throw new Error("Username or Password Incorect");
      }

      if (response.status === 200 || response.ok) {
        const { userid } = await response.json();
        return router.push(`/user/${userid}`);
      }
    } catch (error) {
      setTimeout(() => {
        setError(false);
      }, 3000);

      console.error("Error in Login : ", error.message);
    }
  };

  return (
    <>
      <Error Errorstate={error} />
      <div className="h-svh flex flex-col items-center justify-center px-6 py-8 mx-auto sm:h-screen  dark:bg-gray-900 w-screen bg-gray-100">
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to your account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white focus:ring-green-600"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="dark:bg-gray-700 outline-none text-sm rounded-lg block w-full p-2.5 focus:ring-4 focus:ring-green-600 bg-gray-200"
                  placeholder="name@company.com"
                  required={true}
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setDisabled(false);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="dark:bg-gray-700 outline-none text-sm rounded-lg block w-full p-2.5 focus:ring-4 focus:ring-green-600 bg-gray-200"
                  required={true}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setDisabled(false);
                  }}
                />
              </div>
              <div>
                <Link
                  href="/login"
                  className="disabled text-sm font-medium  hover:underline "
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                action="#"
                className={`w-full text-white bg-green-600   focus:ring-4 focus:ring-green-900  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-green-700 ${
                  disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={disabled}
                onClick={submitHandler}
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/signup"
                  className="font-medium hover:underline dark:text-white text-gray-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
