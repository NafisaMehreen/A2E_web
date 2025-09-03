const AboutUs = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="max-w-4xl">
                    <div className="border-l-4 border-orange-500 pl-6 mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            We help people learn, grow and rebuild their lives
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            For over 5 years, A2E has helped people affected by poverty and lack of educational opportunities.
                            Today, we provide quality education wherever it's urgently needed, and help communities rebuild
                            around Bangladesh. In 2024 alone...
                        </p>
                    </div>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-16">
                    {/* Current Students Supported */}
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                            </svg>
                        </div>
                        <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">130+</div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            students currently supported through our active educational programs in 2025
                        </p>
                    </div>

                    {/* Active Programs */}
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">6</div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            active educational programs providing comprehensive support and opportunities
                        </p>
                    </div>

                    {/* School Retention Rate */}
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                        <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">85%</div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            school retention rates achieved through our educational support and intervention programs
                        </p>
                    </div>

                    {/* Commitment Level */}
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7H16c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1v6h3zM12.5 11.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6H1.5v7h6z" />
                            </svg>
                        </div>
                        <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">100%</div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            commitment to transforming lives and creating sustainable educational opportunities
                        </p>
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
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-gray-900">A2E Impact</div>
                                        <div className="text-sm text-gray-600">Real Results</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-relaxed">
                                Transforming Lives Through
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 leading-relaxed">
                                    Quality Education
                                </span>
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
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
                                    <p className="text-gray-700">Comprehensive learning programs tailored to individual needs</p>
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
                <div className="mt-16 text-center">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Access to Education</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Through our comprehensive approach to education, we've achieved remarkable outcomes:
                            85% school retention rates, significant reduction in malnutrition, improved literacy levels,
                            and most importantly, we're creating an intergenerational cycle of improved income and
                            living standards that transforms entire communities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;