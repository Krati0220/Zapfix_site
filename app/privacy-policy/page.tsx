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
    id: "information-collected",
    number: "01",
    title: "Information We Collect",
    content: (
      <div className="space-y-5">
        <LH>Personal Information</LH>
        <LP>When you use ZapFix, we may collect:</LP>
        <LUL>
          <LLI>Name</LLI>
          <LLI>Phone number</LLI>
          <LLI>Email address</LLI>
          <LLI>Profile information</LLI>
          <LLI>Service address</LLI>
        </LUL>

        <LH>Location Information</LH>
        <LP>We may collect your device location to:</LP>
        <LUL>
          <LLI>Match you with nearby service professionals</LLI>
          <LLI>Improve service availability</LLI>
          <LLI>Provide location-based services</LLI>
        </LUL>
        <LP>Location data is collected only with your permission.</LP>

        <LH>Photos and Videos</LH>
        <LP>
          Users may upload photos and videos of appliances or service issues for:
        </LP>
        <LUL>
          <LLI>AI-powered diagnosis</LLI>
          <LLI>Service request creation</LLI>
          <LLI>Communication with professionals</LLI>
        </LUL>

        <LH>Device and Usage Information</LH>
        <LP>We may automatically collect:</LP>
        <LUL>
          <LLI>Device type</LLI>
          <LLI>Operating system</LLI>
          <LLI>App version</LLI>
          <LLI>IP address</LLI>
          <LLI>Diagnostic and crash information</LLI>
          <LLI>
            Push notification tokens (to deliver job and service alerts)
          </LLI>
        </LUL>

        <LH>Professional Information</LH>
        <LP>For service professionals, we may collect:</LP>
        <LUL>
          <LLI>Identity verification information</LLI>
          <LLI>
            Aadhaar or government-issued identification (where applicable)
          </LLI>
          <LLI>Bank account details (for payouts)</LLI>
          <LLI>Skill assessment information</LLI>
          <LLI>Business information</LLI>
        </LUL>
      </div>
    ),
  },
  {
    id: "how-we-use",
    number: "02",
    title: "How We Use Information",
    content: (
      <div className="space-y-4">
        <LP>We use information to:</LP>
        <LUL>
          <LLI>Provide ZapFix services</LLI>
          <LLI>Generate AI-powered appliance diagnostics</LLI>
          <LLI>Connect users with service professionals</LLI>
          <LLI>Process bookings and payments</LLI>
          <LLI>Verify professional accounts</LLI>
          <LLI>Send service updates and push notifications</LLI>
          <LLI>Improve platform performance</LLI>
          <LLI>Prevent fraud and abuse</LLI>
          <LLI>Provide customer support</LLI>
          <LLI>Comply with legal obligations</LLI>
        </LUL>
      </div>
    ),
  },
  {
    id: "ai-diagnosis",
    number: "03",
    title: "AI Diagnosis",
    content: (
      <div className="space-y-4">
        <LP>
          ZapFix may use artificial intelligence and machine learning systems to
          analyze uploaded images, videos, and descriptions of appliance issues.
        </LP>
        <LP>
          <LStrong>AI-generated results are informational only</LStrong> and
          should not be considered professional technical advice.
        </LP>
        <LP>
          Actual diagnoses and repairs may vary depending on the condition of the
          appliance.
        </LP>
      </div>
    ),
  },
  {
    id: "sharing",
    number: "04",
    title: "Sharing of Information",
    content: (
      <div className="space-y-5">
        <LP>We may share information with:</LP>

        <LH>Service Professionals</LH>
        <LP>
          Relevant information may be shared with professionals assigned to your
          service request, including:
        </LP>
        <LUL>
          <LLI>Name</LLI>
          <LLI>Contact information</LLI>
          <LLI>Service address</LLI>
          <LLI>Uploaded photos or videos</LLI>
          <LLI>Service details</LLI>
        </LUL>

        <LH>Service Providers</LH>
        <LP>
          We may share information with trusted third-party providers that help
          us operate our services, including:
        </LP>
        <LUL>
          <LLI>Cloud hosting providers</LLI>
          <LLI>Analytics providers</LLI>
          <LLI>Payment processors (such as Cashfree)</LLI>
          <LLI>Identity verification providers</LLI>
        </LUL>

        <LH>Legal Requirements</LH>
        <LP>
          We may disclose information if required by law or to protect the
          rights, safety, and security of ZapFix, our users, or others.{" "}
          <LStrong>We never sell your personal information.</LStrong>
        </LP>
      </div>
    ),
  },
  {
    id: "data-security",
    number: "05",
    title: "Data Security",
    content: (
      <div className="space-y-4">
        <LP>
          We implement reasonable security measures to protect user information
          from unauthorized access, disclosure, alteration, or destruction.
        </LP>
        <LP>
          However, no method of electronic transmission or storage is completely
          secure, and we cannot guarantee absolute security.
        </LP>
      </div>
    ),
  },
  {
    id: "data-retention",
    number: "06",
    title: "Data Retention",
    content: (
      <div className="space-y-4">
        <LP>We retain information only as long as necessary to:</LP>
        <LUL>
          <LLI>Provide our services</LLI>
          <LLI>Comply with legal obligations</LLI>
          <LLI>Resolve disputes</LLI>
          <LLI>Enforce our agreements</LLI>
        </LUL>
        <LP>
          Users may request deletion of their account, subject to applicable
          legal requirements.
        </LP>
      </div>
    ),
  },
  {
    id: "your-rights",
    number: "07",
    title: "Your Rights",
    content: (
      <div className="space-y-4">
        <LP>
          Depending on applicable laws, including India&apos;s{" "}
          <LStrong>
            Digital Personal Data Protection Act, 2023
          </LStrong>
          , users may have the right to:
        </LP>
        <LUL>
          <LLI>Access their information</LLI>
          <LLI>Update inaccurate information</LLI>
          <LLI>Request deletion of information</LLI>
          <LLI>Withdraw certain permissions</LLI>
          <LLI>Raise a grievance regarding their data</LLI>
        </LUL>
        <LP>
          Requests may be submitted through our support channels.
        </LP>
      </div>
    ),
  },
  {
    id: "childrens-privacy",
    number: "08",
    title: "Children's Privacy",
    content: (
      <div className="space-y-4">
        <LP>
          ZapFix is not intended for individuals under{" "}
          <LStrong>18 years of age</LStrong>.
        </LP>
        <LP>
          We do not knowingly collect personal information from children.
        </LP>
      </div>
    ),
  },
  {
    id: "third-party",
    number: "09",
    title: "Third-Party Services",
    content: (
      <div className="space-y-4">
        <LP>ZapFix may integrate with third-party services such as:</LP>
        <LUL>
          <LLI>Payment providers</LLI>
          <LLI>Mapping services</LLI>
          <LLI>Authentication providers</LLI>
          <LLI>Analytics services</LLI>
        </LUL>
        <LP>
          These services may have their own privacy policies governing their use
          of information.
        </LP>
      </div>
    ),
  },
  {
    id: "changes",
    number: "10",
    title: "Changes to This Policy",
    content: (
      <div className="space-y-4">
        <LP>
          We may update this Privacy Policy from time to time.
        </LP>
        <LP>
          Changes will be posted within the application or on our website, along
          with an updated revision date.
        </LP>
      </div>
    ),
  },
  {
    id: "contact",
    number: "11",
    title: "Contact Us",
    content: (
      <div className="space-y-4">
        <LP>
          For questions regarding this Privacy Policy, or to exercise your data
          rights, please contact our Grievance Officer:
        </LP>
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
          By using ZapFix, you acknowledge that you have read and understood
          this Privacy Policy.
        </LP>
      </div>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      badge="Privacy Policy"
      lastUpdated="Last Updated: June 12, 2026"
      otherLegal={{ label: "Read our Terms & Conditions", href: "/terms" }}
      intro={
        <>
          Welcome to ZapFix. This Privacy Policy explains how we collect, use,
          disclose, and protect your information when you use the ZapFix mobile
          application and related services. By using ZapFix, you agree to the
          collection and use of information in accordance with this Privacy Policy.
        </>
      }
      sections={sections}
    />
  );
}
