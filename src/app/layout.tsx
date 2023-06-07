import "./globals.scss";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Menu } from "@/components";
import AuthProvider from "@/components/auth/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DNB Workshops",
  description: "WIP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <Menu />
          <div className="mainWrapper">{children}</div>
        </body>
      </html>
    </AuthProvider>
  );
}
