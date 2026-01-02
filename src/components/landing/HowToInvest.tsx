import { MessageCircle, Search, FileText, CreditCard, Key, Headphones, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HowToInvestProps {
  onOpenForm: () => void;
}

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Initial Consultation',
    timeline: '1-2 days',
    description: 'Share your goals, budget, and preferences. Our experts will understand your requirements.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Property Selection',
    timeline: '3-7 days',
    description: 'Receive curated property options matching your criteria with detailed ROI analysis.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Documentation & Legal',
    timeline: '5-10 days',
    description: 'Our legal team handles all paperwork, due diligence, and compliance requirements.',
  },
  {
    number: '04',
    icon: CreditCard,
    title: 'Booking & Payment',
    timeline: '1-2 days',
    description: 'Secure your property with booking amount. Multiple payment options available.',
  },
  {
    number: '05',
    icon: Key,
    title: 'Title Transfer',
    timeline: '1-2 weeks',
    description: 'Complete ownership transfer and receive your property title deed.',
  },
  {
    number: '06',
    icon: Headphones,
    title: 'Handover & Beyond',
    timeline: 'Ongoing',
    description: 'Property management, tenant placement, and continuous support.',
  },
];

const HowToInvest = ({ onOpenForm }: HowToInvestProps) => {
  return (
    <section id="how-to-invest" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">HOW TO INVEST</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Journey to <span className="text-gradient-gold">Dubai Property</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We make Dubai property investment simple and stress-free. Here's what to expect when you work with us.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`lg:grid lg:grid-cols-2 lg:gap-12 relative ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`card-luxury lg:mb-8 ${
                    index % 2 === 0 ? 'lg:mr-auto lg:text-right' : 'lg:ml-auto lg:col-start-2'
                  }`}
                  style={{ maxWidth: '450px' }}
                >
                  <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0 lg:hidden">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="hidden lg:block p-3 bg-primary/10 rounded-lg shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 lg:hidden">
                        <span className="text-primary font-bold">{step.number}</span>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {step.timeline}
                        </span>
                      </div>
                      <div className={`hidden lg:flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {step.timeline}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Block */}
        <div className="bg-gradient-navy navy-pattern rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-center mt-12 md:mt-16">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            We Handle Everything for You
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            From property search to handover and beyond, our team manages every aspect of your Dubai property investment. You just need to make the decision.
          </p>
          <Button onClick={onOpenForm} className="btn-gold">
            Start Your Investment Journey
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToInvest;