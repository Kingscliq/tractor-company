import Head from 'next/head';
import Button from '../components/elements/button';
import Hero from '../components/sections/hero';
import CtaOne from '../components/sections/cta-one';
import NavBar from '../components/widgets/nav-bar';
import GenerateButton from '../components/sections/gen-btn';
import MarketPlace from '../components/sections/marketplace';
import Currency from '../components/sections/currency';
import Pricing from '../components/sections/pricing';
import CtaTwo from '../components/sections/cta-two';
import FloatingCards from '../components/sections/floating-cards';
import Footer from '../components/widgets/footer';
import CarSection from '../components/sections/sect-cars';

export default function Home() {
  return (
    <>
      <Head>
        <title>West Global Plus Concepts</title>
        <meta
          name="description"
          content="Import and Export of tractors and heavy Duty agricultural Equipments"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <Hero />
      <CtaOne />
      <GenerateButton />
      <MarketPlace />
      <Currency />
      <Pricing />
      <CarSection />
      <CtaTwo />
      <FloatingCards />
      
      <Footer />
    </>
  );
}
