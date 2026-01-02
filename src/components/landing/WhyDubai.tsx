import { Globe, Landmark, TrendingUp, Briefcase, GraduationCap, Heart, Users, Plane, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhyDubaiProps {
  onOpenForm: () => void;
}

const benefits = [
  {
    icon: Globe,
    title: 'Strategic Global Hub',
    description: 'Just 3.5-4 hours from major Indian cities. Flights often cheaper than domestic India routes.',
  },
  {
    icon: Landmark,
    title: 'Zero Tax Paradise',
    description: '0% income tax, 0% capital gains tax, 0% property tax. Keep more of what you earn.',
  },
  {
    icon: TrendingUp,
    title: 'Exceptional ROI',
    description: '20-25% property appreciation with 8-10% annual rental yields. Outperforming global markets.',
  },
  {
    icon: Briefcase,
    title: 'Business-Friendly Ecosystem',
    description: '100% foreign ownership, easy company setup, access to 2 billion consumers in the region.',
  },
  {
    icon: GraduationCap,
    title: 'World-Class Education',
    description: 'International universities (NYU, Heriot-Watt) and Indian schools (DPS, GEMS) nearby.',
  },
  {
    icon: Heart,
    title: 'Premium Lifestyle',
    description: "World's safest city, excellent healthcare, vibrant Indian community with cultural familiarity.",
  },
];

const migrationStats = [
  { value: '3.5M+', label: 'Indians in UAE' },
  { value: '250K+', label: 'Relocated (3 years)' },
  { value: '$15B+', label: 'Bilateral Trade' },
];

const WhyDubai = ({ onOpenForm }: WhyDubaiProps) => {
  return (
    <section id="why-dubai" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">WHY DUBAI / UAE</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Smart Choice for <span className="text-gradient-gold">Indian Investors</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Dubai offers a unique combination of tax benefits, high returns, and quality of life that no other destination can match for Indian investors.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="card-luxury group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Migration Statistics */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">INDIAN MIGRATION TO UAE</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Join Millions of Indians Already Living Their Dubai Dream
              </h3>
              <p className="text-muted-foreground mb-6">
                The Indian community is the largest expatriate group in the UAE, creating a home away from home with familiar culture, cuisine, and connections.
              </p>
              <Button onClick={onOpenForm} className="btn-gold">
                Start Your Journey
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {migrationStats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDubai;