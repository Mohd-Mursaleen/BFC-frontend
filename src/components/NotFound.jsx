import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from './SEO';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden px-4">
      <SEO 
        title="Page Not Found"
        description="The page you are looking for does not exist. Return to Bengaluru Fitness Connection homepage."
      />
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-bfc-yellow/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-800/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[120px] md:text-[200px] font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-black leading-none select-none"
        >
          404
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase tracking-wide">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-8 py-4 bg-bfc-yellow text-black font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300 rounded-sm"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
