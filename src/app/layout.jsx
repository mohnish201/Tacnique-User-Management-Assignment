import { Navbar } from "@/components/Global/Navbar";
import { Sidebar } from "@/components/Global/Sidebar";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });

export const metadata = {
  title: "User Managment App",
  description: "User Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster />
        <Navbar />
        <div className='hidden md:block'>
          <Sidebar />
        </div>
        <div className="p-4 overflow-auto md:ml-52">
          {children}
        </div>

      </body>
    </html>
  );
}
