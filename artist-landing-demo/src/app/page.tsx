import Header  from "@/components/Header";
import Hero from "@/components/Hero";
import ArtistIntro from "@/components/ArtistIntro";
import FeauturedRelease from "@/components/FeaturedRelease";
import SelectedMusic from "@/components/SelectedMusic";
import LiveDates from "@/components/LiveDates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
       <Header />
    <main >
      <Hero />
      <ArtistIntro />
      <FeauturedRelease />
      <SelectedMusic />
      <LiveDates />
      <Contact />
      <Footer />
    </main>
    </>
  )
}