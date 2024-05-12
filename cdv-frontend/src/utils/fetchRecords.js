"use server";
import { cookies } from "next/headers";

const fetchRecord = async () => {
  try {
    const useCookie = cookies();
    const access_token = useCookie.get("access_token");

    const responseData = await fetch("http://localhost:8000/records", {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: `access_token=${access_token?.value}`,
      },
    });

    if (!responseData.ok) {
      const { error } = await responseData.json();

      throw new Error(`err_msg :${error},status:${responseData.status}`);
    }

    const { recordsData } = await responseData.json();

    return recordsData;
  } catch (error) {
    return { error: error.message };
  }
};

export default fetchRecord;
