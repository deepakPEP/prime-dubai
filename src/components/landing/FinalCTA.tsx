import { Button } from '@/components/ui/button';
import { Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenForm: () => void;
}

const emailSubject = encodeURIComponent('Enquiry from Prime Dubai Properties Website');
const emailBody = encodeURIComponent(`Hello Prime Dubai Properties Team,

I am interested in learning more about Dubai real estate investment opportunities.

Please get in touch with me at your earliest convenience.

Thank you.`);

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 99521 72157', href: 'tel:+919952172157' },
  { icon: Mail, label: 'Email', value: 'info@primedubaiproperties.in', href: `mailto:info@primedubaiproperties.in?subject=${emailSubject}&body=${emailBody}` },
  { icon: Clock, label: 'Hours', value: 'Mon-Sat: 9AM - 6PM IST', href: null },
];

const FinalCTA = ({ onOpenForm }: FinalCTAProps) => {
  return (
    <section className="section-padding bg-gradient-navy navy-pattern">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Invest in <span className="text-gradient-gold">Your Future?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step toward building wealth, securing your family's future, and enjoying the Dubai lifestyle. Our experts are ready to guide you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button onClick={onOpenForm} className="btn-gold text-lg px-10 py-4 h-auto">
              Get My Dubai Property Plan
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              onClick={onOpenForm}
              className="btn-outline-gold text-lg px-10 py-4 h-auto"
            >
              Schedule a Call
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <div className="text-foreground font-medium">{item.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;