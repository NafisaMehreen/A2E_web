const AboutUs = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-gray-800 leading-tight mb-6 comfortaa-bold">
                        We help people learn, grow and rebuild their lives
                    </h2>
                    <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#0a528e' }}></div>
                    <p className="text-xl text-gray-600 leading-relaxed comfortaa-regular max-w-3xl mx-auto">
                        For over 5 years, A2E has helped people affected by poverty and lack of educational opportunities.
                        Today, we provide quality education wherever it's urgently needed, and help communities rebuild
                        around Bangladesh. In 2024 alone...
                    </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    <div className="text-center group">
                        {/* Large Number */}
                        <div className="mb-4">
                            <span className="text-6xl lg:text-7xl font-bold comfortaa-bold" style={{ color: '#0a528e' }}>
                                130+
                            </span>
                        </div>

                        {/* Label */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Students Supported
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Across all our active programs
                        </p>

                        {/* Decorative line */}
                        <div className="mt-4 mx-auto w-12 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#0a528e' }}></div>
                    </div>

                    <div className="text-center group">
                        {/* Large Number */}
                        <div className="mb-4">
                            <span className="text-6xl lg:text-7xl font-bold comfortaa-bold" style={{ color: '#0a528e' }}>
                                6
                            </span>
                        </div>

                        {/* Label */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Active Programs
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Comprehensive educational initiatives
                        </p>

                        {/* Decorative line */}
                        <div className="mt-4 mx-auto w-12 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#0a528e' }}></div>
                    </div>

                    <div className="text-center group">
                        {/* Large Number */}
                        <div className="mb-4">
                            <span className="text-6xl lg:text-7xl font-bold comfortaa-bold" style={{ color: '#0a528e' }}>
                                15+
                            </span>
                        </div>

                        {/* Label */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Years of Impact
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Transforming lives through education
                        </p>

                        {/* Decorative line */}
                        <div className="mt-4 mx-auto w-12 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#0a528e' }}></div>
                    </div>

                    <div className="text-center group">
                        {/* Large Number */}
                        <div className="mb-4">
                            <span className="text-6xl lg:text-7xl font-bold comfortaa-bold" style={{ color: '#0a528e' }}>
                                100%
                            </span>
                        </div>

                        {/* Label */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Commitment
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">
                            To educational excellence
                        </p>

                        {/* Decorative line */}
                        <div className="mt-4 mx-auto w-12 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#0a528e' }}></div>
                    </div>
                </div>

                {/* A2E Students Image Section */}
                <div className="mt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/a2e students.jpg"
                                    alt="A2E Students in Action"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <h3 className="text-3xl lg:text-4xl text-gray-900 leading-relaxed comfortaa-light">
                                Transforming Lives Through
                                <span className="block leading-relaxed" style={{ color: '#0a528e' }}>
                                    Quality Education
                                </span>
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed comfortaa-regular">
                                Our students are the heart of everything we do. Through comprehensive educational programs,
                                mentorship, and community support, we're not just teaching subjects—we're building futures,
                                fostering dreams, and creating lasting change in communities across Bangladesh.
                            </p>

                            {/* Key highlights */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 comfortaa-regular">Comprehensive learning programs tailored to individual needs</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700">Community-based approach ensuring sustainable impact</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700">Focus on building confidence and life skills alongside academics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Impact Statement */}

            </div>
        </section>
    );
};

export default AboutUs;