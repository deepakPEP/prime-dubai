import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X, ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';

interface MultiStepLeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormData = {
  purpose: string;
  budget: string;
  timeline: string;
  propertyType: string;
  location: string;
  experience: string;
  decisionAuthority: string;
  name: string;
  city: string;
  whatsapp: string;
  email: string;
  callTime: string;
  finalRequest: string;
};

const initialFormData: FormData = {
  purpose: '', budget: '', timeline: '', propertyType: '', location: '',
  experience: '', decisionAuthority: '', name: '', city: '', whatsapp: '',
  email: '', callTime: '', finalRequest: '',
};

const steps = [
  { id: 1, title: 'Purpose', field: 'purpose' as keyof FormData },
  { id: 2, title: 'Budget', field: 'budget' as keyof FormData },
  { id: 3, title: 'Timeline', field: 'timeline' as keyof FormData },
  { id: 4, title: 'Property Type', field: 'propertyType' as keyof FormData },
  { id: 5, title: 'Location', field: 'location' as keyof FormData },
  { id: 6, title: 'Experience', field: 'experience' as keyof FormData },
  { id: 7, title: 'Decision', field: 'decisionAuthority' as keyof FormData },
  { id: 8, title: 'Contact', field: 'name' as keyof FormData },
  { id: 9, title: 'Final', field: 'finalRequest' as keyof FormData },
];

const purposeOptions = [
  { value: 'roi', label: '💰 High rental income / ROI', emoji: '💰' },
  { value: 'second-home', label: '🏠 Second home for family', emoji: '🏠' },
  { value: 'relocation', label: '✈️ Relocation to UAE', emoji: '✈️' },
  { value: 'business', label: '🏢 Business expansion', emoji: '🏢' },
  { value: 'golden-visa', label: '🛂 Golden Visa / residency', emoji: '🛂' },
  { value: 'exploring', label: '🔍 Exploring options', emoji: '🔍' },
];

const budgetOptions = [
  { value: 'below-7l', label: 'Below AED 7,00,000 (₹1.6 Cr)' },
  { value: '7l-10l', label: 'AED 7,00,000 – 10,00,000 (₹1.6-2.3 Cr)' },
  { value: '10l-20l', label: 'AED 10,00,000 – 20,00,000 (₹2.3-4.5 Cr)' },
  { value: '20l-50l', label: 'AED 20,00,000 – 50,00,000 (₹4.5-11 Cr)' },
  { value: '50l+', label: 'AED 50,00,000+ (₹11+ Cr)' },
  { value: 'not-sure', label: 'Not sure yet' },
];

const timelineOptions = [
  { value: '30-days', label: '⚡ Within 30 days', badge: 'Urgent' },
  { value: '1-3-months', label: '📅 1–3 months', badge: 'Soon' },
  { value: '3-6-months', label: '🗓️ 3–6 months', badge: null },
  { value: '6-12-months', label: '📆 6–12 months', badge: null },
  { value: 'researching', label: '📚 Just researching', badge: null },
];

const propertyTypeOptions = [
  { value: 'ready', label: '🔑 Ready property (immediate use or rent)' },
  { value: 'off-plan', label: '🏗️ Off-plan (payment plans, appreciation)' },
  { value: 'both', label: '🤝 Open to both' },
];

const locationOptions = [
  { value: 'dubai', label: '🌆 Dubai' },
  { value: 'abu-dhabi', label: '🏛️ Abu Dhabi' },
  { value: 'open', label: '🗺️ Open to UAE options' },
  { value: 'guidance', label: '🧭 Not sure – need guidance' },
];

const experienceOptions = [
  { value: 'overseas', label: '✅ Yes, already own overseas property' },
  { value: 'uae', label: '🇦🇪 Yes, within UAE' },
  { value: 'first-time', label: '🆕 No, this is my first international property' },
];

const decisionOptions = [
  { value: 'myself', label: '👤 Myself' },
  { value: 'spouse', label: '👫 Myself + spouse' },
  { value: 'family', label: '👨‍👩‍👧‍👦 Family members' },
  { value: 'partners', label: '🤝 Business partners' },
];

const finalRequestOptions = [
  { value: 'property-options', label: '📋 Property options within my budget' },
  { value: 'roi-estimate', label: '📊 Rental income & ROI estimate' },
  { value: 'golden-visa', label: '🛂 Golden Visa guidance' },
  { value: 'relocation', label: '🏡 Relocation & lifestyle advice' },
  { value: 'expert', label: '💬 Talk to an expert before deciding' },
];

const indianCities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Other'];

const MultiStepLeadForm = ({ isOpen, onClose }: MultiStepLeadFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 9) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const calculateLeadScore = () => {
    const isHighBudget = ['10l-20l', '20l-50l', '50l+'].includes(formData.budget);
    const isUrgent = ['30-days', '1-3-months'].includes(formData.timeline);
    const isWarm = ['3-6-months'].includes(formData.timeline);
    const isMediumBudget = ['7l-10l'].includes(formData.budget);

    if (isHighBudget && isUrgent) return 'HOT';
    if ((isHighBudget || isMediumBudget) && (isUrgent || isWarm)) return 'WARM';
    return 'NURTURE';
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const leadScore = calculateLeadScore();
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/submit-lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          leadScore,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success to user, but log error
      setIsSubmitted(true);
      // You could show an error toast here if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    setFormData(initialFormData);
    setIsSubmitted(false);
    onClose();
  };

  const leadScore = calculateLeadScore();

  const renderOptionCards = (options: { value: string; label: string; badge?: string | null }[], field: keyof FormData) => (
    <div className="grid gap-2 md:gap-3">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleSelect(field, option.value)}
          className={`w-full p-3 md:p-4 rounded-lg md:rounded-xl border-2 text-left transition-all text-sm md:text-base ${
            formData[field] === option.value
              ? 'border-primary bg-primary/10 text-foreground'
              : 'border-border bg-card hover:border-primary/50 text-foreground'
          }`}
        >
          <div className="flex items-center justify-between">
            <span>{option.label}</span>
            {option.badge && (
              <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                {option.badge}
              </span>
            )}
          </div>
        </button>
      ))}
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">What is your primary purpose?</h3>
            <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6">Select the main reason for your Dubai property interest</p>
            {renderOptionCards(purposeOptions, 'purpose')}
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">What is your estimated budget?</h3>
            <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6">This helps us show you relevant properties</p>
            {renderOptionCards(budgetOptions, 'budget')}
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">When are you planning to invest?</h3>
            <p className="text-muted-foreground text-sm mb-6">Select your preferred timeline</p>
            {renderOptionCards(timelineOptions, 'timeline')}
          </div>
        );
      case 4:
        return (
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Property type preference?</h3>
            <p className="text-muted-foreground text-sm mb-6">Ready or under-construction properties</p>
            {renderOptionCards(propertyTypeOptions, 'propertyType')}
          </div>
        );
      case 5:
        return (
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Preferred UAE location?</h3>
            <p className="text-muted-foreground text-sm mb-6">Where would you like to invest?</p>
            {renderOptionCards(locationOptions, 'location')}
          </div>
        );
      case 6:
        return (
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">International property experience?</h3>
            <p className="text-muted-foreground text-sm mb-6">Have you invested abroad before?</p>
            {renderOptionCards(experienceOptions, 'experience')}
          </div>
        );
      case 7:
        return (
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Who will decide?</h3>
            <p className="text-muted-foreground text-sm mb-6">Who will be involved in the final decision?</p>
            {renderOptionCards(decisionOptions, 'decisionAuthority')}
          </div>
        );
      case 8:
        return (
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">Your Contact Details</h3>
            <p className="text-muted-foreground text-sm mb-6">So our expert can reach you</p>
            <div className="space-y-4">
              <div><Label>Full Name *</Label><Input value={formData.name} onChange={(e) => handleSelect('name', e.target.value)} placeholder="Your full name" className="mt-1" /></div>
              <div><Label>City (India) *</Label>
                <Select value={formData.city} onValueChange={(v) => handleSelect('city', v)}>
                  <SelectTrigger className="mt-1"><SelectValue placeholder="Select city" /></SelectTrigger>
                  <SelectContent>{indianCities.map((city) => <SelectItem key={city} value={city}>{city}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div><Label>WhatsApp Number *</Label><Input value={formData.whatsapp} onChange={(e) => handleSelect('whatsapp', e.target.value)} placeholder="+91 XXXXX XXXXX" className="mt-1" /></div>
              <div><Label>Email (Optional)</Label><Input value={formData.email} onChange={(e) => handleSelect('email', e.target.value)} placeholder="your@email.com" className="mt-1" /></div>
              <div><Label>Best time to call *</Label>
                <Select value={formData.callTime} onValueChange={(v) => handleSelect('callTime', v)}>
                  <SelectTrigger className="mt-1"><SelectValue placeholder="Select time" /></SelectTrigger>
                  <SelectContent><SelectItem value="morning">Morning (9AM-12PM)</SelectItem><SelectItem value="afternoon">Afternoon (12PM-5PM)</SelectItem><SelectItem value="evening">Evening (5PM-8PM)</SelectItem></SelectContent>
                </Select>
              </div>
              <p className="text-xs text-muted-foreground">Your details are safe. We only contact serious buyers. No spam.</p>
            </div>
          </div>
        );
      case 9:
        return (
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">What would you like from us?</h3>
            <p className="text-muted-foreground text-sm mb-6">Select what help you need right now</p>
            {renderOptionCards(finalRequestOptions, 'finalRequest')}
          </div>
        );
      default:
        return null;
    }
  };

  const canProceed = () => {
    if (currentStep === 8) return formData.name && formData.city && formData.whatsapp && formData.callTime;
    const field = steps[currentStep - 1].field;
    return !!formData[field];
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-lg bg-card border-border">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              {leadScore === 'HOT' ? '🔥 Priority Status Activated!' : leadScore === 'WARM' ? '✨ Thank You!' : '📚 Thank You for Your Interest!'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {leadScore === 'HOT' 
                ? 'A Dubai property expert will contact you within 24 hours with curated options.'
                : leadScore === 'WARM'
                ? 'We will share Dubai property insights and reach out soon.'
                : 'We will send helpful Dubai investment information to support your research.'}
            </p>
            <Button onClick={handleClose} className="btn-gold">Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg bg-card border-border max-h-[85vh] md:max-h-[90vh] overflow-y-auto mx-4 md:mx-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="font-display text-lg text-foreground">Get Your Dubai Property Plan</DialogTitle>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary transition-all" style={{ width: `${(currentStep / 9) * 100}%` }} />
            </div>
            <span className="text-sm text-muted-foreground">{currentStep}/9</span>
          </div>
        </DialogHeader>
        <div className="py-4">{renderStep()}</div>
        <div className="flex gap-3 pt-4 border-t border-border">
          {currentStep > 1 && <Button variant="outline" onClick={handleBack} className="flex-1"><ArrowLeft className="w-4 h-4 mr-2" />Back</Button>}
          {currentStep < 9 ? (
            <Button onClick={handleNext} disabled={!canProceed()} className="btn-gold flex-1">Continue<ArrowRight className="w-4 h-4 ml-2" /></Button>
          ) : (
            <Button onClick={handleSubmit} disabled={!canProceed() || isSubmitting} className="btn-gold flex-1">
              {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting...</> : 'Get My Dubai Property Plan'}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MultiStepLeadForm;