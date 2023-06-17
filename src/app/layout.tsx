import "./globals.css";
import { Inter } from "next/font/google";
import { Chivo } from "next/font/google";
import { Nav } from "@/app/components/Nav";

const inter = Inter({ subsets: ["latin"] });
const chivo = Chivo({ subsets: ["latin"] });

export const metadata = {
  title: "Joaquin Galoppo - Portfolio",
  description: "I'm Joaquin, a developer specializing in TypeScript. Passionate about creating elegant, accessible, and high-performance web applications",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " debug-screens"}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
