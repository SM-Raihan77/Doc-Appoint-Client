import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemesProvider from "./provider/ThemesProvider";
import ToastProvider from "./provider/ToastProvider";

const OutfitFont = Outfit({
  subsets: ["latin"],
});


export const metadata = {
    title: {
        default: "Doc Appoint",
        template: "%s | Doc Appoint",
    },
    description: "Doctor Appointment Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${OutfitFont.className} bg-background/70 backdrop-blur-xl`}
    >
      <body className="min-h-full flex flex-col">
        <ThemesProvider>
        <Navbar />
        <main className="min-h-screen container mx-auto">
          {children}
        </main>
        <Footer />
      <ToastProvider />
      </ThemesProvider>
        </body>
    </html>
  );
}
