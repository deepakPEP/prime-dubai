import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowUpRight } from 'lucide-react';

interface FAQProps {
  onOpenForm: () => void;
}

const faqs = [
  {
    question: 'Can Indians legally buy property in Dubai?',
    answer: 'Yes, absolutely! Indians can buy freehold property in designated areas in Dubai and other UAE emirates. The process is straightforward, government-regulated, and secure. Over 15% of Dubai property buyers are Indian nationals.',
  },
  {
    question: 'What documents are needed to buy property in Dubai?',
    answer: 'You need a valid passport, passport-size photos, and proof of address. No UAE visa is required to purchase property. Our team handles all documentation and ensures a smooth process.',
  },
  {
    question: 'What is the minimum investment for Dubai property?',
    answer: 'Entry-level apartments start from around AED 500,000 (₹1.1 Cr). For Golden Visa eligibility, the minimum is AED 2 million (₹4.5 Cr). We have options for every budget.',
  },
  {
    question: 'What rental yields can I expect?',
    answer: 'Dubai offers 8-10% gross rental yields, significantly higher than most global cities. Some areas yield even higher returns. We provide detailed ROI analysis for every property.',
  },
  {
    question: 'Should I buy ready property or off-plan?',
    answer: 'Both have advantages. Ready properties generate immediate rental income, while off-plan properties offer payment plans and higher appreciation potential. We help you choose based on your goals.',
  },
  {
    question: 'How do I qualify for the Golden Visa through property?',
    answer: 'Invest AED 2 million (₹4.5 Cr) or more in Dubai real estate to qualify for a 10-year Golden Visa. This can be a single property or multiple properties combined.',
  },
  {
    question: 'Is financing available for Indian buyers?',
    answer: 'Yes, UAE banks offer mortgages to non-residents with 50-60% financing. You need to show income proof and pay 40-50% down payment. We connect you with preferred banking partners.',
  },
  {
    question: 'How do I manage my property from India?',
    answer: 'We offer complete property management services including tenant placement, rent collection, maintenance, and reporting. You can be a passive investor while we handle everything.',
  },
  {
    question: 'What are the total costs involved beyond property price?',
    answer: 'Expect 4-7% additional costs including: DLD registration fee (4%), agency fee (2%), and admin charges. No recurring property taxes in Dubai!',
  },
  {
    question: 'How do I verify a developer or property?',
    answer: 'We only work with RERA-registered developers and verified properties. All developers are regulated by Dubai Land Department. We conduct thorough due diligence on every property.',
  },
  {
    question: 'How liquid is Dubai real estate? Can I sell easily?',
    answer: 'Dubai has a mature secondary market with good liquidity. Well-located properties typically sell within 2-3 months. We also assist with resale when you decide to exit.',
  },
  {
    question: 'What legal protections exist for foreign investors?',
    answer: 'Dubai has robust property laws protecting investors. The Real Estate Regulatory Agency (RERA) oversees all transactions. Escrow accounts protect your funds until handover.',
  },
  {
    question: 'Is the UAE economy stable for long-term investment?',
    answer: 'UAE has one of the strongest economies in the region with AAA credit ratings. Diversification beyond oil, tourism growth, and Expo legacy ensure long-term stability.',
  },
  {
    question: 'How do currency fluctuations affect my investment?',
    answer: 'AED is pegged to USD, providing currency stability. Your investment is effectively in USD, offering a hedge against INR fluctuations.',
  },
  {
    question: 'What are the tax implications in India for Dubai property?',
    answer: 'Rental income and capital gains from Dubai property are taxable in India under normal income tax rules. We recommend consulting with a CA for personalized advice.',
  },
];

const FAQ = ({ onOpenForm }: FAQProps) => {
  return (
    <section id="faq" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You <span className="text-gradient-gold">Need to Know</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Get answers to the most common questions about investing in Dubai real estate as an Indian buyer.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center bg-background border border-border rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our Dubai property experts are ready to answer all your questions and guide you through the investment process.
          </p>
          <Button onClick={onOpenForm} className="btn-gold">
            Talk to an Expert
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;