import React from 'react';
import { motion } from 'framer-motion';
import SEO from "./SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Privacy Policy"
        description="Learn how Bengaluru Fitness Club collects, uses, and protects your personal information. Your privacy is our priority."
        keywords="privacy policy, data protection, gym privacy, bfc privacy"
      />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-bfc-yellow mb-8 uppercase tracking-wide">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Bengaluru Fitness Club ("BFC") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website, use our gym facilities, or communicate with us 
                via WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Information:</strong> Name, phone number, email address, date of birth, and emergency contact details.</li>
                <li><strong>Health Information:</strong> Physical metrics, medical history, and dietary preferences (collected for training/diet plans).</li>
                <li><strong>Usage Data:</strong> Information about your gym visits, class bookings, and website interaction.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p>
                We use the collected information to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Provide and manage your gym membership.</li>
                <li>Create personalized training and diet plans.</li>
                <li>Process payments and manage billing.</li>
                <li>Send important updates via WhatsApp (e.g., gym timings, holiday closures).</li>
                <li>Improve our facilities and services based on member feedback.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
              <p>
                We do not sell or rent your personal information. We may share your data with:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist with payment processing, CRM systems, and communication tools (e.g., Meta/WhatsApp).</li>
                <li><strong>Legal Requirements:</strong> If required by law or to protect our rights and safety.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. WhatsApp Business API</h2>
              <p>
                We use the WhatsApp Business API to communicate with you. By interacting with us on WhatsApp, you acknowledge that 
                your messages are processed by Meta Platforms, Inc. in accordance with their privacy policy. We use this channel 
                strictly for business purposes and customer support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized 
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information held by us. You may also opt-out of 
                promotional communications at any time. To exercise these rights, please contact our management team.
              </p>
            </section>

            <div className="pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-500">
                Last Updated: November 21, 2025<br />
                Contact: privacy@bfc-gym.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
