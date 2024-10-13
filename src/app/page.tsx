import Image from "next/image";
import EventGate from "./EventGate"
import SponsoredBy from "./sponsored-by";
import { Navbar, Footer } from "@/components";
import { Import } from "lucide-react";
import Hero from "./hero";

export default function Home() {
  return (
    <>
    <Hero/>
    <Navbar />
    <EventGate/>
    <SponsoredBy/>
    <Footer/>
    </>
  );
}
