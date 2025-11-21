import React from 'react';

const Contact = () => {
    const address = "BFC Bengaluru Fitness Club · Tatanagar, Devinagar, Bengaluru, Karnataka 560092";
    const mapLink = "https://maps.app.goo.gl/9UrpCRn1fRKuaB1v7";
    const whatsappNumber = "918050022645"; // Placeholder

    return (
        <div className="w-full min-h-screen bg-[#FDFDFD] font-sans relative">
            <SEO 
                title="Contact Us"
                description="Get in touch with Bengaluru Fitness Connection. Visit our gym, call us, or chat on WhatsApp. We are here to help you start your fitness journey."
                keywords="contact gym, gym location, gym phone number, bfc contact"
            />
            {/* Dark Header Section for Navbar Visibility */}
            <div className="w-full bg-[#111111] pt-40 pb-32 px-4 md:px-8 relative overflow-hidden rounded-b-[3rem]">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
                
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h2 className="text-green-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 animate-fade-in-up">
                        Get In Touch
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                        Kickstart Your <br className="md:hidden" /> Journey
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-24 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
                    {/* Contact Info Card */}
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col justify-between relative overflow-hidden group hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] transition-all duration-500">
                         {/* Decorative Gradient */}
                         <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full opacity-50" />

                        <div className="space-y-8 relative z-10">
                            {/* Address */}
                            <div className="group/item">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span> Location
                                </h3>
                                <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">
                                    BFC Bengaluru <br/> Fitness Club
                                </p>
                                <p className="text-gray-500 text-base leading-relaxed mb-5">
                                    Tatanagar, Devinagar,<br/> Bengaluru, Karnataka 560092
                                </p>
                                <a
                                    href={mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-green-600 font-bold uppercase tracking-wider text-xs hover:text-green-700 group-hover/item:translate-x-2 transition-transform duration-300"
                                >
                                    View on Google Maps 
                                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>

                            {/* Hours */}
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500"></span> Opening Hours
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                        <span className="text-base font-medium text-gray-900">Mon - Sat</span>
                                        <span className="text-base font-bold text-gray-900">5:30 AM - 10:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-base font-medium text-gray-900">Sunday</span>
                                        <span className="text-base font-bold text-gray-900">6:00 AM - 12:00 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chat Button */}
                        <div className="mt-10 relative z-10">
                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 bg-black text-white py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group/btn"
                            >
                                <svg className="w-5 h-5 text-green-400 group-hover/btn:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="h-full min-h-[450px] bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.756135644989!2d77.5758841!3d13.0550173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172ec529c96b%3A0x89e1871d5101ea2!2sBFC%20Bengaluru%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1732121000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full transition-all duration-700"
                        ></iframe>
                        
                        {/* Map Overlay Hint */}
                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-900">Interactive Map</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
