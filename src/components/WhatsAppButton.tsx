import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '919952172157';
  const message = encodeURIComponent("Hello! I'm interested in Dubai properties.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse-gold safe-area-bottom"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7 fill-current" />
    </a>
  );
};

export default WhatsAppButton;
