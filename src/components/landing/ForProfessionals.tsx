import { Wallet, TrendingUp, Briefcase, Globe, Home, Sparkles, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ForProfessionalsProps {
  onOpenForm: () => void;
}

const careerBenefits = [
  { icon: Wallet, title: 'Zero Income Tax', description: 'Keep 100% of your salary with no income tax deductions.' },
  { icon: TrendingUp, title: 'Career Growth', description: 'Access global companies and accelerate your career trajectory.' },
  { icon: Briefcase, title: 'Higher Salaries', description: 'Earn 30-50% more than equivalent roles in India.' },
  { icon: Globe, title: 'Remote Work Visa', description: 'Work remotely for any global company while living in Dubai.' },
  { icon: Home, title: 'Property Investment', description: 'Build equity with your higher savings rate.' },
  { icon: Sparkles, title: 'Quality of Life', description: 'World-class amenities, entertainment, and lifestyle.' },
];

const ForProfessionals = ({ onOpenForm }: ForProfessionalsProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">FOR PROFESSIONALS</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Supercharge Your Career & <span className="text-gradient-gold">Wealth Building</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Dubai offers Indian professionals the opportunity to earn more, save more, and invest in premium real estate — all while enjoying a superior lifestyle.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {careerBenefits.map((benefit) => (
            <div key={benefit.title} className="card-luxury text-center py-8">
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Salary Comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* India Salary */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🇮🇳</span>
              <h3 className="font-display text-lg font-semibold text-foreground">In India</h3>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gross Salary</span>
                <span className="text-foreground font-medium">₹1,00,00,000</span>
              </div>
              <div className="flex justify-between text-destructive">
                <span>Income Tax (~30-35%)</span>
                <span>-₹35,00,000</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex justify-between">
                <span className="text-foreground font-semibold">Take-Home</span>
                <span className="text-foreground font-bold">₹65,00,000</span>
              </div>
            </div>
          </div>

          {/* Dubai Salary */}
          <div className="bg-primary/10 border-2 border-primary rounded-2xl p-6 md:p-8 relative">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              RECOMMENDED
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🇦🇪</span>
              <h3 className="font-display text-lg font-semibold text-foreground">In Dubai</h3>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Gross Salary</span>
                <span className="text-foreground font-medium">₹1,00,00,000</span>
              </div>
              <div className="flex justify-between text-primary">
                <span>Income Tax (0%)</span>
                <span>₹0</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex justify-between">
                <span className="text-foreground font-semibold">Take-Home</span>
                <span className="text-primary font-bold text-xl">₹1,00,00,000</span>
              </div>
            </div>
            <p className="text-sm text-primary font-medium">
              Save ₹35 Lakhs+ annually by moving to Dubai!
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button onClick={onOpenForm} className="btn-gold">
            Explore Career + Investment Options
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForProfessionals;