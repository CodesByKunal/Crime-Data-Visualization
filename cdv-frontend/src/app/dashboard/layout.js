import Navbar from "@/Components/Navbar";
export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <Navbar />
        <div className="grow flex flex-col-reverse sm:h-screen h-dvh sm:p-2">
          {children}
        </div>
      </div>
    </>
  );
}
