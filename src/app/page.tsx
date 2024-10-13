
import EventGate from "./EventGate"
import SponsoredBy from "./sponsored-by";
import { Navbar, Footer } from "@/components";
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
