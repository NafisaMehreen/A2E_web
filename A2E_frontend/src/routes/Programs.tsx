import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Programs = () => {
    const programs = [
        {
            id: 1,
            title: "Shishuder Jonno Amra (SJA)",
            description: "Supporting 20 underprivileged students with comprehensive living, food, and educational assistance to empower them for better education and improved quality of life.",
            fullDescription: "Our flagship program provides holistic support to underprivileged children, ensuring they have access to quality education, nutritious meals, safe housing, and essential learning materials. We work closely with families and communities to create sustainable pathways out of poverty through education.",
            students: 20,
            focus: "Living Support & Education",
            image: "/yellow.jpg",
            gradient: "from-yellow-500 to-orange-500",
            features: [
                "Comprehensive living assistance",
                "Nutritious daily meals",
                "Educational materials and supplies",
                "Health and wellness support",
                "Family counseling services"
            ],
            impact: "95% of students show improved academic performance within 6 months"
        },
        {
            id: 2,
            title: "Ankur Initiative",
            description: "Currently mentoring 30 students with academic development programs, with plans to expand to 35 students by 2026, focusing on improving educational standards.",
            fullDescription: "The Ankur Initiative focuses on academic mentorship and skill development for students from disadvantaged backgrounds. Our experienced mentors provide personalized guidance, tutoring, and career counseling to help students excel in their studies and prepare for future opportunities.",
            students: 30,
            focus: "Mentorship & Academic Development",
            image: "/yellow2.jpg",
            gradient: "from-blue-500 to-indigo-500",
            features: [
                "One-on-one mentorship",
                "Academic tutoring sessions",
                "Career guidance counseling",
                "Skill development workshops",
                "University preparation support"
            ],
            impact: "85% of participants gain admission to higher education institutions"
        },
        {
            id: 3,
            title: "Usha School Scholarships",
            description: "Providing scholarships to 30 deserving students in 2025, ensuring access to quality education and removing financial barriers to learning.",
            fullDescription: "Our scholarship program removes financial barriers that prevent talented students from accessing quality education. We provide full tuition support, books, uniforms, and transportation assistance to ensure students can focus entirely on their studies.",
            students: 30,
            focus: "Educational Scholarships",
            image: "/lots.jpg",
            gradient: "from-green-500 to-teal-500",
            features: [
                "Full tuition coverage",
                "Books and learning materials",
                "School uniforms and supplies",
                "Transportation assistance",
                "Academic performance monitoring"
            ],
            impact: "100% scholarship retention rate with excellent academic outcomes"
        },
        {
            id: 4,
            title: "Chayatal Bangladesh",
            description: "Supporting underprivileged children from low-income families with comprehensive care including education, healthy food, hygiene, and stationery supplies.",
            fullDescription: "Chayatal Bangladesh provides a safe haven for children from low-income families, offering comprehensive support that includes education, nutrition, healthcare, and emotional support. Our holistic approach ensures children develop both academically and personally.",
            students: "Multiple",
            focus: "Holistic Child Support",
            image: "/lots2.jpg",
            gradient: "from-purple-500 to-pink-500",
            features: [
                "Safe learning environment",
                "Nutritious meal programs",
                "Healthcare and hygiene support",
                "Emotional counseling services",
                "Recreational activities"
            ],
            impact: "Improved health and educational outcomes for 200+ children annually"
        },
        {
            id: 5,
            title: "Aim Initiative",
            description: "Providing scholarships to 15 talented students pursuing English-Version education in 2025, ensuring quality education access for underserved backgrounds.",
            fullDescription: "The Aim Initiative specifically targets talented students from underserved communities who wish to pursue English-medium education. We provide comprehensive support including language training, academic assistance, and cultural integration support.",
            students: 15,
            focus: "English-Version Education",
            image: "/art.png",
            gradient: "from-red-500 to-rose-500",
            features: [
                "English language training",
                "Academic excellence support",
                "Cultural integration programs",
                "International exposure opportunities",
                "Leadership development"
            ],
            impact: "90% of graduates pursue international higher education opportunities"
        },
        {
            id: 6,
            title: "Moral Parenting Students",
            description: "Currently supporting 31 students in 2025 with scholarships for high school and university level education, fostering academic excellence and moral development.",
            fullDescription: "This program combines academic support with character development, ensuring students not only excel in their studies but also develop strong moral values and leadership qualities. We work with families to create supportive environments for holistic growth.",
            students: 31,
            focus: "Higher Education Support",
            image: "/children.jpg",
            gradient: "from-cyan-500 to-blue-500",
            features: [
                "Higher education scholarships",
                "Character development programs",
                "Leadership training",
                "Community service projects",
                "Family engagement initiatives"
            ],
            impact: "95% of graduates become community leaders and change-makers"
        }
    ];

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute top-40 right-20 w-48 h-48 bg-blue-200 rounded-full opacity-30 blur-2xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Our <span style={{ color: '#0a528e' }}>Programs</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        Transforming lives through comprehensive educational initiatives across Bangladesh.
                        Each program is designed to address specific challenges and create lasting impact in our communities.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg" style={{ backgroundColor: '#0a528e' }}>
                            Get Involved
                        </button>
                        <Link to="/success" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:border-blue-500 hover:text-blue-500">
                            Success Stories
                        </Link>
                    </div>
                </div>
            </section>

            {/* Programs Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Six Pillars of <span style={{ color: '#0a528e' }}>Educational Excellence</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive approach addresses every aspect of educational development,
                            from basic needs to advanced academic support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program) => (
                            <div key={program.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>

                                    {/* Student Count Badge */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
                                        {typeof program.students === 'number' ? `${program.students} Students` : program.students}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                            {program.title}
                                        </h3>
                                        <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${program.gradient} text-white rounded-full text-xs font-medium mb-3`}>
                                            {program.focus}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {program.description}
                                    </p>

                                    {/* Impact Badge */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                                        <p className="text-green-800 text-xs font-medium">
                                            📊 {program.impact}
                                        </p>
                                    </div>

                                    {/* Features List */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                                        <ul className="space-y-1">
                                            {program.features.slice(0, 3).map((feature, index) => (
                                                <li key={index} className="text-xs text-gray-600 flex items-center">
                                                    <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Button */}
                                    <button className="w-full text-white py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:opacity-90" style={{ backgroundColor: '#0a528e' }}>
                                        Learn More About This Program
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                        Join us in transforming lives through education. Whether through donations, volunteering,
                        or partnerships, your support helps us reach more students and create lasting change.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Donate Now
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-blue-600">
                            Become a Volunteer
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Programs;