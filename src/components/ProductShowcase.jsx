import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";

function ProductShowcase({ products = [] }) {
  if (products.length === 0) return null;

  return (
    <section className="bg-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-isometric-white pointer-events-none"></div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <span className="absolute top-20 -left-20 text-[20rem] font-black text-gray-100/50 rotate-12 font-display uppercase leading-none">
          Strength
        </span>
        <span className="absolute bottom-40 -right-20 text-[20rem] font-black text-gray-100/50 -rotate-12 font-display uppercase leading-none">
          Power
        </span>
        <Dumbbell className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-gray-50 opacity-60 rotate-45" />
      </div>

      {products.map((product, index) => (
        <div key={index} className="relative min-h-screen flex items-center justify-center py-20 lg:py-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
            
            {/* Image Section - Sticky on Desktop */}
            <motion.div 
              className={`w-full lg:w-1/2 ${index % 2 === 1 ? "lg:order-last" : ""}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-bfc-yellow/20 transform translate-x-6 translate-y-6 rounded-3xl -z-10 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] md:h-[600px] lg:h-[700px] object-cover rounded-3xl shadow-2xl transition-all duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-8 text-gray-900 leading-[0.9]">
                {product.name}
              </h3>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-10 font-medium max-w-lg mx-auto lg:mx-0">
                {product.description}
              </p>

              <div className={`h-1 w-32 bg-bfc-yellow ${index % 2 === 1 ? "lg:ml-auto" : ""} mx-auto lg:mx-0`}></div>
            </motion.div>

          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductShowcase;
