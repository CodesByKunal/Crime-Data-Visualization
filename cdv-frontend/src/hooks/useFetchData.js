import { useState, useEffect } from "react";
import fetchRecord from "@/utils/fetchRecords";

export function useFetchData() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    (async function () {
      const response = await fetchRecord();
      if (response?.error) {
        setError(response.error);
        return;
      }
      setData(response);
    })();
  }, []);

  return { data, error };
}
