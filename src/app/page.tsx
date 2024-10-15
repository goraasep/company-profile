import HeroCarousel from "@/app/components/HeroCarousel";
import Overview from "@/app/components/Overview";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Team from "@/app/components/Team";
import Testimonial from "@/app/components/Testimonial";
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
export default function Home() {
  return (
    <div className="bg-light-cyan">
      <ClientProvider>
        <HeroCarousel />
      </ClientProvider>
      <div className="px-5 md:px-20 flex flex-col gap-10 py-20">
        <ClientProvider>
          <Overview />
          <Services />
          <Projects />
          <Team />
          <Testimonial />
        </ClientProvider>
      </div>
    </div>
  );
}
