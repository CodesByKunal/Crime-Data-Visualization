export default async function Records() {
  const getRecords = async () => {
    try {
      const response = await fetch("http://localhost:8000/records", {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }
      const data = await response.text();
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };
  const list = await getRecords();
  return (
    <>
      <h1>{list}</h1>
    </>
  );
}
