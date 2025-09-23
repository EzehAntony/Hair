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
  title: "Valhairs - Professional Hair Services",
  description: "Professional hair services specializing in wig revamping, styling, coloring, and premium hair sales in Lagos, Nigeria.",
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

          <footer className="relative mt-10 border-t" style={ { borderColor: "var(--border)" } }>
            <div className="container-max px-6 py-10">
              <div className="grid gap-8 md:grid-cols-4">
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold">Valhairs</h3>
                  <p className="mt-2 text-neutral-400 max-w-sm">
                    Professional hair services specializing in wig revamping, styling, coloring, and premium hair sales.
                    Bringing your hair back to life with expert care.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Services</h4>
                  <ul className="mt-3 space-y-1 text-neutral-300">
                    <li>Wig Revamping</li>
                    <li>Professional Styling</li>
                    <li>Hair Coloring</li>
                    <li>Premium Hair Sales</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Contact</h4>
                  <ul className="mt-3 space-y-1 text-neutral-300">
                    <li><a href="mailto:hello@valhairs.com" className="hover:underline">hello@valhairs.com</a></li>
                    <li><a href="tel:+2348123456789" className="hover:underline">+2349076737870</a></li>
                    <li>Lagos, Nigeria</li>
                    <li>Mon - Sun: 24hrs</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 text-sm text-neutral-500 border-t" style={ { borderColor: "var(--border)" } }>
                <p>© { new Date().getFullYear() } Valhairs. All rights reserved. Professional hair services in Lagos, Nigeria.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}