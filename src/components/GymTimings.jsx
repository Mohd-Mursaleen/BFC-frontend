import { motion } from "framer-motion";
import { Clock, Calendar, Sun, Moon } from "lucide-react";

const GymTimings = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-stripes-white opacity-60 pointer-events-none"></div>
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-bfc-yellow/5 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-bfc-yellow/10 rounded-full blur-3xl -mr-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-bfc-yellow font-bold tracking-widest text-sm md:text-lg mb-4 uppercase flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            Operating Hours
          </h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900">
            Train On Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-bfc-yellow to-yellow-600">Schedule</span>
          </h3>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Weekdays Card */}
          <motion.div
            variants={item}
            className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 hover:border-bfc-yellow/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-bfc-yellow/10 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-bfc-yellow rounded-xl flex items-center justify-center text-black shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-2xl font-black uppercase tracking-tight text-gray-900">Mon - Sat</h4>
                <p className="text-gray-500 font-medium">Regular Training Days</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <Sun className="w-6 h-6 text-bfc-yellow mt-1" />
                <div>
                  <span className="block text-xs font-bold text-bfc-yellow uppercase tracking-wider mb-1">Morning Session</span>
                  <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">05:30 AM - 01:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <Moon className="w-6 h-6 text-bfc-yellow mt-1" />
                <div>
                  <span className="block text-xs font-bold text-bfc-yellow uppercase tracking-wider mb-1">Evening Session</span>
                  <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">04:30 PM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sunday Card */}
          <motion.div
            variants={item}
            className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-10 hover:border-bfc-yellow/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-bfc-yellow/10 rounded-bl-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white border-2 border-gray-100 rounded-xl flex items-center justify-center text-black shadow-lg group-hover:-rotate-12 transition-transform duration-300">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-2xl font-black uppercase tracking-tight text-gray-900">Sunday</h4>
                <p className="text-gray-500 font-medium">Weekend Special Hours</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <Sun className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Morning Session</span>
                  <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">06:00 AM - 09:30 AM</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <Moon className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Evening Session</span>
                  <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">04:30 PM - 08:30 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GymTimings;
