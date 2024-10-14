
import EventGate from "./EventGate";
import { Navbar, Footer } from "@/components";
import Hero from "./hero";

export default function Home() {
  return (
    <>
    <Hero/>
    <Navbar />
    <EventGate/>
    <Footer/>
    </>
  );
}
