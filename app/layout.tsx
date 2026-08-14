import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAPADA Garut — Sistem Administrasi Pajak Daerah",
  description: "Aplikasi pengelolaan administrasi pajak daerah Kabupaten Garut, untuk Pemerintah Daerah dan masyarakat.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-[#0a0c10] md:bg-white text-white md:text-gray-900 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
