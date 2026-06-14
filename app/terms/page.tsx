"use client";

import {
  LegalPage,
  LegalSection,
  LP,
  LH,
  LUL,
  LLI,
  LStrong,
  LLink,
} from "@/components/LegalPage";

const sections: LegalSection[] = [
  {
    id: "about",
    number: "01",
    title: "About ZapFix",
    content: (
      <div className="space-y-4">
        <LP>ZapFix is a technology platform that helps users:</LP>
        <LUL>
          <LLI>Upload appliance photos and videos</LLI>
          <LLI>Receive AI-assisted issue diagnostics</LLI>
          <LLI>Connect with independent service professionals</LLI>
          <LLI>Request home repair and maintenance services</LLI>
        </LUL>
        <LP>
          ZapFix acts solely as a platform facilitating connections between users
          and independent service professionals.{" "}
          <LStrong>
            ZapFix is not a service provider and does not itself perform repairs.
          </LStrong>
        </LP>
      </div>
    ),
  },
  {
    id: "eligibility",
    number: "02",
    title: "Eligibility",
    content: (
      <div className="space-y-4">
        <LP>
          You must be at least <LStrong>18 years old</LStrong> and legally
          capable of entering into a binding contract under applicable law to use
          ZapFix.
        </LP>
        <LP>By using the platform, you represent that:</LP>
        <LUL>
          <LLI>
            You are legally capable of entering into a binding agreement.
          </LLI>
          <LLI>All information provided is accurate and complete.</LLI>
        </LUL>
      </div>
    ),
  },
  {
    id: "user-accounts",
    number: "03",
    title: "User Accounts",
    content: (
      <div className="space-y-4">
        <LP>
          Users may be required to create an account. You are responsible for:
        </LP>
        <LUL>
          <LLI>Maintaining account security</LLI>
          <LLI>Protecting your login credentials</LLI>
          <LLI>All activities performed through your account</LLI>
        </LUL>
        <LP>
          You must immediately notify ZapFix of any unauthorized use of your
          account.
        </LP>
      </div>
    ),
  },
  {
    id: "ai-disclaimer",
    number: "04",
    title: "AI Diagnosis Disclaimer",
    content: (
      <div className="space-y-4">
        <LP>
          ZapFix may provide AI-generated appliance diagnostics based on photos,
          videos, and user-provided information.
        </LP>
        <LP>AI-generated results:</LP>
        <LUL>
          <LLI>Are estimates only</LLI>
          <LLI>Are not guaranteed to be accurate</LLI>
          <LLI>Should not be considered professional technical advice</LLI>
          <LLI>May differ from actual inspection results</LLI>
        </LUL>
        <LP>
          You should rely on qualified professionals for final repair decisions.{" "}
          <LStrong>
            ZapFix accepts no liability for decisions made on the basis of
            AI-generated output.
          </LStrong>
        </LP>
      </div>
    ),
  },
  {
    id: "service-professionals",
    number: "05",
    title: "Service Professionals",
    content: (
      <div className="space-y-4">
        <LP>
          Service professionals available through ZapFix are{" "}
          <LStrong>independent service providers</LStrong> and are not
          employees, agents, or partners of ZapFix. No agency, partnership,
          joint venture, or employment relationship is created between ZapFix
          and any professional or user.
        </LP>
        <LP>While ZapFix may perform verification and screening processes:</LP>
        <LUL>
          <LLI>ZapFix does not guarantee service quality</LLI>
          <LLI>ZapFix does not guarantee professional performance</LLI>
          <LLI>
            ZapFix is not responsible for the acts or omissions of independent
            professionals
          </LLI>
        </LUL>
        <LP>
          Users are encouraged to review ratings and service details before
          booking.
        </LP>
      </div>
    ),
  },
  {
    id: "pricing",
    number: "06",
    title: "Pricing and Payments",
    content: (
      <div className="space-y-4">
        <LP>Service prices may vary depending on:</LP>
        <LUL>
          <LLI>Appliance type</LLI>
          <LLI>Issue complexity</LLI>
          <LLI>Parts required</LLI>
          <LLI>Location</LLI>
          <LLI>Professional availability</LLI>
        </LUL>
        <LP>
          Any estimates displayed by ZapFix are indicative only and may not
          represent final charges. Payments processed through third-party payment
          providers (such as Cashfree) are subject to their own terms and
          policies.
        </LP>
      </div>
    ),
  },
  {
    id: "cancellations",
    number: "07",
    title: "Cancellations and Refunds",
    content: (
      <div className="space-y-4">
        <LP>
          Cancellation and refund eligibility may vary depending on:
        </LP>
        <LUL>
          <LLI>Service status</LLI>
          <LLI>Time of cancellation</LLI>
          <LLI>The extent of professional engagement</LLI>
        </LUL>
        <LP>
          Refund decisions are made at ZapFix&apos;s reasonable discretion in
          accordance with ZapFix&apos;s refund policies and applicable laws.
          Cancellation fees may apply where a professional has already been
          dispatched or has commenced work.
        </LP>
      </div>
    ),
  },
  {
    id: "user-responsibilities",
    number: "08",
    title: "User Responsibilities",
    content: (
      <div className="space-y-4">
        <LP>You agree not to:</LP>
        <LUL>
          <LLI>Provide false or misleading information</LLI>
          <LLI>Misuse the platform</LLI>
          <LLI>Harass service professionals or other users</LLI>
          <LLI>Upload illegal, harmful, or misleading content</LLI>
          <LLI>
            Attempt to interfere with or disrupt platform operations
          </LLI>
        </LUL>
        <LP>
          ZapFix reserves the right to suspend or terminate accounts that
          violate these Terms.
        </LP>
      </div>
    ),
  },
  {
    id: "indemnification",
    number: "09",
    title: "Indemnification",
    content: (
      <div className="space-y-4">
        <LP>
          You agree to indemnify, defend, and hold harmless ZapFix, its
          founders, employees, and affiliates from and against any claims,
          damages, losses, liabilities, and expenses (including reasonable legal
          fees) arising out of or related to:
        </LP>
        <LUL>
          <LLI>Your use of the platform</LLI>
          <LLI>Your violation of these Terms</LLI>
          <LLI>Your violation of any rights of a third party</LLI>
        </LUL>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    number: "10",
    title: "Intellectual Property",
    content: (
      <div className="space-y-4">
        <LP>
          All content, branding, logos, software, designs, and technology
          associated with ZapFix remain the{" "}
          <LStrong>
            exclusive property of ZapFix or its licensors
          </LStrong>
          .
        </LP>
        <LP>
          You may not copy, distribute, reverse engineer, or reproduce any part
          of the platform without prior written authorization.
        </LP>
      </div>
    ),
  },
  {
    id: "warranty-disclaimer",
    number: "11",
    title: "Disclaimer of Warranties",
    content: (
      <div className="space-y-4">
        <LP>
          The platform and all services are provided on an{" "}
          <LStrong>&quot;as is&quot;</LStrong> and{" "}
          <LStrong>&quot;as available&quot;</LStrong> basis, without warranties
          of any kind, whether express or implied, including but not limited to
          warranties of merchantability, fitness for a particular purpose, and
          non-infringement.
        </LP>
        <LP>
          ZapFix does not warrant that the platform will be uninterrupted,
          error-free, or secure.
        </LP>
      </div>
    ),
  },
  {
    id: "liability",
    number: "12",
    title: "Limitation of Liability",
    content: (
      <div className="space-y-4">
        <LP>
          To the maximum extent permitted by law, ZapFix shall not be liable
          for:
        </LP>
        <LUL>
          <LLI>Service delays</LLI>
          <LLI>Repair outcomes</LLI>
          <LLI>Property damage caused by third-party professionals</LLI>
          <LLI>
            Indirect, incidental, special, or consequential damages
          </LLI>
          <LLI>Loss of profits, data, or business opportunities</LLI>
        </LUL>
        <LP>
          You acknowledge that services are performed by independent
          professionals. In all cases, ZapFix&apos;s total aggregate liability
          arising out of or relating to the platform or these Terms shall not
          exceed the total service fees actually paid by you to ZapFix for the
          specific service giving rise to the claim during the three (3) months
          preceding the event.
        </LP>
      </div>
    ),
  },
  {
    id: "availability",
    number: "13",
    title: "Availability of Services",
    content: (
      <div className="space-y-4">
        <LP>ZapFix does not guarantee:</LP>
        <LUL>
          <LLI>Continuous availability</LLI>
          <LLI>Availability in all locations</LLI>
          <LLI>Availability of specific professionals</LLI>
        </LUL>
        <LP>
          Services may be modified, suspended, or discontinued at any time
          without notice and without liability.
        </LP>
      </div>
    ),
  },
  {
    id: "termination",
    number: "14",
    title: "Termination",
    content: (
      <div className="space-y-4">
        <LP>
          ZapFix may suspend or terminate your access at its discretion,
          including where:
        </LP>
        <LUL>
          <LLI>These Terms are violated</LLI>
          <LLI>Fraudulent activity is detected</LLI>
          <LLI>Legal compliance requires action</LLI>
        </LUL>
        <LP>
          You may stop using the platform at any time. Provisions relating to
          intellectual property, indemnification, disclaimers, and limitation of
          liability survive termination.
        </LP>
      </div>
    ),
  },
  {
    id: "changes",
    number: "15",
    title: "Changes to Terms",
    content: (
      <div className="space-y-4">
        <LP>
          ZapFix may update these Terms periodically. Updated versions will be
          published on the website and/or application.
        </LP>
        <LP>
          Your continued use of ZapFix after updates constitutes acceptance of
          the revised Terms.
        </LP>
      </div>
    ),
  },
  {
    id: "governing-law",
    number: "16",
    title: "Governing Law & Dispute Resolution",
    content: (
      <div className="space-y-4">
        <LP>
          These Terms shall be governed by and interpreted in accordance with
          the <LStrong>laws of India</LStrong>.
        </LP>
        <LP>
          Any dispute arising out of or relating to these Terms shall first be
          attempted to be resolved amicably, and failing that, shall be referred
          to arbitration under the{" "}
          <LStrong>
            Arbitration and Conciliation Act, 1996
          </LStrong>
          , seated in India, conducted in English by a sole arbitrator appointed
          by ZapFix.
        </LP>
        <LP>
          Subject to the above, the courts located in India shall have exclusive
          jurisdiction.
        </LP>
      </div>
    ),
  },
  {
    id: "contact",
    number: "17",
    title: "Contact Information",
    content: (
      <div className="space-y-4">
        <LP>For questions regarding these Terms, contact:</LP>
        <LUL>
          <LLI>
            <LStrong>Company:</LStrong> ZapFix
          </LLI>
          <LLI>
            <LStrong>Email:</LStrong>{" "}
            <LLink href="mailto:support.zapfix@gmail.com">
              support.zapfix@gmail.com
            </LLink>
          </LLI>
          <LLI>
            <LStrong>Website:</LStrong>{" "}
            <LLink href="https://zapfix.vercel.app/">
              https://zapfix.vercel.app/
            </LLink>
          </LLI>
        </LUL>
        <LP>
          By accessing or using ZapFix, you acknowledge that you have read,
          understood, and agreed to these Terms and Conditions.
        </LP>
      </div>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      badge="Terms & Conditions"
      lastUpdated="Last Updated: June 12, 2026"
      otherLegal={{ label: "Read our Privacy Policy", href: "/privacy-policy" }}
      intro={
        <>
          Welcome to ZapFix. These Terms and Conditions govern your access to
          and use of the ZapFix mobile application, website, and related
          services. By accessing or using ZapFix, you agree to be bound by
          these Terms.
        </>
      }
      sections={sections}
    />
  );
}
