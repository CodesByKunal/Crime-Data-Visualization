export default async function Records({ params, searchParams }) {
  return (
    <>
      <h1>{decodeURI(params.id)}</h1>
    </>
  );
}
