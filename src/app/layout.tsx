import type { Metadata } from "next";
// import { Montserrat } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kwame Mensah',
  description: 'Frontend Engineer | React | React Native',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
