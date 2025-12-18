import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PublicRegistration = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        date_of_birth: '',
        gender: '',
        height: '',
        weight: '',
        address: '',
        medical_history: '',
        preferred_gym_slot: '',
        status: 'active'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({ type: '', text: '' });

        try {
            // Convert types as needed by Pydantic
            const payload = {
                ...formData,
                height: formData.height ? parseFloat(formData.height) : null,
                weight: formData.weight ? parseFloat(formData.weight) : null,
            };

            const apiUrl = 'https://api.bengalurufitnessclub.in';
            const response = await fetch(`${apiUrl}/api/members/public`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Registration failed');
            }

            setMessage({ type: 'success', text: 'Registration successful! Welcome to the BFC family.' });
            // content reset
            setFormData({
                full_name: '',
                email: '',
                phone: '',
                date_of_birth: '',
                gender: '',
                height: '',
                weight: '',
                address: '',
                medical_history: '',
                preferred_gym_slot: '',
                status: 'active'
            });

        } catch (error) {
            setMessage({ type: 'error', text: error.message || 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = "w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F4C430] focus:ring-1 focus:ring-[#F4C430] transition-colors";
    const labelClasses = "block text-sm font-medium text-zinc-400 mb-2";

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-black relative">
            {/* <div className="absolute inset-0 bg-noise-overlay opacity-20 pointer-events-none"></div> */}
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Join <span className="text-[#F4C430]">BFC</span> Today
                    </h1>
                    <p className="text-lg text-zinc-400">
                        Start your fitness journey with us. Fill out the form below to register.
                    </p>
                </div>

                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 shadow-2xl">
                    {message.text && (
                        <div className={`mb-8 p-4 rounded-lg font-medium text-center ${
                            message.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                        }`}>
                            {message.text}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Section 1: Personal Info */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                                <span className="bg-[#F4C430] w-1 h-6 mr-3 rounded-full"></span>
                                Personal Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>Full Name *</label>
                                    <input
                                        type="text"
                                        name="full_name"
                                        required
                                        value={formData.full_name}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>Email (Optional)</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>Phone *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="1234567890"
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>Date of Birth *</label>
                                    <input
                                        type="date"
                                        name="date_of_birth"
                                        required
                                        value={formData.date_of_birth}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        style={{ colorScheme: 'dark' }}
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>Gender *</label>
                                    <select
                                        name="gender"
                                        required
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    >
                                        <option value="" disabled>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Physical Stats */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                                <span className="bg-[#F4C430] w-1 h-6 mr-3 rounded-full"></span>
                                Physical Stats
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>Height (cm) (Optional)</label>
                                    <input
                                        type="number"
                                        name="height"
                                        step="0.01"
                                        value={formData.height}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="e.g. 175"
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>Weight (kg) (Optional)</label>
                                    <input
                                        type="number"
                                        name="weight"
                                        step="0.01"
                                        value={formData.weight}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="e.g. 70"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Additional Details */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                                <span className="bg-[#F4C430] w-1 h-6 mr-3 rounded-full"></span>
                                Additional Details
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <label className={labelClasses}>Address (Optional)</label>
                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        rows="3"
                                        className={inputClasses}
                                        placeholder="Your full address..."
                                    ></textarea>
                                </div>
                                <div>
                                    <label className={labelClasses}>Medical History (Optional)</label>
                                    <textarea
                                        name="medical_history"
                                        value={formData.medical_history}
                                        onChange={handleChange}
                                        rows="3"
                                        className={inputClasses}
                                        placeholder="Any medical conditions or injuries we should know about..."
                                    ></textarea>
                                </div>
                                <div>
                                    <label className={labelClasses}>Preferred Gym Slot (Optional)</label>
                                    <select
                                        name="preferred_gym_slot"
                                        value={formData.preferred_gym_slot}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    >
                                        <option value="">No preference</option>
                                        <option value="morning">Morning (6AM - 10AM)</option>
                                        <option value="afternoon">Afternoon (12PM - 4PM)</option>
                                        <option value="evening">Evening (4PM - 10PM)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 px-6 rounded-lg font-bold text-black uppercase tracking-wider transition-all transform hover:scale-[1.02] ${
                                    isSubmitting 
                                        ? 'bg-zinc-600 cursor-not-allowed' 
                                        : 'bg-[#F4C430] hover:bg-[#D4A017] shadow-lg hover:shadow-[#F4C430]/20'
                                }`}
                            >
                                {isSubmitting ? 'Registering...' : 'Complete Registration'}
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default PublicRegistration;
