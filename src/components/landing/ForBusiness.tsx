import { Globe2, BadgePercent, Building, Wifi, Users, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ForBusinessProps {
  onOpenForm: () => void;
}

const businessBenefits = [
  {
    icon: Globe2,
    title: 'Global Business Hub',
    description: 'Strategic location with access to 2 billion consumers across Middle East, Africa, and South Asia.',
    points: ['Direct flights to 250+ destinations', 'Gateway to MENA markets', 'Major trading hub'],
  },
  {
    icon: BadgePercent,
    title: 'Tax-Free Environment',
    description: 'Maximize your profits with zero corporate tax in free zones and minimal taxation elsewhere.',
    points: ['0% corporate tax in free zones', 'No personal income tax', 'No withholding tax'],
  },
  {
    icon: Building,
    title: 'Easy Company Formation',
    description: 'Set up your business in as little as 2-3 weeks with streamlined processes.',
    points: ['100% foreign ownership', 'Multiple free zone options', 'Minimal capital requirements'],
  },
  {
    icon: Wifi,
    title: 'World-Class Infrastructure',
    description: "UAE ranks #1 globally in logistics efficiency and digital infrastructure.",
    points: ['Smart city technology', 'Advanced banking system', 'Excellent connectivity'],
  },
];

const ForBusiness = ({ onOpenForm }: ForBusinessProps) => {
  return (
    <section id="business" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">FOR BUSINESS OWNERS & ENTREPRENEURS</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Expand Your Business to <span className="text-gradient-gold">the Global Stage</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Dubai offers the perfect ecosystem for Indian entrepreneurs to scale their businesses internationally while securing valuable real estate assets.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {businessBenefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="card-luxury"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
              <ul className="ml-16 space-y-2">
                {benefit.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="bg-gradient-navy navy-pattern rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Why Indian Businesses Choose Dubai
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Over 50,000 Indian-owned businesses already operate in the UAE. Join them and unlock global growth potential while building valuable real estate assets.
          </p>
          <Button onClick={onOpenForm} className="btn-gold">
            Business Expansion Consultation
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForBusiness;