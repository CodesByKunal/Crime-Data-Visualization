"use server";
import { cookies } from "next/headers";

const userLogin = async (email, password) => {
  const useCookie = cookies();
  try {
    const userData = {
      username: email,
      password: password,
    };

    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: `${JSON.stringify(userData)}`,
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(`error message: ${error}, status:${response.status}`);
    }

    const { username, access_token } = await response.json();

    useCookie.set({
      name: "access_token",
      value: access_token,
      signed: true,
      secure: true,
      httpOnly: true,
      domain: "localhost",
    });
    return username;
  } catch (error) {
    return { error: error.message };
  }
};

export default userLogin;
