import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    const timelineData = [
        {
            year: "2018-2019",
            title: "SJA Program Started",
            description: "Student Journey Assistance program launched",
            students: "20 Students"
        },
        {
            year: "2020-2021",
            title: "Program Expansion",
            description: "SJA: 20 Students, Ankur: 18 Students, Moral Parenting: 33 Students",
            students: "71 Students Total"
        },
        {
            year: "2022-2023",
            title: "Continued Growth",
            description: "Moral Parenting: 20 Students, Ankur: 15 Students",
            students: "35 Students Total"
        },
        {
            year: "2023-2024",
            title: "Major Expansion",
            description: "SJA: 20, Ankur: 20, Usha Shikkha Niketon: 30, Chayatal: 30 (ME Sponsored: 100), Access to Education Moral Parenting: 30, AIM Initiative: 15, Ankur (additional): 10 (A2E Sponsored: 55)",
            students: "155 Students Total"
        },
        {
            year: "2025-2026",
            title: "Current Programs",
            description: "Continuing our mission with expanded reach and impact",
            students: "130+ Students"
        }
    ];

    const challenges = [
        {
            subject: "Mathematics",
            grade: "Grade 3",
            percentage: "60%",
            description: "lack proficiency at grade level"
        },
        {
            subject: "Mathematics",
            grade: "Grade 5",
            percentage: "70%",
            description: "lack proficiency at grade level"
        },
        {
            subject: "Bangla",
            grade: "Grade 3",
            percentage: "51%",
            description: "fall short in proficiency"
        },
        {
            subject: "Bangla",
            grade: "Grade 5",
            percentage: "50%",
            description: "fall short in proficiency"
        },
        {
            subject: "English",
            grade: "All Grades",
            percentage: "43%",
            description: "lack basic English literacy"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-5xl lg:text-6xl text-gray-900 leading-tight mb-6 comfortaa-bold">
                                    Who We Are
                                </h1>
                                <div className="w-24 h-1 mb-6" style={{ backgroundColor: '#0a528e' }}></div>
                                <p className="text-xl text-gray-600 leading-relaxed comfortaa-regular">
                                    Access to Education (A2E) is a dedicated organization committed to transforming
                                    lives through quality education in Bangladesh. We believe every child deserves
                                    the opportunity to learn, grow, and achieve their dreams.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Since 2018, we have been working tirelessly to bridge the educational gap
                                    and provide comprehensive support to students from underprivileged backgrounds.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Our mission extends beyond just providing scholarships - we offer mentorship,
                                    living support, and holistic development programs that nurture both academic
                                    excellence and personal growth.
                                </p>
                            </div>
                        </div>

                        {/* Right Content - Image */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/a2e students.jpg"
                                    alt="A2E Students"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Educational Challenges Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl text-gray-800 leading-tight mb-4 comfortaa-bold" style={{ color: '#0a528e' }}>
                            The Challenge We Address
                        </h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#0a528e' }}></div>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Understanding the educational challenges in Bangladesh helps us create targeted solutions
                            for meaningful impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {challenges.map((challenge, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2 comfortaa-bold" style={{ color: '#0a528e' }}>
                                        {challenge.percentage}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {challenge.subject} - {challenge.grade}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {challenge.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-sm text-gray-500">
                            Sources: UNICEF 2022, BRAC 2018-2019
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Journey Timeline */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl text-gray-800 leading-tight mb-4 comfortaa-bold" style={{ color: '#0a528e' }}>
                            Our Journey
                        </h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#0a528e' }}></div>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            From humble beginnings to transforming hundreds of lives - here's our story of growth and impact.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>

                        <div className="space-y-12">
                            {timelineData.map((item, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                                    {/* Content */}
                                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'} text-center lg:text-left`}>
                                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4" style={{ borderLeftColor: '#0a528e' }}>
                                            <div className="text-sm font-semibold mb-2" style={{ color: '#0a528e' }}>
                                                {item.year}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4 comfortaa-bold">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                {item.description}
                                            </p>
                                            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full">
                                                <span className="text-sm font-semibold" style={{ color: '#0a528e' }}>
                                                    {item.students}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="hidden lg:flex w-4 h-4 rounded-full border-4 border-white shadow-lg z-10" style={{ backgroundColor: '#0a528e' }}></div>

                                    {/* Spacer */}
                                    <div className="lg:w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl text-gray-800 leading-tight mb-4 comfortaa-bold" style={{ color: '#0a528e' }}>
                                    Our Values
                                </h2>
                                <div className="w-24 h-1 mb-6" style={{ backgroundColor: '#0a528e' }}></div>
                                <h3 className="text-2xl text-gray-800 mb-6 comfortaa-bold">
                                    #EmpoweringFutures
                                </h3>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0a528e' }}>
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence in Education</h4>
                                        <p className="text-gray-600">We strive for the highest standards in educational support and mentorship.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0a528e' }}>
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Holistic Development</h4>
                                        <p className="text-gray-600">We focus on nurturing both academic excellence and personal growth.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0a528e' }}>
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Impact</h4>
                                        <p className="text-gray-600">We believe in creating lasting change that benefits entire communities.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0a528e' }}>
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Transparency & Accountability</h4>
                                        <p className="text-gray-600">We maintain the highest standards of transparency in all our operations.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <button className="text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg" style={{ backgroundColor: '#0a528e' }}>
                                    Learn More About Our Impact
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/children.jpg"
                                    alt="Our Values in Action"
                                    className="w-full h-[600px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Future Projects Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl text-gray-800 leading-tight mb-4 comfortaa-bold" style={{ color: '#0a528e' }}>
                            Future Projects: Looking Forward
                        </h2>
                        <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: '#0a528e' }}></div>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Our vision extends beyond today's achievements. Here's how we plan to expand our impact
                            and reach even more students in the coming years.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* School Expansion */}
                        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4" style={{ borderTopColor: '#0a528e' }}>
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#0a528e' }}>
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 comfortaa-bold">School Expansion</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We aim to onboard at least <strong>25 more schools</strong> into our Access to Education programme within 3 years.
                            </p>
                            <div className="text-sm font-semibold" style={{ color: '#0a528e' }}>
                                Target: 25+ Schools by 2027
                            </div>
                        </div>

                        {/* Student Coverage */}
                        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7H16c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h1v6h3zM12.5 11.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v6H1.5v7h6z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 comfortaa-bold">Student Reach</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We aim to cover at least <strong>500 more students</strong> in the upcoming 3 years, significantly expanding our impact.
                            </p>
                            <div className="text-sm font-semibold text-green-600">
                                Target: 500+ Additional Students
                            </div>
                        </div>

                        {/* Healthcare & Hygiene */}
                        <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 comfortaa-bold">Healthcare & Hygiene</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We aim to expand our programme into <strong>hygiene, water and healthcare</strong> for students and their families.
                            </p>
                            <div className="text-sm font-semibold text-purple-600">
                                Holistic Family Support
                            </div>
                        </div>

                        {/* Nutrition Program */}
                        <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 comfortaa-bold">Nutrition Support</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We aim to expand into the <strong>nutritional needs</strong> of students under our programme, so that they grow and learn in optimal conditions.
                            </p>
                            <div className="text-sm font-semibold text-orange-600">
                                Optimal Learning Conditions
                            </div>
                        </div>

                        {/* STEM Education */}
                        <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-500 md:col-span-2 lg:col-span-1">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.07,4.93C17.22,3 14.66,1.96 12,2C9.34,1.96 6.79,3 4.94,4.93C3,6.78 1.96,9.34 2,12C1.96,14.66 3,17.21 4.93,19.06C6.78,21 9.34,22.04 12,22C14.66,22.04 17.21,21 19.06,19.07C21,17.22 22.04,14.66 22,12C22.04,9.34 21,6.78 19.07,4.93M17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12Z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 comfortaa-bold">STEM Education</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Expanding our programme to provide underprivileged high school students with <strong>scholarships and grants</strong> to explore STEM fields for their higher studies.
                            </p>
                            <div className="text-sm font-semibold text-red-600">
                                Future Innovation Leaders
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
        
    );
};

export default About;