'use client'

const HighlightsSection = () => {
    const highlights = [
        {
            category: "Press release",
            categoryColor: "bg-pink-500",
            title: "New scholarship program launches, supporting 200+ students nationwide",
            date: "15 December 2024",
            image: "/ht1.jpg"
        },
        {
            category: "Success Story",
            categoryColor: "bg-pink-500",
            title: "From village school to university: How scholarships changed Maria's life",
            date: "12 December 2024",
            image: "/ht2.jpg"
        },
        {
            category: "Feature",
            categoryColor: "bg-pink-500",
            title: "Breaking barriers: Female students leading change through education scholarships",
            date: "10 December 2024",
            image: "/ht3.jpg"
        }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-gray-800 leading-tight mb-4 comfortaa-bold" style={{ color: '#0a528e' }}>
                        Our Students
                    </h2>
                    <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#0a528e' }}></div>
                    <p className="text-xl text-gray-600 leading-relaxed comfortaa-regular max-w-3xl mx-auto">
                        At Access To Education, we turn dreams into possibilities. Through scholarships, mentorship,
                        and community support, we empower students to unlock their full potential.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                                <img
                                    src={highlight.image}
                                    alt={highlight.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <h3 className="text-xl md:text-2xl text-gray-800 leading-tight group-hover:text-blue-600 transition-colors comfortaa-medium">
                                    {highlight.title}
                                </h3>
                                <p className="text-gray-500 comfortaa-regular">
                                    {highlight.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center">
                    <button className="text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 comfortaa-medium inline-flex items-center group" style={{ backgroundColor: '#0a528e' }}>
                        View More Stories
                        <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HighlightsSection