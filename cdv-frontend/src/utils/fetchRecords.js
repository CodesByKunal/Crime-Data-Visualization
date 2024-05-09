"use server";
import { cookies } from "next/headers";

const fetchRecord = async () => {
  try {
    const useCookie = cookies();
    const access_token = useCookie.get("access_token");

    const response = await fetch("http://localhost:8000/records", {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: `access_token=${access_token?.value}`,
      },
    });

    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(`err_msg :${error},status:${response.status}`);
    }

    const { records } = await response.json();

    return records;
  } catch (error) {
    return { error: error.message };
  }
};

export default fetchRecord;
