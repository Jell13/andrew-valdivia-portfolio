import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ThemeProvider } from "./_components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Andrew-Valdivia",
  description: "NextJs-14 portfolio app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:text-light`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

          <div className="h-24">
            <Navbar/>
          </div>
          <div className="h-[calc(100vh-96px)]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
