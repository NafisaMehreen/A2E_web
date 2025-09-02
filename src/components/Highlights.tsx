const Highlights = () => {
    const initiatives = [
        {
            id: 1,
            title: "Shishuder Jonno Amra (SJA)",
            description: "Supporting 20 underprivileged students with comprehensive living, food, and educational assistance to empower them for better education and improved quality of life.",
            students: 20,
            focus: "Living Support & Education",
            image: "/yellow.jpg",
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            id: 2,
            title: "Ankur Initiative",
            description: "Currently mentoring 30 students with academic development programs, with plans to expand to 35 students by 2026, focusing on improving educational standards.",
            students: 30,
            focus: "Mentorship & Academic Development",
            image: "/yellow2.jpg",
            gradient: "from-blue-500 to-indigo-500"
        },
        {
            id: 3,
            title: "Usha School Scholarships",
            description: "Providing scholarships to 30 deserving students in 2025, ensuring access to quality education and removing financial barriers to learning.",
            students: 30,
            focus: "Educational Scholarships",
            image: "/lots.jpg",
            gradient: "from-green-500 to-teal-500"
        },
        {
            id: 4,
            title: "Chayatal Bangladesh",
            description: "Supporting underprivileged children from low-income families with comprehensive care including education, healthy food, hygiene, and stationery supplies.",
            students: "Multiple",
            focus: "Holistic Child Support",
            image: "/lots2.jpg",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            id: 5,
            title: "Aim Initiative",
            description: "Providing scholarships to 15 talented students pursuing English-Version education in 2025, ensuring quality education access for underserved backgrounds.",
            students: 15,
            focus: "English-Version Education",
            image: "/art.png",
            gradient: "from-red-500 to-rose-500"
        },
        {
            id: 6,
            title: "Moral Parenting Students",
            description: "Currently supporting 31 students in 2025 with scholarships for high school and university level education, fostering academic excellence and moral development.",
            students: 31,
            focus: "Higher Education Support",
            image: "/children.jpg",
            gradient: "from-cyan-500 to-blue-500"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Our Impact
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-relaxed mb-6">
                        {/* Educational */}
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 leading-relaxed">
                            Highlights
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover our comprehensive educational initiatives that are transforming lives across Bangladesh.
                        Through strategic partnerships and dedicated programs, we're empowering students and building a brighter future.
                    </p>
                </div>



                {/* Initiatives Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {initiatives.map((initiative) => (
                        <div key={initiative.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={initiative.image}
                                    alt={initiative.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${initiative.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>

                                {/* Student Count Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
                                    {typeof initiative.students === 'number' ? `${initiative.students} Students` : initiative.students}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                        {initiative.title}
                                    </h3>
                                    <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${initiative.gradient} text-white rounded-full text-xs font-medium mb-3`}>
                                        {initiative.focus}
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {initiative.description}
                                </p>

                                {/* Action Button */}
                                <div className="flex items-center justify-between">
                                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                                        Learn More
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Highlights;