const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 sm:py-12 lg:py-16 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    
                    {/* Company Info */}
                    <div className="space-y-4 lg:space-y-6 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold">Access2Edu</h3>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            Empowering students through education. We believe every child deserves access to quality 
                            education and the opportunity to build a brighter future.
                        </p>
                        
                        {/* Social Media Links */}
                        <div className="flex gap-2 sm:gap-3">
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0" aria-label="Twitter">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0" aria-label="Facebook">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0" aria-label="LinkedIn">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0" aria-label="Instagram">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 lg:space-y-6">
                        <h4 className="text-base sm:text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Our Programs</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Our Impact</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Volunteer</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">News & Updates</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Contact</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-4 lg:space-y-6">
                        <h4 className="text-base sm:text-lg font-semibold">Support</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Make a Donation</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Sponsor a Student</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Start a Fundraiser</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Corporate Partnership</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">FAQ</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base">Transparency</a></li>
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div className="space-y-4 lg:space-y-6 sm:col-span-2 lg:col-span-1">
                        <h4 className="text-base sm:text-lg font-semibold">Get in Touch</h4>
                        
                        {/* Contact Info */}
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-start gap-3">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                                <div className="min-w-0">
                                    <p className="text-gray-300 text-sm sm:text-base">123 Education Street</p>
                                    <p className="text-gray-300 text-sm sm:text-base">Dhaka, Bangladesh 1000</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                </svg>
                                <p className="text-gray-300 text-sm sm:text-base">+880 123-4567</p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                </svg>
                                <p className="text-gray-300 text-sm sm:text-base break-all">info@access2edu.org</p>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="space-y-3">
                            <h5 className="font-medium text-sm sm:text-base">Stay Updated</h5>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-sm sm:text-base min-w-0"
                                />
                                <button className="px-4 sm:px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                            © 2025 Access2Edu. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 whitespace-nowrap">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 whitespace-nowrap">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 whitespace-nowrap">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;