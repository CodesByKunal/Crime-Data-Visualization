import Navbar from "@/Components/Navbar";
export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <Navbar />
        <div className=" flex flex-col flex-1 sm:h-screen h-dvh sm:p-2">
          {children}
        </div>
      </div>
    </>
  );
}
