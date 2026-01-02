import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Form validation schema
const formSchema = z.object({
  purpose: z.string().min(1),
  budget: z.string().min(1),
  timeline: z.string().min(1),
  propertyType: z.string().min(1),
  location: z.string().min(1),
  experience: z.string().min(1),
  decisionAuthority: z.string().min(1),
  name: z.string().min(2),
  city: z.string().min(1),
  whatsapp: z.string().min(1),
  email: z.string().email().optional(),
  callTime: z.string().min(1),
  finalRequest: z.string().min(1),
  leadScore: z.string().optional(),
});

// Helper function to get label from value
const getLabel = (value, options) => {
  const option = options.find(opt => opt.value === value);
  return option ? option.label : value;
};

// Email template for company notification
const getCompanyEmailHtml = (data) => {
  const firstName = data.name.split(' ')[0] || data.name;
  
  // Get human-readable labels
  const purposeLabels = {
    'roi': '💰 High rental income / ROI',
    'second-home': '🏠 Second home for family',
    'relocation': '✈️ Relocation to UAE',
    'business': '🏢 Business expansion',
    'golden-visa': '🛂 Golden Visa / residency',
    'exploring': '🔍 Exploring options'
  };
  
  const budgetLabels = {
    'below-7l': 'Below AED 7,00,000 (₹1.6 Cr)',
    '7l-10l': 'AED 7,00,000 – 10,00,000 (₹1.6-2.3 Cr)',
    '10l-20l': 'AED 10,00,000 – 20,00,000 (₹2.3-4.5 Cr)',
    '20l-50l': 'AED 20,00,000 – 50,00,000 (₹4.5-11 Cr)',
    '50l+': 'AED 50,00,000+ (₹11+ Cr)',
    'not-sure': 'Not sure yet'
  };
  
  const timelineLabels = {
    '30-days': '⚡ Within 30 days',
    '1-3-months': '📅 1–3 months',
    '3-6-months': '🗓️ 3–6 months',
    '6-12-months': '📆 6–12 months',
    'researching': '📚 Just researching'
  };
  
  const propertyTypeLabels = {
    'ready': '🔑 Ready property (immediate use or rent)',
    'off-plan': '🏗️ Off-plan (payment plans, appreciation)',
    'both': '🤝 Open to both'
  };
  
  const locationLabels = {
    'dubai': '🌆 Dubai',
    'abu-dhabi': '🏛️ Abu Dhabi',
    'open': '🗺️ Open to UAE options',
    'guidance': '🧭 Not sure – need guidance'
  };
  
  const experienceLabels = {
    'overseas': '✅ Yes, already own overseas property',
    'uae': '🇦🇪 Yes, within UAE',
    'first-time': '🆕 No, this is my first international property'
  };
  
  const decisionLabels = {
    'myself': '👤 Myself',
    'spouse': '👫 Myself + spouse',
    'family': '👨‍👩‍👧‍👦 Family members',
    'partners': '🤝 Business partners'
  };
  
  const finalRequestLabels = {
    'property-options': '📋 Property options within my budget',
    'roi-estimate': '📊 Rental income & ROI estimate',
    'golden-visa': '🛂 Golden Visa guidance',
    'relocation': '🏡 Relocation & lifestyle advice',
    'expert': '💬 Talk to an expert before deciding'
  };

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Dubai Property Inquiry - Prime Dubai Properties</title>
  </head>
  <body style="margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; color: #222; background-color: #fff; line-height: 1.5; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="email-wrapper" style="background-color: #eeeeee; padding-top: 60px; padding-bottom: 60px; padding-left: 0; padding-right: 0; width: 100%; max-width: 1920px; margin: 0 auto;">
      <tr>
        <td align="center" style="padding: 0;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" class="email-content" style="background-color: #ffffff; max-width: 600px; margin-top: 0; margin-bottom: 0; margin-left: auto; margin-right: auto; padding-top: 40px; padding-bottom: 40px; padding-left: 40px; padding-right: 40px; box-shadow: 0px 0.5px 1px 0px rgba(0, 0, 0, 0.25); border-radius: 12px;">
            <tr>
              <td align="center" style="padding: 0; text-align: center;">
                <a href="https://www.primedubaiproperties.in" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none;">
                  <img src="https://images.pepagora.com/dubaiprimeproperty/logo/primeDubai.png" width="129" height="80" alt="Prime Dubai Properties Logo" style="display: block; margin: 0 auto 24px; border: 0; max-width: 129px; width: 100%; height: auto;">
                </a>
              </td>
            </tr>
            <tr style="padding-top: 8px; padding-bottom: 8px; padding-left: 0; padding-right: 0;">
              <td style="padding-top: 16px; padding-bottom: 8px; padding-left: 0; padding-right: 0;">
                <h2 style="font-weight: 600; font-size: 14px; line-height: 100%; padding: 0 0 12px 0; color: #231f20; margin: 0;">
                  New Dubai Property Inquiry Received
                </h2>
              </td>
            </tr>
            <tr style="padding-top: 8px; padding-bottom: 8px; padding-left: 0; padding-right: 0;">
              <td>
                <p style="font-weight: 400; font-size: 14px; line-height: 150%; color: #616161; margin: 0; padding-bottom: 10px;">
                  A new property inquiry has been submitted through the website. Please review the details below and follow up accordingly.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 16px; padding-bottom: 0px; padding-left: 0; padding-right: 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr style="background-color: #F5F5F5;">
                    <td style="padding-top: 12px; padding-bottom: 12px; padding-left: 12px; padding-right: 12px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 0; margin-bottom: 8px;">
                              <tr>
                                <td style="vertical-align: middle; padding-right: 5px; font-size: 18px; line-height: 1;">
                                  👤
                                </td>
                                <td style="vertical-align: middle; padding-left: 6px; font-size: 14px; font-weight: 700; color: #212121; line-height: 150%; padding: 0;">
                                  ${data.name}
                                </td>
                              </tr>
                            </table>
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 0; margin-bottom: 16px;">
                              <tr>
                                <td style="vertical-align: middle; padding-right: 5px; font-size: 18px; line-height: 1;">
                                  📍
                                </td>
                                <td style="vertical-align: middle; padding-left: 6px; font-size: 14px; font-weight: 700; color: #212121; line-height: 150%; padding: 0;">
                                  ${data.city}
                                </td>
                              </tr>
                            </table>
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding: 0;">
                              <tr>
                                <td style="vertical-align: middle; padding-right: 5px;">
                                  <img src="https://images.pepagora.com/pep-emailers/assets/img/phone.png" alt="Phone" width="18" style="display: block;">
                                </td>
                                <td style="vertical-align: middle; padding-left: 6px; font-size: 12px; font-weight: 600; color: #212121; line-height: 150%; padding: 0;">
                                  ${data.whatsapp}
                                </td>
                              </tr>
                            </table>
                            ${data.email ? `
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0; padding-top: 4px; padding-bottom: 16px;">
                              <tr>
                                <td style="vertical-align: middle; padding-right: 5px;">
                                  <img src="https://images.pepagora.com/pep-emailers/assets/img/email.png" alt="Email" width="18" style="display: block;">
                                </td>
                                <td style="vertical-align: middle; padding-left: 6px; font-size: 12px; font-weight: 500; color: #212121; line-height: 150%; padding: 0;">
                                  ${data.email}
                                </td>
                              </tr>
                            </table>
                            ` : ''}
                            <h3 style="font-size: 14px; font-weight: 600; line-height: 24px; color: #212121; margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0;">
                              Investment Purpose:
                            </h3>
                            <p style="font-size: 14px; font-weight: 400; line-height: 150%; color: #616161; margin-top: 0; margin-bottom: 4px; margin-left: 0; margin-right: 0; padding: 0;">
                              ${purposeLabels[data.purpose] || data.purpose}
                            </p>
                            <h3 style="font-size: 14px; font-weight: 600; line-height: 24px; color: #212121; margin-top: 16px; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0;">
                              Budget Range:
                            </h3>
                            <p style="font-size: 14px; font-weight: 400; line-height: 150%; color: #616161; margin-top: 0; margin-bottom: 4px; margin-left: 0; margin-right: 0; padding: 0;">
                              ${budgetLabels[data.budget] || data.budget}
                            </p>
                            <h3 style="font-size: 14px; font-weight: 600; line-height: 24px; color: #212121; margin-top: 16px; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0;">
                              Timeline:
                            </h3>
                            <p style="font-size: 14px; font-weight: 400; line-height: 150%; color: #616161; margin-top: 0; margin-bottom: 4px; margin-left: 0; margin-right: 0; padding: 0;">
                              ${timelineLabels[data.timeline] || data.timeline}
                            </p>
                            <h3 style="font-size: 14px; font-weight: 600; line-height: 24px; color: #212121; margin-top: 16px; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0;">
                              Property Type:
                            </h3>
                            <p style="font-size: 14px; font-weight: 400; line-height: 150%; color: #616161; margin-top: 0; margin-bottom: 4px; margin-left: 0; margin-right: 0; padding: 0;">
                              ${propertyTypeLabels[data.propertyType] || data.propertyType}
                            </p>
                            <h3 style="font-size: 14px; font-weight: 600; line-height: 24px; color: #212121; margin-top: 16px; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0;">
                              Preferred Location:
                            </h3>
                            <p style="font-size: 14px; font-weight: 400; line-height: 150%; color: #616161; margin-top: 0; margin-bottom: 4px; margin-left: 0; margin-right: 0; padding: 0;">
                              ${locationLabels[data.location] || data.location}
                            </p>
                            <h3 style="font-size: 14px; font-weight: 600; line-height: 24px; color: #212121; margin-top: 16px; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0;">
                              Best Time to Call:
                            </h3>
                            <p style="font-size: 14px; font-weight: 400; line-height: 150%; color: #616161; margin-top: 0; margin-bottom: 4px; margin-left: 0; margin-right: 0; padding: 0;">
                              ${data.callTime}
                            </p>
                            <h3 style="font-size: 14px; font-weight: 600; line-height: 24px; color: #212121; margin-top: 16px; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0;">
                              Experience:
                            </h3>
                            <p style="font-size: 14px; font-weight: 400; line-height: 150%; color: #616161; margin-top: 0; margin-bottom: 4px; margin-left: 0; margin-right: 0; padding: 0;">
                              ${experienceLabels[data.experience] || data.experience}
                            </p>
                            <h3 style="font-size: 14px; font-weight: 600; line-height: 24px; color: #212121; margin-top: 16px; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0;">
                              Decision Authority:
                            </h3>
                            <p style="font-size: 14px; font-weight: 400; line-height: 150%; color: #616161; margin-top: 0; margin-bottom: 4px; margin-left: 0; margin-right: 0; padding: 0;">
                              ${decisionLabels[data.decisionAuthority] || data.decisionAuthority}
                            </p>
                            <h3 style="font-size: 14px; font-weight: 600; line-height: 24px; color: #212121; margin-top: 16px; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0;">
                              Request:
                            </h3>
                            <p style="font-size: 14px; font-weight: 400; line-height: 150%; color: #616161; margin-top: 0; margin-bottom: 4px; margin-left: 0; margin-right: 0; padding: 0;">
                              ${finalRequestLabels[data.finalRequest] || data.finalRequest}
                            </p>
                            ${data.leadScore ? `
                            <h3 style="font-size: 14px; font-weight: 600; line-height: 24px; color: #212121; margin-top: 16px; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0;">
                              Lead Score:
                            </h3>
                            <p style="font-size: 14px; font-weight: 700; line-height: 150%; color: ${data.leadScore === 'HOT' ? '#d32f2f' : data.leadScore === 'WARM' ? '#f57c00' : '#1976d2'}; margin-top: 0; margin-bottom: 4px; margin-left: 0; margin-right: 0; padding: 0;">
                              ${data.leadScore}
                            </p>
                            ` : ''}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 0; padding-bottom: 16px; padding-left: 0; padding-right: 0;">
                <h2 style="font-size: 14px; font-weight: 500; line-height: 20px; padding-top: 0; padding-bottom: 0; padding-left: 0; padding-right: 0; margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0; color: #616161;">
                  Please respond as early as possible. ${data.leadScore === 'HOT' ? 'This is a priority lead - contact within 24 hours.' : ''}
                </h2>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 24px; padding-bottom: 40px; padding-left: 5px; padding-right: 5px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td valign="top" style="padding: 0; vertical-align: top;">
                      <p style="font-size: 14px; font-weight: 700; line-height: 140%; margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0;">
                        The Prime Dubai Properties System.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td valign="top" style="padding-top: 16px; padding-bottom: 0; padding-left: 0; padding-right: 0; vertical-align: top;">
                      <p style="font-size: 14px; font-weight: 400; line-height: 140%; margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0;">
                        <a href="https://www.primedubaiproperties.in" target="_blank" rel="noopener noreferrer" style="color: #222; text-decoration: underline;">www.primedubaiproperties.in</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 0;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" class="email-content" style="max-width: 600px; margin-top: 0; margin-bottom: 0; margin-left: auto; margin-right: auto; padding-top: 24px; padding-bottom: 0; padding-left: 0; padding-right: 0;">
            <tr>
              <td style="font-size: 10px; font-weight: 300; line-height: 122%; color: #616161; padding: 0;">
                <p style="padding-top: 17px; padding-bottom: 0; padding-left: 0; padding-right: 0; font-size: 12px; font-weight: 400; line-height: 140%; color: #58595d; margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0; text-align: center;">
                  Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} | © 2025 Prime Dubai Properties Group. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <style type="text/css">
      @media only screen and (max-width: 600px) {
        .email-wrapper { width: 100% !important; max-width: 100% !important; }
        .email-content { width: 100% !important; max-width: 95% !important; padding-left: 20px !important; padding-right: 20px !important; }
        .email-column { width: 100% !important; max-width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; }
        table td[class="email-column"] { width: 100% !important; display: block !important; padding-left: 0 !important; padding-right: 0 !important; }
        .btns-content { padding-left: 20px !important; padding-right: 20px !important; }
      }
      @media only screen and (max-width: 480px) {
        .email-content { padding-left: 15px !important; padding-right: 15px !important; }
      }
    </style>
  </body>
</html>`;
};

// Email template for user confirmation
const getConfirmationEmailHtml = (data) => {
  const firstName = data.name.split(' ')[0] || data.name;
  
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank You - Prime Dubai Properties</title>
  </head>
  <body style="margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; color: #222; background-color: #fff; line-height: 1.5; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="email-wrapper" style="background-color: #eeeeee; padding-top: 60px; padding-bottom: 60px; padding-left: 0; padding-right: 0; width: 100%; max-width: 1920px; margin: 0 auto;">
      <tr>
        <td align="center" style="padding: 0;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" class="email-content" style="background-color: #ffffff; max-width: 600px; margin-top: 0; margin-bottom: 0; margin-left: auto; margin-right: auto; padding-top: 40px; padding-bottom: 40px; padding-left: 40px; padding-right: 40px; box-shadow: 0px 0.5px 1px 0px rgba(0, 0, 0, 0.25); border-radius: 12px;">
            <tr>
              <td align="center" style="padding: 0; text-align: center;">
                <a href="https://www.primedubaiproperties.in" target="_blank" rel="noopener noreferrer" style="display: block; text-decoration: none;">
                  <img src="https://images.pepagora.com/dubaiprimeproperty/logo/primeDubai.png" width="129" height="80" alt="Prime Dubai Properties Logo" style="display: block; margin: 0 auto 24px; border: 0; max-width: 129px; width: 100%; height: auto;">
                </a>
              </td>
            </tr>
            <tr style="padding-top: 8px; padding-bottom: 8px; padding-left: 0; padding-right: 0;">
              <td style="padding-top: 16px; padding-bottom: 8px; padding-left: 0; padding-right: 0;">
                <h2 style="font-weight: 600; font-size: 14px; line-height: 100%; padding: 0 0 12px 0; color: #231f20; margin: 0;">
                  Hi ${firstName},
                </h2>
              </td>
            </tr>
            <tr style="padding-top: 8px; padding-bottom: 8px; padding-left: 0; padding-right: 0;">
              <td>
                <p style="font-weight: 400; font-size: 14px; line-height: 150%; color: #616161; margin: 0; padding-bottom: 10px;">
                  Thank you for your interest in Dubai properties! We've received your inquiry and our expert team will contact you ${data.leadScore === 'HOT' ? 'within 24 hours' : 'soon'}.
                </p>
              </td>
            </tr>
            <tr style="padding-top: 8px; padding-bottom: 8px; padding-left: 0; padding-right: 0;">
              <td>
                <p style="font-weight: 400; font-size: 14px; line-height: 150%; color: #616161; margin: 0; padding: 0;">
                  ${data.leadScore === 'HOT' 
                    ? '🔥 <strong>Priority Status:</strong> As a high-priority lead, our Dubai property expert will contact you within 24 hours with curated property options matching your requirements.'
                    : data.leadScore === 'WARM'
                    ? '✨ We will share Dubai property insights and reach out soon to discuss your investment goals.'
                    : '📚 We will send helpful Dubai investment information to support your research and help you make an informed decision.'
                  }
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 24px; padding-bottom: 40px; padding-left: 5px; padding-right: 5px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td valign="top" style="padding: 0; vertical-align: top;">
                      <p style="font-size: 14px; font-weight: 700; line-height: 140%; margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0;">
                        Warmly,
                      </p>
                      <p style="font-size: 14px; font-weight: 400; line-height: 140%; margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0; padding-top: 4px; padding-bottom: 0; padding-left: 0; padding-right: 0;">
                        Prime Dubai Properties Group
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td valign="top" style="padding-top: 16px; padding-bottom: 0; padding-left: 0; padding-right: 0; vertical-align: top;">
                      <p style="font-size: 14px; font-weight: 400; line-height: 140%; margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0; padding: 0;">
                        <a href="https://www.primedubaiproperties.in" target="_blank" rel="noopener noreferrer" style="color: #222; text-decoration: underline;">www.primedubaiproperties.in</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 0;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" class="email-content" style="max-width: 600px; margin-top: 0; margin-bottom: 0; margin-left: auto; margin-right: auto; padding-top: 24px; padding-bottom: 0; padding-left: 0; padding-right: 0;">
            <tr>
              <td style="font-size: 10px; font-weight: 300; line-height: 122%; color: #616161; padding: 0;">
                <p style="padding-top: 17px; padding-bottom: 0; padding-left: 0; padding-right: 0; font-size: 12px; font-weight: 400; line-height: 140%; color: #58595d; margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0; text-align: center;">
                  © 2025 Prime Dubai Properties Group. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <style type="text/css">
      @media only screen and (max-width: 600px) {
        .email-wrapper { width: 100% !important; max-width: 100% !important; }
        .email-content { width: 100% !important; max-width: 95% !important; padding-left: 20px !important; padding-right: 20px !important; }
        .email-column { width: 100% !important; max-width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; }
        table td[class="email-column"] { width: 100% !important; display: block !important; padding-left: 0 !important; padding-right: 0 !important; }
        .btns-content { padding-left: 20px !important; padding-right: 20px !important; }
      }
      @media only screen and (max-width: 480px) {
        .email-content { padding-left: 15px !important; padding-right: 15px !important; }
      }
    </style>
  </body>
</html>`;
};

// POST endpoint for form submission
app.post('/api/submit-lead', async (req, res) => {
  try {
    const body = req.body;
    
    // Validate the request data
    const validatedData = formSchema.parse(body);
    
    // Validate required environment variables
    const requiredEnvVars = {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
      SENDGRID_FROM_NAME: process.env.SENDGRID_FROM_NAME,
      SENDGRID_FROM_EMAIL: process.env.SENDGRID_FROM_EMAIL,
      RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
    };
    
    const missingVars = Object.entries(requiredEnvVars)
      .filter(([_, value]) => !value)
      .map(([key]) => key);
    
    if (missingVars.length > 0) {
      console.error('Missing required environment variables:', missingVars);
      return res.status(500).json({
        success: false,
        message: 'Server configuration error. Please contact support.',
      });
    }
    
    // Initialize SendGrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    // Send email to the company
    const companyEmailHtml = getCompanyEmailHtml(validatedData);
    
    // Labels for plain text email
    const purposeLabels = {
      'roi': '💰 High rental income / ROI',
      'second-home': '🏠 Second home for family',
      'relocation': '✈️ Relocation to UAE',
      'business': '🏢 Business expansion',
      'golden-visa': '🛂 Golden Visa / residency',
      'exploring': '🔍 Exploring options'
    };
    
    const budgetLabels = {
      'below-7l': 'Below AED 7,00,000 (₹1.6 Cr)',
      '7l-10l': 'AED 7,00,000 – 10,00,000 (₹1.6-2.3 Cr)',
      '10l-20l': 'AED 10,00,000 – 20,00,000 (₹2.3-4.5 Cr)',
      '20l-50l': 'AED 20,00,000 – 50,00,000 (₹4.5-11 Cr)',
      '50l+': 'AED 50,00,000+ (₹11+ Cr)',
      'not-sure': 'Not sure yet'
    };
    
    const timelineLabels = {
      '30-days': '⚡ Within 30 days',
      '1-3-months': '📅 1–3 months',
      '3-6-months': '🗓️ 3–6 months',
      '6-12-months': '📆 6–12 months',
      'researching': '📚 Just researching'
    };
    
    const propertyTypeLabels = {
      'ready': '🔑 Ready property (immediate use or rent)',
      'off-plan': '🏗️ Off-plan (payment plans, appreciation)',
      'both': '🤝 Open to both'
    };
    
    const locationLabels = {
      'dubai': '🌆 Dubai',
      'abu-dhabi': '🏛️ Abu Dhabi',
      'open': '🗺️ Open to UAE options',
      'guidance': '🧭 Not sure – need guidance'
    };
    
    const experienceLabels = {
      'overseas': '✅ Yes, already own overseas property',
      'uae': '🇦🇪 Yes, within UAE',
      'first-time': '🆕 No, this is my first international property'
    };
    
    const decisionLabels = {
      'myself': '👤 Myself',
      'spouse': '👫 Myself + spouse',
      'family': '👨‍👩‍👧‍👦 Family members',
      'partners': '🤝 Business partners'
    };
    
    const finalRequestLabels = {
      'property-options': '📋 Property options within my budget',
      'roi-estimate': '📊 Rental income & ROI estimate',
      'golden-visa': '🛂 Golden Visa guidance',
      'relocation': '🏡 Relocation & lifestyle advice',
      'expert': '💬 Talk to an expert before deciding'
    };
    
    const companyEmailText = `
New Dubai Property Inquiry

Contact Information:
- Name: ${validatedData.name}
- City: ${validatedData.city}
- WhatsApp: ${validatedData.whatsapp}
${validatedData.email ? `- Email: ${validatedData.email}` : ''}
- Best Time to Call: ${validatedData.callTime}

Investment Details:
- Purpose: ${purposeLabels[validatedData.purpose] || validatedData.purpose}
- Budget: ${budgetLabels[validatedData.budget] || validatedData.budget}
- Timeline: ${timelineLabels[validatedData.timeline] || validatedData.timeline}
- Property Type: ${propertyTypeLabels[validatedData.propertyType] || validatedData.propertyType}
- Location: ${locationLabels[validatedData.location] || validatedData.location}

Additional Information:
- Experience: ${experienceLabels[validatedData.experience] || validatedData.experience}
- Decision Authority: ${decisionLabels[validatedData.decisionAuthority] || validatedData.decisionAuthority}
- Request: ${finalRequestLabels[validatedData.finalRequest] || validatedData.finalRequest}
${validatedData.leadScore ? `- Lead Score: ${validatedData.leadScore}` : ''}

Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;
    
    const companyMailOptions = {
      from: {
        name: process.env.SENDGRID_FROM_NAME,
        email: process.env.SENDGRID_FROM_EMAIL,
      },
      to: process.env.RECIPIENT_EMAIL,
      replyTo: validatedData.email || process.env.SENDGRID_FROM_EMAIL,
      subject: `New Enquiry from ${validatedData.name} - www.dubaiprimeproperty.in`,
      text: companyEmailText,
      html: companyEmailHtml,
    };
    
    try {
      await sgMail.send(companyMailOptions);
    } catch (emailError) {
      console.error('Error sending notification email:', emailError);
    }
    
    // Send confirmation email to the user (if email provided)
    if (validatedData.email) {
      const confirmationHtml = getConfirmationEmailHtml(validatedData);
      const confirmationText = `
Thank You for Your Inquiry!

Dear ${validatedData.name.split(' ')[0]},

Thank you for submitting your Dubai property inquiry. We have received your request and our team will review it shortly.

What happens next?
- Our team will review your requirements
- We'll contact you at ${validatedData.whatsapp} to discuss your property needs
- We'll provide customized property options based on your requirements

If you have any urgent questions, please feel free to contact us.

Best regards,
Prime Dubai Properties Group
      `;
      
      const confirmationMailOptions = {
        from: {
          name: process.env.SENDGRID_FROM_NAME,
          email: process.env.SENDGRID_FROM_EMAIL,
        },
        to: validatedData.email,
        subject: 'Thank you - www.dubaiprimeproperty.in',
        text: confirmationText,
        html: confirmationHtml,
      };
      
      try {
        await sgMail.send(confirmationMailOptions);
      } catch (emailError) {
        console.error('Error sending confirmation email:', emailError);
      }
    }
    
    return res.status(200).json({
      success: true,
      message: 'Inquiry submitted successfully. Our team will contact you soon.',
    });
    
  } catch (error) {
    console.error('Error submitting inquiry:', {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Invalid form data',
        errors: error.issues,
      });
    }
    
    if (error instanceof Error) {
      if (error.message.includes('ECONNREFUSED') || error.message.includes('ETIMEDOUT')) {
        return res.status(503).json({
          success: false,
          message: 'Email service unavailable. Please try again later or contact support.',
        });
      }
      
      if (error.message.includes('Invalid') || error.message.includes('authentication') || error.message.includes('API key')) {
        console.error('SendGrid authentication failed - check API key');
        return res.status(500).json({
          success: false,
          message: 'Server configuration error. Please contact support.',
        });
      }
    }
    
    return res.status(500).json({
      success: false,
      message: 'Failed to submit inquiry. Please try again or contact support.',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
});

