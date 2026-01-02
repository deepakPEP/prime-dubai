import { TrendingUp, PiggyBank, Home, BadgePercent, Shield, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ForInvestorsProps {
  onOpenForm: () => void;
}

const investmentBenefits = [
  {
    icon: TrendingUp,
    title: 'High Appreciation',
    description: 'Properties appreciate 20-25% annually in prime locations, outperforming most global markets.',
  },
  {
    icon: PiggyBank,
    title: 'Strong Rental Yields',
    description: '8-10% annual rental yields compared to 2-3% in most developed countries.',
  },
  {
    icon: BadgePercent,
    title: 'Zero Tax Burden',
    description: 'No capital gains tax, no property tax, no income tax on rental income.',
  },
  {
    icon: Home,
    title: 'Tenant-Ready Properties',
    description: 'High demand from expats ensures minimal vacancy and consistent rental income.',
  },
  {
    icon: Shield,
    title: 'Secure Investment',
    description: 'Government-regulated market with strong legal protections for foreign investors.',
  },
];

const roiComparison = [
  { asset: 'Dubai Real Estate', roi: 25, color: 'bg-primary' },
  { asset: 'Indian Real Estate', roi: 10, color: 'bg-muted-foreground/50' },
  { asset: 'Fixed Deposits', roi: 7, color: 'bg-muted-foreground/30' },
  { asset: 'Stock Market (Avg)', roi: 12, color: 'bg-muted-foreground/40' },
];

const ForInvestors = ({ onOpenForm }: ForInvestorsProps) => {
  return (
    <section id="investors" className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-semibold mb-4">FOR SMART INVESTORS</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Maximize Returns with <span className="text-gradient-gold">Dubai Real Estate</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Smart Indian investors are diversifying their portfolios with Dubai property investments that offer unmatched returns and security.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {investmentBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-border">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button onClick={onOpenForm} className="btn-gold">
              Get Investment Guide
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right Content - ROI Comparison */}
          <div className="bg-background border border-border rounded-2xl p-5 md:p-8 lg:sticky lg:top-24">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              ROI Comparison
            </h3>
            
            <div className="space-y-4 mb-8">
              {roiComparison.map((item) => (
                <div key={item.asset}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">{item.asset}</span>
                    <span className="text-primary font-semibold">{item.roi}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${(item.roi / 25) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-primary/10 border border-primary/30 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Smart Money Moving to Dubai</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Indian investment in UAE real estate grew 30% year-over-year, with high-net-worth individuals leading the trend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForInvestors;