import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Renting Car",
  description: "Rent a car as never been so easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
