import { MapPin, Building2, Users, Palmtree, DollarSign } from 'lucide-react';

const emirates = [
  {
    name: 'Dubai',
    icon: Building2,
    tags: ['Business Hub', 'Luxury Living', 'High ROI'],
    description: 'The crown jewel of UAE real estate with the highest appreciation and rental yields.',
  },
  {
    name: 'Abu Dhabi',
    icon: Palmtree,
    tags: ['Capital City', 'Cultural Hub', 'Stable Growth'],
    description: 'Government sector opportunities and growing cultural attractions like Louvre Abu Dhabi.',
  },
  {
    name: 'Sharjah',
    icon: Users,
    tags: ['Family Living', 'Affordable', 'Cultural'],
    description: 'Family-friendly living with lower costs and rich cultural heritage.',
  },
  {
    name: 'Ajman',
    icon: DollarSign,
    tags: ['Budget Entry', 'High Yields', 'Growing'],
    description: 'Entry-level investment opportunity with strong rental demand.',
  },
];

const uaeFacts = [
  { label: 'Emirates', value: '7' },
  { label: 'Population', value: '10M+' },
  { label: 'Nationalities', value: '200+' },
  { label: 'GDP Growth', value: '3.8%' },
];

const UAEBeyondDubai = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">UAE BEYOND DUBAI</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Explore Opportunities <span className="text-gradient-gold">Across the Emirates</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            While Dubai leads in luxury and returns, other UAE emirates offer compelling opportunities for different investment strategies and lifestyles.
          </p>
        </div>

        {/* Emirates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {emirates.map((emirate) => (
            <div key={emirate.name} className="card-luxury group text-center">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <emirate.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {emirate.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {emirate.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {emirate.description}
              </p>
            </div>
          ))}
        </div>

        {/* UAE Facts Bar */}
        <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">UAE Fast Facts</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {uaeFacts.map((fact) => (
              <div key={fact.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
                  {fact.value}
                </div>
                <div className="text-sm text-muted-foreground">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UAEBeyondDubai;