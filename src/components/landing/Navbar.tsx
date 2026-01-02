import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

interface NavbarProps {
  onOpenForm: () => void;
}

const leftNavLinks = [
  { label: 'Why Dubai', href: '#why-dubai' },
  { label: 'Investors', href: '#investors' },
  { label: 'Business', href: '#business' },
];

const rightNavLinks = [
  { label: 'Families', href: '#families' },
  { label: 'How to Invest', href: '#how-to-invest' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar = ({ onOpenForm }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-28 lg:h-36">
          {/* Left Navigation - close to logo */}
          <div className="hidden lg:flex items-center gap-8">
            {leftNavLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium tracking-wide whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Centered Logo */}
          <Link to="/" className="flex items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <Logo variant="full" size="md" className="lg:hidden" />
            <Logo variant="full" size="xl" className="hidden lg:block" />
          </Link>

          {/* Right Navigation close to logo + CTA at extreme right */}
          <div className="hidden lg:flex items-center gap-8">
            {rightNavLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium tracking-wide whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
            <Button onClick={onOpenForm} className="btn-gold ml-8">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="py-4 space-y-2">
              {[...leftNavLinks, ...rightNavLinks].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button onClick={onOpenForm} className="btn-gold w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;