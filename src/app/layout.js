import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/userContext";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <StoreProvider>
        <Header/>
        {children}
        </StoreProvider>
        </body>
    </html>
  );
}
