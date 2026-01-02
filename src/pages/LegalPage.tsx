import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Shield, FileText, AlertTriangle } from 'lucide-react';

const LegalPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle anchor link scrolling
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleOpenForm = () => {
    // Navigate to home and open form
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenForm={handleOpenForm} />
      
      {/* Header */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-10 md:pb-16 bg-gradient-navy">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Legal Information, Privacy & Disclosures
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            This page explains how Prime Dubai Properties Group handles your data, 
            the terms under which this website operates, and important disclosures 
            related to UAE real estate information. Please read carefully.
          </p>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-2 md:gap-4 mt-6 md:mt-8">
            <a 
              href="#privacy-policy" 
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-card/50 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm">Privacy Policy</span>
            </a>
            <a 
              href="#terms-of-service" 
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-card/50 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm">Terms of Service</span>
            </a>
            <a 
              href="#disclaimer" 
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-card/50 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <AlertTriangle className="w-4 h-4 text-primary" />
              <span className="text-xs md:text-sm">Disclaimer</span>
            </a>
          </div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-10 md:py-16">
        <div className="container-custom max-w-4xl">
          <Accordion type="multiple" defaultValue={['privacy', 'terms', 'disclaimer']} className="space-y-4 md:space-y-6">
            
            {/* Privacy Policy */}
            <AccordionItem 
              value="privacy" 
              id="privacy-policy" 
              className="scroll-mt-28 md:scroll-mt-36 lg:scroll-mt-40 border border-border rounded-lg bg-card overflow-hidden"
            >
              <AccordionTrigger className="px-4 md:px-6 py-3 md:py-4 hover:no-underline hover:bg-muted/50">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-lg md:text-xl font-display font-semibold">Privacy & Data Protection Policy</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base">
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Our Commitment</h3>
                    <p>
                      Prime Dubai Properties Group ("we," "us," or "our") is committed to protecting your privacy 
                      and ensuring the security of your personal information. This policy outlines how we collect, 
                      use, and safeguard your data in compliance with the Information Technology Act, 2000 and 
                      applicable Indian data protection regulations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Information We Collect</h3>
                    <p>We may collect the following personal information when you interact with our website or services:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Full name</li>
                      <li>Phone number / WhatsApp number</li>
                      <li>Email address</li>
                      <li>City and country of residence</li>
                      <li>Investment preferences and budget range</li>
                      <li>Property type preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Purpose of Data Collection</h3>
                    <p>Your personal information is collected and used for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Providing property advisory and consultation services</li>
                      <li>Responding to your enquiries and requests</li>
                      <li>Sharing relevant real estate information, project updates, and market insights</li>
                      <li>Facilitating communication between you and property developers or service providers</li>
                      <li>Improving our services and website experience</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Consent</h3>
                    <p>
                      By submitting your information through our website, contact forms, or other communication channels, 
                      you expressly consent to the collection, processing, and use of your personal data as described in 
                      this policy. You also consent to receive communications from us via phone calls, WhatsApp messages, 
                      emails, and SMS regarding property information, market updates, and promotional content.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Data Security</h3>
                    <p>
                      We implement reasonable security practices and procedures as mandated under the Information Technology 
                      (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. 
                      These measures are designed to protect your personal information from unauthorized access, disclosure, 
                      alteration, or destruction.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Cross-Border Data Transfer</h3>
                    <p>
                      As we facilitate UAE real estate transactions, your personal information may be shared with our 
                      partners, associates, or service providers located in the United Arab Emirates. By using our services, 
                      you acknowledge and consent to this cross-border transfer of data. We ensure that such transfers are 
                      conducted with appropriate safeguards in place.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Data Sharing</h3>
                    <p>
                      We do not sell, trade, or rent your personal information to third parties for commercial purposes. 
                      Your data may be shared with trusted partners solely for the purpose of providing you with requested 
                      services, such as property developers, legal advisors, or financial institutions, and only with your 
                      knowledge.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Data Retention</h3>
                    <p>
                      We retain your personal information only for as long as necessary to fulfill the purposes for which 
                      it was collected, or as required by applicable law. Once data is no longer needed, it will be securely 
                      deleted or anonymized.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">External Links</h3>
                    <p>
                      Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                      or content of these external sites. We encourage you to review the privacy policies of any website you 
                      visit through links on our platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Your Rights</h3>
                    <p>
                      You have the right to withdraw your consent at any time by contacting us at{' '}
                      <a href="mailto:info@primedubaiproperties.in" className="text-primary hover:underline">
                        info@primedubaiproperties.in
                      </a>
                      . Upon receiving your request, we will cease processing your personal data and remove it from our 
                      systems, subject to any legal obligations requiring us to retain certain information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Policy Updates</h3>
                    <p>
                      We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this 
                      page with an updated revision date. We encourage you to review this policy periodically.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Terms of Service */}
            <AccordionItem 
              value="terms" 
              id="terms-of-service" 
              className="scroll-mt-28 md:scroll-mt-36 lg:scroll-mt-40 border border-border rounded-lg bg-card overflow-hidden"
            >
              <AccordionTrigger className="px-4 md:px-6 py-3 md:py-4 hover:no-underline hover:bg-muted/50">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-lg md:text-xl font-display font-semibold">Terms of Use & Service</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base">
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Acceptance of Terms</h3>
                    <p>
                      By accessing and using this website, you acknowledge that you have read, understood, and agree to 
                      be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use 
                      this website. Your continued use of the website constitutes acceptance of these terms and any 
                      modifications thereof.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Nature of Services</h3>
                    <p>
                      Prime Dubai Properties Group provides the following services:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li><strong>Informational:</strong> General information about UAE real estate market, properties, and investment opportunities</li>
                      <li><strong>Advisory:</strong> Non-binding consultation and guidance on property options based on your stated preferences</li>
                      <li><strong>Facilitation:</strong> Connecting interested buyers with property developers, legal professionals, and other service providers in the UAE</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Important Clarifications</h3>
                    <p>
                      Prime Dubai Properties Group is an independent real estate advisory and facilitation company. 
                      We explicitly clarify that we are:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li><strong>Not a property developer:</strong> We do not construct, develop, or own any real estate projects</li>
                      <li><strong>Not a legal advisor:</strong> We do not provide legal advice or legal representation</li>
                      <li><strong>Not a financial advisor:</strong> We do not provide financial planning, investment advice, or portfolio management services regulated under SEBI or RBI guidelines</li>
                      <li><strong>Not a tax advisor:</strong> We do not provide tax planning or taxation advice</li>
                      <li><strong>Not an immigration consultant:</strong> We do not provide visa or immigration advice or services</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">No Professional Advice</h3>
                    <p>
                      The information provided on this website and through our services is for general informational 
                      purposes only. It does not constitute professional advice of any kind. You should consult with 
                      qualified professionals (legal, financial, tax, immigration) before making any decisions based 
                      on information received from us.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Accuracy & Market Variability</h3>
                    <p>
                      While we strive to provide accurate and up-to-date information, we make no representations or 
                      warranties about the completeness, accuracy, reliability, or availability of any information on 
                      this website. Real estate markets are subject to fluctuations, and property prices, availability, 
                      and project details may change without notice.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">User Responsibility</h3>
                    <p>
                      You are solely responsible for any decisions you make based on the information provided through 
                      our website or services. We recommend conducting your own due diligence, including but not limited 
                      to property inspections, legal title verification, financial feasibility analysis, and consultation 
                      with independent professionals before making any investment decisions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Intellectual Property</h3>
                    <p>
                      All content on this website, including but not limited to text, graphics, logos, images, videos, 
                      and software, is the property of Prime Dubai Properties Group or its content suppliers and is 
                      protected by Indian and international copyright laws. Unauthorized use, reproduction, or distribution 
                      of this content is strictly prohibited.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Prohibited Use</h3>
                    <p>
                      You agree not to use this website for any unlawful purpose or in any way that could damage, disable, 
                      or impair the website. You may not attempt to gain unauthorized access to any part of the website, 
                      other accounts, or any systems or networks connected to our servers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Modification Rights</h3>
                    <p>
                      We reserve the right to modify, suspend, or discontinue any aspect of this website or these Terms 
                      of Use at any time without prior notice. Your continued use of the website following any changes 
                      constitutes acceptance of those changes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Limitation of Liability</h3>
                    <p>
                      To the fullest extent permitted by applicable law, Prime Dubai Properties Group, its directors, 
                      employees, partners, agents, and affiliates shall not be liable for any direct, indirect, incidental, 
                      special, consequential, or punitive damages arising out of or related to your use of this website 
                      or our services, including but not limited to any errors or omissions in content, loss of data, 
                      or any loss or damage of any kind incurred as a result of your use of any content or services 
                      made available through this website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Governing Law</h3>
                    <p>
                      These Terms of Use shall be governed by and construed in accordance with the laws of India, 
                      without regard to its conflict of law provisions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Jurisdiction</h3>
                    <p>
                      Any disputes arising out of or relating to these Terms of Use or your use of this website shall 
                      be subject to the exclusive jurisdiction of the courts located in Coimbatore, Tamil Nadu, India. 
                      You hereby consent to the personal jurisdiction of such courts and waive any objection to venue 
                      in such courts.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Disclaimer */}
            <AccordionItem 
              value="disclaimer" 
              id="disclaimer" 
              className="scroll-mt-28 md:scroll-mt-36 lg:scroll-mt-40 border border-border rounded-lg bg-card overflow-hidden"
            >
              <AccordionTrigger className="px-4 md:px-6 py-3 md:py-4 hover:no-underline hover:bg-muted/50">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  <span className="text-lg md:text-xl font-display font-semibold">Important Disclaimer & Risk Disclosure</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base">
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Independent Advisory Status</h3>
                    <p>
                      Prime Dubai Properties Group operates as an independent real estate advisory and facilitation 
                      company. We are not affiliated with, endorsed by, or officially connected to any property 
                      developer, government authority, or regulatory body in India or the UAE. Any representation 
                      to the contrary is unauthorized.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">No Government Representation</h3>
                    <p>
                      We do not represent any government or regulatory authority. Information regarding UAE regulations, 
                      visa policies, or government schemes is provided for general awareness only and should not be 
                      construed as official guidance. Always verify such information directly with relevant government 
                      authorities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Real Estate Investment Risks</h3>
                    <p>
                      Investing in real estate, including international real estate, involves significant risks. 
                      You should be aware that:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Property values can decrease as well as increase</li>
                      <li>Past performance of property markets does not guarantee future results</li>
                      <li>Real estate investments are typically illiquid and may be difficult to sell quickly</li>
                      <li>Currency exchange rate fluctuations between INR and AED can significantly impact your investment value and returns</li>
                      <li>International investments are subject to different legal and regulatory frameworks</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">No Guarantee of Returns</h3>
                    <p>
                      We make no representations, warranties, or guarantees regarding potential returns on investment, 
                      capital appreciation, or rental yields. Any projections, estimates, or historical data presented 
                      are for illustrative purposes only and should not be relied upon as predictions of future performance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Rental Income Disclaimer</h3>
                    <p>
                      Rental income from properties is not guaranteed and depends on various factors including market 
                      conditions, property location, tenant availability, and management efficiency. Actual rental 
                      yields may differ significantly from projected or historical figures.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Third-Party Information</h3>
                    <p>
                      Information about specific properties, developers, projects, and services is provided based on 
                      data received from third-party sources, including developers, official sources, and market reports. 
                      While we endeavor to verify this information, we cannot guarantee its accuracy, completeness, or 
                      timeliness. You should independently verify all material information before making investment decisions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Project Delays & Construction Risks</h3>
                    <p>
                      Real estate projects, particularly off-plan or under-construction properties, are subject to 
                      various risks including construction delays, cost overruns, quality issues, and in rare cases, 
                      project cancellations. We are not responsible for any delays, changes, or issues related to 
                      project completion by developers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Visa & Residency Disclaimer</h3>
                    <p>
                      Information regarding UAE Golden Visa, investor visas, or residency programs is provided for 
                      general awareness only. Visa and residency approvals are subject to UAE government policies, 
                      eligibility criteria, and individual circumstances. We do not guarantee visa approval or residency 
                      status. Policies may change without notice, and you should consult official UAE government sources 
                      or authorized immigration consultants for current information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">No Fiduciary Relationship</h3>
                    <p>
                      Your use of our website or engagement with our services does not create any fiduciary, agency, 
                      partnership, or employment relationship between you and Prime Dubai Properties Group. We act 
                      solely as an information provider and facilitator, not as your agent or representative.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Commission Disclosure</h3>
                    <p>
                      Prime Dubai Properties Group may receive commissions, fees, or other compensation from property 
                      developers, service providers, or other third parties for referrals or successful transactions. 
                      This commercial relationship does not influence our commitment to provide you with objective 
                      information and assistance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">FEMA Compliance</h3>
                    <p>
                      Indian residents investing in overseas real estate must comply with the Foreign Exchange Management 
                      Act (FEMA) and Reserve Bank of India (RBI) guidelines regarding foreign investments. We recommend 
                      consulting with authorized dealers and financial advisors regarding foreign exchange regulations, 
                      remittance limits, and compliance requirements before making any international property investment.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Limitation of Liability</h3>
                    <p>
                      Prime Dubai Properties Group shall not be held liable for any losses, damages, costs, or expenses 
                      (including but not limited to financial losses, loss of profits, or consequential damages) arising 
                      from your reliance on information provided through our website or services, investment decisions 
                      made based on such information, actions or omissions of third-party developers or service providers, 
                      or market fluctuations affecting property values.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Market Fluctuation</h3>
                    <p>
                      Real estate markets are subject to various economic, political, and social factors that can cause 
                      significant fluctuations in property values and rental returns. We cannot predict or control these 
                      market movements, and you should be prepared for the possibility of both gains and losses on your 
                      investment.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Important Notice Box */}
          <div className="mt-8 md:mt-12 p-4 md:p-6 bg-primary/10 border border-primary/30 rounded-lg">
            <h3 className="text-base md:text-lg font-display font-semibold text-foreground mb-2 md:mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              Important Notice
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              By using this website and/or engaging our services, you acknowledge that you have read, understood, 
              and agree to be bound by the Privacy Policy, Terms of Use, and Disclaimers set forth on this page. 
              If you do not agree with any part of these terms, please discontinue use of this website immediately.
            </p>
          </div>

          {/* Contact & Last Updated */}
          <div className="mt-6 md:mt-8 text-center text-xs md:text-sm text-muted-foreground">
            <p className="mb-2">
              For questions about these policies, please contact us at{' '}
              <a href="mailto:info@primedubaiproperties.in" className="text-primary hover:underline">
                info@primedubaiproperties.in
              </a>
            </p>
            <p>
              <strong>Last Updated:</strong> December 31, 2024
            </p>
            <p className="mt-4">
              Prime Dubai Properties Group<br /><br />
              <strong>Coimbatore:</strong> Lajapathi Roy Street, Ram Nagar Main, Ram Nagar, Gandhipuram, Coimbatore, Tamil Nadu 641009<br />
              <strong>Chennai:</strong> Flat No. 12, Dhanalakshmi Apartment, Door No.74, 1st Avenue, Ashok Nagar, Chennai - 600083
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalPage;
