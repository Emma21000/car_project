import { Playfair_Display } from "next/font/google" ;
import { navbar_data } from "../../data/navbar";
import "./globals.css";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer/Footer";
import { footer } from "../../data/footer";

  const playfair_display = Playfair_Display({
  variable: "--font-playfair_display",
  subsets: ["latin"],
  weight: "500",
  });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${playfair_display.variable}`}>
        <Navbar data={navbar_data} />
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}
