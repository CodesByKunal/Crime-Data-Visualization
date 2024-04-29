import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>This is Home Page</div>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/records">Records</Link>
    </>
  );
}
