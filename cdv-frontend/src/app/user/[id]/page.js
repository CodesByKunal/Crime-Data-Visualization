import Navbar from "@/Components/Navbar";
import Dashboard from "@/Components/Dashboard";
export default async function User({ params, searchParams }) {
  return (
    <>
      <div className="flex flex-row bg-yt">
        <Navbar />
        <Dashboard />
      </div>
    </>
  );
}
