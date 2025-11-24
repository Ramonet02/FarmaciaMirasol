import Hero from '@/components/Hero';
import ScheduleSection from '@/components/ScheduleSection';
import WhatsAppOrder from '@/components/WhatsAppOrder';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import BrandsSlider from '@/components/BrandsSlider';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {

  return (
    <main className="min-h-screen bg-white pt-20">
      <Header />
      <Hero />
      <ContactSection />
      <ServicesSection />
      <BrandsSlider />
      <AboutSection />
      <WhatsAppOrder/>
      <Footer />
    </main>
  );
}
