
import React from "react";
import "./globals.css";
import BackgroundFX from "@/components/BackgroundFX";
import { Poppins, Merienda,Lobster_Two , Bebas_Neue,Inter,Oswald,Ubuntu} from "next/font/google";
const b = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const i = Inter({ subsets: ["latin"], weight: ["400"] });

const o =Oswald({subsets:["latin"],weight:["400"]})

export const metadata = {
  title: "Pratham Gupta",
  description: "Personal portfolio of Pratham.",
};

const lob = Lobster_Two({ subsets: ["latin"], weight: ["400", "700"] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black ">
      <body className={o.className + " min-h-screen flex flex-col bg-black"}>
        <BackgroundFX />
         <main >{children}</main>
      </body>
    </html>
  );
}
