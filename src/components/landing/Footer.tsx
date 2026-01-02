import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const quickLinks = [
  { label: 'Why Dubai', href: '#why-dubai' },
  { label: 'For Investors', href: '#investors' },
  { label: 'For Business', href: '#business' },
  { label: 'For Families', href: '#families' },
  { label: 'How to Invest', href: '#how-to-invest' },
  { label: 'FAQ', href: '#faq' },
];

const services = [
  'Property Search & Selection',
  'Investment Advisory',
  'Golden Visa Assistance',
  'Property Management',
  'Legal & Documentation',
  'Relocation Support',
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <Logo variant="full" size="lg" />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              With over 20 years of experience in UAE real estate, we help Indian investors, business owners, and families find their perfect Dubai property.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-muted rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Connect With Us</h4>
            <div className="space-y-4 text-sm">
              <div className="text-muted-foreground">
                <span className="text-foreground font-medium block mb-1">Phone</span>
                <a href="tel:+919952172157" className="hover:text-primary transition-colors">
                  +91 99521 72157
                </a>
              </div>
              <div className="text-muted-foreground">
                <span className="text-foreground font-medium block mb-1">Email</span>
                <a 
                  href="mailto:info@primedubaiproperties.in?subject=Enquiry%20from%20Prime%20Dubai%20Properties%20Website&body=Hello%20Prime%20Dubai%20Properties%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20Dubai%20real%20estate%20investment%20opportunities.%0A%0APlease%20get%20in%20touch%20with%20me%20at%20your%20earliest%20convenience.%0A%0AThank%20you."
                  className="hover:text-primary transition-colors"
                >
                  info@primedubaiproperties.in
                </a>
              </div>
              <div className="text-muted-foreground">
                <span className="text-foreground font-medium block mb-2">Our Offices</span>
                <div className="space-y-3">
                  <div>
                    <span className="text-foreground text-xs font-medium">Coimbatore</span><br />
                    Lajapathi Roy Street, Ram Nagar Main,<br />
                    Ram Nagar, Gandhipuram,<br />
                    Coimbatore, Tamil Nadu 641009
                  </div>
                  <div>
                    <span className="text-foreground text-xs font-medium">Chennai</span><br />
                    Flat No. 12, Dhanalakshmi Apartment,<br />
                    Door No.74, 1st Avenue, Ashok Nagar,<br />
                    Chennai - 600083
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Prime Dubai Properties Group. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/legal#privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/legal#terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/legal#disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;