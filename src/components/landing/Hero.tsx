import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Building2, TrendingUp, Users } from 'lucide-react';

interface HeroProps {
  onOpenForm: () => void;
}

const stats = [
  { value: 25, suffix: '%', label: 'Average ROI' },
  { value: 8, suffix: '-10%', label: 'Rental Yield' },
  { value: 0, suffix: '%', label: 'Capital Gains Tax' },
  { value: 250, suffix: 'K+', label: 'Indians Moved' },
];

const trustBadges = [
  { icon: Shield, label: '20+ Years Dubai Expertise' },
  { icon: Building2, label: 'Verified Developers' },
  { icon: TrendingUp, label: 'Transparent ROI' },
  { icon: Users, label: 'Full Support' },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

const Hero = ({ onOpenForm }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-navy navy-pattern overflow-x-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-primary/5 rounded-full blur-2xl" />

      <div className="container-custom relative z-10 pt-24 md:pt-32 lg:pt-36 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">20+ Years of Dubai Real Estate Excellence</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Your Gateway to{' '}
            <span className="text-gradient-gold">Dubai's Premium Properties</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Helping Indian investors, business owners, and families build wealth and secure their future through strategic Dubai real estate investments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 md:mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button onClick={onOpenForm} className="btn-gold text-base md:text-lg px-6 py-3 md:px-10 md:py-4 h-auto">
              Schedule Free Consultation
            </Button>
            <Button
              variant="outline"
              onClick={() => document.querySelector('#why-dubai')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline-gold text-base md:text-lg px-6 py-3 md:px-10 md:py-4 h-auto"
            >
              Explore Opportunities
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-1.5 md:gap-2 p-3 md:p-4">
                <badge.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <span className="text-xs text-muted-foreground text-center leading-tight">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-4 md:p-8 bg-card/50 backdrop-blur-sm border border-border rounded-xl md:rounded-2xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;