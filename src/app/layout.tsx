import type { Metadata } from "next";
import "./globals.css";
import LayoutProvider from '../components/LayoutProvider';
import Navbar from "@/components/nav/Navbar";
import FooterSection from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Yacht Master",
  description: "SETTING SAIL FOR BEAUTIFUL MEMORIES!",
};

export default function RootLayout({   children, }: Readonly<{   children: React.ReactNode;}>) {
  return (
    <>
    <LayoutProvider>
      <Navbar/>
         { children}
      <FooterSection/>
    </LayoutProvider>
    </>
  );
}
