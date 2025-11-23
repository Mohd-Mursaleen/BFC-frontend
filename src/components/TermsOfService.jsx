import React from 'react';
import { motion } from 'framer-motion';
import SEO from "./SEO";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Terms of Service"
        description="Read the Terms of Service for Bengaluru Fitness Club. Understand our membership rules, policies, and user agreements."
        keywords="terms of service, gym rules, membership agreement, bfc policies"
      />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-bfc-yellow mb-8 uppercase tracking-wide">
            Terms of Service
          </h1>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by Bengaluru Fitness Club ("BFC", "we", "us", or "our"), 
                including our website, gym facilities, and mobile communications, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Membership & Services</h2>
              <p>
                BFC offers various membership plans and services including gym access, personal training, and diet consultations. 
                Membership privileges are personal and non-transferable. We reserve the right to update our equipment, 
                class schedules, and staffing at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Health Disclaimer</h2>
              <p>
                Physical exercise and training can be strenuous and subject to risk of serious injury. You are urged to obtain 
                a physical examination from a doctor before using any exercise equipment or participating in any exercise activity. 
                You agree that by participating in physical exercise or training activities, you do so entirely at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Code of Conduct</h2>
              <p>
                All members are expected to conduct themselves in a respectful manner. Harassment, intimidation, or disruptive 
                behavior towards staff or other members will not be tolerated and may result in immediate termination of membership 
                without refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Payment & Refunds</h2>
              <p>
                All membership fees are payable in advance. We operate a strict no-refund policy for partial months or 
                unused sessions, except where required by law. Membership pauses or extensions are subject to the specific 
                terms of your purchased plan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. WhatsApp Communications</h2>
              <p>
                By providing your phone number, you consent to receive transactional and promotional communications from BFC 
                via WhatsApp. These may include booking confirmations, membership updates, and exclusive offers. You can opt-out 
                at any time by contacting support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p>
                BFC shall not be liable for any loss, damage, or theft of personal property within the gym premises. 
                We are also not liable for any personal injury or death arising from the use of our facilities, except where 
                caused by our proven negligence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting 
                to our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <div className="pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-500">
                Last Updated: November 21, 2025<br />
                Contact: support@bfc-gym.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
