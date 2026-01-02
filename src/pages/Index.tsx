import { useState } from 'react';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import WhyDubai from '@/components/landing/WhyDubai';
import ForInvestors from '@/components/landing/ForInvestors';
import ForBusiness from '@/components/landing/ForBusiness';
import ForFamilies from '@/components/landing/ForFamilies';
import ForProfessionals from '@/components/landing/ForProfessionals';
import UAEBeyondDubai from '@/components/landing/UAEBeyondDubai';
import HowToInvest from '@/components/landing/HowToInvest';
import FAQ from '@/components/landing/FAQ';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';
import MultiStepLeadForm from '@/components/forms/MultiStepLeadForm';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenForm={openForm} />
      <Hero onOpenForm={openForm} />
      <WhyDubai onOpenForm={openForm} />
      <ForInvestors onOpenForm={openForm} />
      <ForBusiness onOpenForm={openForm} />
      <ForFamilies onOpenForm={openForm} />
      <ForProfessionals onOpenForm={openForm} />
      <UAEBeyondDubai />
      <HowToInvest onOpenForm={openForm} />
      <FAQ onOpenForm={openForm} />
      <FinalCTA onOpenForm={openForm} />
      <Footer />
      <MultiStepLeadForm isOpen={isFormOpen} onClose={closeForm} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;