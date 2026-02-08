import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "../providers/ThemeProvider";
import "./globals.css";

const poppins = Montserrat({
  weight: ["400", "300"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediStore App",
  description: "This is a multi-vendor medicine selling website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
