import { cookies } from "next/headers";

const fetchRecord = async () => {
  try {
    const cookieStore = cookies();
    const access_token = cookieStore.get("access_token");

    const res = await fetch("http://localhost:8000/records", {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: `access_token=${access_token.value}`,
      },
    });
    if (!res.ok) {
      throw new Error("Unable to fetch records");
    }
    const records = await res.text();
    return records;
  } catch (error) {
    console.error("From Catch Block :", error.message);
    throw error;
  }
};

export default fetchRecord;
