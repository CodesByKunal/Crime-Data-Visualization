import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crime Data Visualization",
  description: "Lets You Visualize the Crime Data on Map and Charts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} no-scrollbar`}>{children}</body>
    </html>
  );
}
