import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist( {
  variable: "--font-geist-sans",
  subsets: [ "latin" ],
} );

const geistMono = Geist_Mono( {
  variable: "--font-geist-mono",
  subsets: [ "latin" ],
} );

export const metadata: Metadata = {
  title: "Hermana Hair",
  description: "Care guide and styles",
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="en">
      <body
        className={ `${ geistSans.variable } ${ geistMono.variable } antialiased` }
      >
        <div className="relative min-h-screen">
          <div className="gradient-spot purple inset-0 absolute" />
          <div className="gradient-spot blue inset-0 absolute" />
          <div className="gradient-spot pink inset-0 absolute" />

          <main className="relative">
            { children }
          </main>
        </div>
      </body>
    </html>
  );
}
