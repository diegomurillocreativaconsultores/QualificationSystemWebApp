import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/interface/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beauty Contest Qualification System | Elección de Reina de San Salvador Centro",
  description: "Elección de Reina de San Salvador Centro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
