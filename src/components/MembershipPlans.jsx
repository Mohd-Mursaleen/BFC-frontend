import { useState } from "react";
import { FaCheck, FaDumbbell, FaUserFriends, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const gymPlans = [
  {
    name: "1 Month",
    price: "₹1,500",
    total: "₹2,000",
    admission: "₹500",
    duration: "Monthly",
    features: [
      "Flexible monthly option",
      "Full gym access",
      "General trainer support",
      "Locker facility",
    ],
    highlight: false,
  },
  {
    name: "3 Months",
    price: "₹3,500",
    total: "₹4,000",
    admission: "₹500",
    duration: "Quarterly",
    features: [
      "15 Pause Days included",
      "Diet consultation",
      "Full gym access",
      "General trainer support",
    ],
    highlight: false,
  },
  {
    name: "6 Months",
    price: "₹6,000",
    total: "₹6,500",
    admission: "₹500",
    duration: "Half Yearly",
    features: [
      "20 Pause Days included",
      "Advanced diet plan",
      "Full gym access",
      "General trainer support",
    ],
    highlight: false,
  },
  {
    name: "12 Months",
    price: "₹10,000",
    total: "₹10,500",
    admission: "₹500",
    duration: "Yearly",
    features: [
      "30 Pause Days included",
      "Best value for money",
      "Premium diet plan",
      "Priority support",
      "Free merchandise",
    ],
    highlight: true,
  },
];

const ptPlans = [
  {
    name: "1 Month PT",
    price: "₹6,000",
    gymFee: "₹1,500",
    total: "₹7,500",
    duration: "Monthly",
    features: [
      "1 Hour 30 Mins Session",
      "Personalized Workout Plan",
      "Diet Counseling",
      "Weight Management",
    ],
    highlight: false,
  },
  {
    name: "2 Months PT",
    price: "₹11,000",
    gymFee: "₹3,000",
    total: "₹14,000",
    duration: "2 Months",
    features: [
      "1 Hour 30 Mins Session",
      "Advanced Goal Tracking",
      "Weekly Progress Check",
      "Weight Loss/Gain Focus",
    ],
    highlight: false,
  },
  {
    name: "3 Months PT",
    price: "₹17,000",
    gymFee: "₹3,500",
    total: "₹20,500",
    duration: "Quarterly",
    features: [
      "1 Hour 30 Mins Session",
      "Complete Transformation",
      "Expert Dietician Support",
      "Priority Equipment Access",
    ],
    highlight: true,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } },
};

import SEO from "./SEO";

function MembershipPlans() {
  const [activeTab, setActiveTab] = useState("gym");
  const navigate = useNavigate();

  const plans = activeTab === "gym" ? gymPlans : ptPlans;

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="plans">
      <SEO 
        title="Membership Plans"
        description="Affordable gym membership and personal training plans at BFC. Choose from monthly, quarterly, or yearly packages tailored to your fitness goals."
        keywords="gym membership, personal training cost, fitness plans, gym fees bengaluru"
      />
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter italic text-black">
            Membership <span className="text-transparent bg-clip-text bg-gradient-to-r from-bfc-yellow to-yellow-500">Plans &nbsp;</span>
          </h2>

          {/* Toggle Switch */}
          <div className="inline-flex bg-gray-100 p-2 rounded-full relative shadow-inner border border-gray-200">
            <div
              className={`w-1/2 h-[calc(100%-16px)] absolute top-2 left-2 bg-bfc-yellow rounded-full transition-all duration-300 ease-out shadow-md ${
                activeTab === "pt" ? "translate-x-full" : "translate-x-0"
              }`}
            ></div>
            <button
              type="button"
              className={`relative z-10 px-8 py-3 rounded-full font-black uppercase tracking-wide transition-colors duration-300 flex items-center gap-2 text-sm md:text-base cursor-pointer select-none ${
                activeTab === "gym" ? "text-black" : "text-gray-500 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("gym")}
            >
              <FaUserFriends className="text-lg" /> Gym Membership
            </button>
            <button
              type="button"
              className={`relative z-10 px-8 py-3 rounded-full font-black uppercase tracking-wide transition-colors duration-300 flex items-center gap-2 text-sm md:text-base cursor-pointer select-none ${
                activeTab === "pt" ? "text-black" : "text-gray-500 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab("pt")}
            >
              <FaDumbbell className="text-lg" /> Personal Training
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative flex flex-col p-6 rounded-3xl border-2 transition-all duration-300 group ${
                plan.highlight
                  ? "border-bfc-yellow bg-gray-900 text-white shadow-2xl scale-105 z-10"
                  : "border-gray-100 bg-white hover:border-bfc-yellow hover:shadow-xl hover:-translate-y-2"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-bfc-yellow text-black font-black py-1 px-8 rounded-full text-sm uppercase tracking-wider shadow-lg whitespace-nowrap">
                  Best Value
                </div>
              )}

              <div className="mb-6 text-center border-b border-gray-200/10 pb-6">
                <h3 className={`text-2xl font-black uppercase mb-2 tracking-tight ${plan.highlight ? "text-bfc-yellow" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-lg font-bold opacity-60">₹</span>
                  <span className={`text-5xl font-black tracking-tighter ${plan.highlight ? "text-white" : "text-gray-900"}`}>
                    {plan.total.replace('₹', '').replace(',', '')}
                  </span>
                </div>
                <p className={`text-sm mt-2 font-medium ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                  Total Amount (Inc. Admission)
                </p>
              </div>

              <div className="flex-1 mb-8">
                 <div className={`text-sm mb-6 p-3 rounded-xl text-center font-bold ${plan.highlight ? "bg-gray-800 text-gray-300" : "bg-gray-50 text-gray-600"}`}>
                  {activeTab === "pt" ? (
                    <>
                      <span className="block">PT Fee: {plan.price}</span>
                      <span className="block">Gym Fee: {plan.gymFee}</span>
                    </>
                  ) : (
                    <>
                      <span className="block">Gym Fee: {plan.price}</span>
                      <span className="block">Admission: {plan.admission}</span>
                    </>
                  )}
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 p-1 rounded-full ${plan.highlight ? "bg-bfc-yellow text-black" : "bg-black text-white"}`}>
                        <FaCheck className="w-2 h-2" />
                      </div>
                      <span className={`text-sm font-medium ${plan.highlight ? "text-gray-300" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
        >
            <button 
                onClick={() => navigate('/plans')}
                className="inline-flex items-center gap-3 text-lg font-bold uppercase tracking-widest border-b-2 border-bfc-yellow pb-1 text-bfc-yellow hover:text-black transition-colors group"
            >
                View All Plans 
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
        </motion.div>
      </div>
    </section>
  );
}

export default MembershipPlans;
