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
                        <div className="mb-4">
                            <span className="text-6xl lg:text-7xl font-bold comfortaa-bold" style={{ color: '#0a528e' }}>
                                130+
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Students Supported
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Across all our active programs
                        </p>
                    </div>

                    <div className="text-center group">
                        <div className="mb-4">
                            <span className="text-6xl lg:text-7xl font-bold comfortaa-bold" style={{ color: '#0a528e' }}>
                                6
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Active Programs
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Comprehensive educational initiatives
                        </p>
                    </div>

                    <div className="text-center group">
                        <div className="mb-4">
                            <span className="text-6xl lg:text-7xl font-bold comfortaa-bold" style={{ color: '#0a528e' }}>
                                15+
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Years of Impact
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Transforming lives through education
                        </p>
                    </div>

                    <div className="text-center group">
                        <div className="mb-4">
                            <span className="text-6xl lg:text-7xl font-bold comfortaa-bold" style={{ color: '#0a528e' }}>
                                100%
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Commitment
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            To educational excellence
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;