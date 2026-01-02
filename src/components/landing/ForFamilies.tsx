import { GraduationCap, Shield, Heart, Users, School, Building2, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ForFamiliesProps {
  onOpenForm: () => void;
}

const educationOptions = [
  {
    category: 'International Universities',
    items: ['NYU Abu Dhabi', 'Heriot-Watt University', 'University of Birmingham', 'Middlesex University'],
  },
  {
    category: 'Indian Schools',
    items: ['Delhi Private School', 'GEMS Schools', 'Indian High School', 'The Millennium School'],
  },
];

const lifestylePerks = [
  {
    icon: Shield,
    title: 'Safety',
    description: "Dubai ranks as the world's safest city with near-zero crime rates.",
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'World-class hospitals and medical facilities with affordable insurance.',
  },
  {
    icon: Users,
    title: 'Indian Community',
    description: 'Celebrate Diwali, visit temples, enjoy authentic Indian cuisine everywhere.',
  },
];

const ForFamilies = ({ onOpenForm }: ForFamiliesProps) => {
  return (
    <section id="families" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">FOR FAMILIES</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Better Life for <span className="text-gradient-gold">Your Loved Ones</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Dubai offers exceptional education, safety, and lifestyle that makes it the perfect destination for Indian families seeking a brighter future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education Section */}
          <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Education Excellence
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {educationOptions.map((option) => (
                <div key={option.category}>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    {option.category === 'International Universities' ? (
                      <Building2 className="w-4 h-4 text-primary" />
                    ) : (
                      <School className="w-4 h-4 text-primary" />
                    )}
                    {option.category}
                  </h4>
                  <ul className="space-y-2">
                    {option.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mt-6 pt-4 border-t border-border">
              CBSE, ICSE, and IB curricula available for seamless transition from Indian schools.
            </p>
          </div>

          {/* Lifestyle Section */}
          <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Exceptional Living Standards
            </h3>

            <div className="space-y-6">
              {lifestylePerks.map((perk) => (
                <div key={perk.title} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <perk.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{perk.title}</h4>
                    <p className="text-sm text-muted-foreground">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Block */}
        <div className="bg-gradient-gold rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Give Your Family the Life They Deserve
          </h3>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Secure a home in one of the world's most family-friendly cities with excellent schools, safety, and a thriving Indian community.
          </p>
          <Button 
            onClick={onOpenForm} 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-3 h-auto"
          >
            Family Relocation Guide
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForFamilies;