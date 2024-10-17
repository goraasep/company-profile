import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

import ClientProvider from "@/providers/ClientProvider";
import { Metadata } from "next";
import axios from "axios";

export async function generateMetadata(): Promise<Metadata> {
  const fetchContact = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}contact`
    );
    return data;
  };
  const contact = await fetchContact();
  return {
    title: contact.companyName,
    icons: {
      icon: contact.logoUrl,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col justify-between min-h-[100vh]`}
      >
        <ClientProvider>
          <Header />
        </ClientProvider>
        <div className="flex-grow h-full bg-light-cyan">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
