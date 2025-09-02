const Donation = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left side - Content */}
                    <div className="space-y-8">
                        {/* Main heading */}
                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Please donate today to
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                                    support education
                                </span>
                                <span className="block">
                                    in Bangladesh
                                </span>
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                A2E has been supporting Bangladeshi students since our founding to achieve 
                                their educational, social, and economic goals. We remain present on the ground 
                                to provide support and assistance and will do so for as long as it takes.
                            </p>
                        </div>

                        {/* Impact highlights */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">Direct support to 141+ students across 6 active programs</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">Comprehensive support including education, food, and living assistance</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">Long-term commitment to transforming communities through education</p>
                            </div>
                        </div>

                        {/* Donation Button */}
                        <div className="pt-4">
                            <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                DONATE
                            </button>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/students.jpg"
                                alt="Students in Bangladesh"
                                className="w-full h-[500px] object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            
                            {/* Overlay text */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Your Impact Matters</h3>
                                    <p className="text-sm text-gray-700">
                                        Every donation directly supports students in their educational journey, 
                                        providing them with the tools and opportunities they need to succeed.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Floating impact card */}
                        <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">141+</div>
                                    <div className="text-sm text-gray-600">Lives Changed</div>
                                </div>
                            </div>
                        </div>

                        {/* Background decorative elements */}
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-20 blur-xl"></div>
                        <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donation;