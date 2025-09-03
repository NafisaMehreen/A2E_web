
import Navbar from './components/Navbar';
import Mission from './components/Mission';
import AboutUs from './components/AboutUs';
import Wwedo from './components/Wwedo';
import Highlights from './components/Highlights';
import Donation from './components/Donation';
import Footer from './components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            {/* Hero Section */}
            <div className="relative min-h-[90vh] bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
                {/* Mobile Background Image */}
                <div className="absolute inset-0 lg:hidden bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/Hero-A2E.svg')",
                    }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50 bg-opacity-90"></div>
                </div>

                {/* Decorative background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute top-40 right-20 w-48 h-48 bg-blue-200 rounded-full opacity-30 blur-2xl"></div>
                    <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-200 rounded-full opacity-15 blur-3xl"></div>
                </div>

                {/* Main content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left Column - Creative Image Layout (Desktop Only) */}
                        <div className="relative order-1 lg:order-1 h-[500px] hidden lg:flex items-center justify-center">
                            <div className="relative w-full h-full flex items-center justify-center">

                                {/* Left side image */}
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-48 rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src="/ankur.jpeg"
                                        alt="Ankur Initiative"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Center hexagonal/diamond image */}
                                <div className="relative z-10 w-80 h-80 mx-auto">
                                    <div className="w-full h-full transform rotate-45 overflow-hidden rounded-3xl shadow-2xl">
                                        <img
                                            src="/art.png"
                                            alt="Art Education"
                                            className="w-full h-full object-cover transform -rotate-45 scale-150"
                                        />
                                    </div>
                                </div>

                                {/* Right side top image */}
                                <div className="absolute right-0 top-8 w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src="/ed.jpg"
                                        alt="Education in Action"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Right side bottom image */}
                                <div className="absolute right-0 bottom-8 w-32 h-40 rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src="/lots.jpg"
                                        alt="Students Learning"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                            </div>
                        </div>

                        {/* Right Column - Text Content */}
                        <div className="space-y-8 order-2 lg:order-2 text-center lg:text-left">

                            {/* Main heading */}
                            <div className="space-y-2">
                                <h1 className="text-2xl lg:text-6xl text-gray-900 leading-tight comfortaa-bold">
                                    Investing in
                                    <span className="block" style={{ color: '#0a528e' }}>
                                        Humanity,
                                    </span>
                                    <span className="block">
                                        Empowering Lives
                                    </span>
                                    <span className="block" style={{ color: '#0a528e' }}>
                                        in Bangladesh
                                    </span>
                                </h1>

                                <p className="text-xl lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                                    A2E is dedicated to transforming lives through quality education,
                                    creating opportunities for every Bangladeshi to reach their full potential
                                    and contribute to our nation's bright future.
                                </p>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <button className="text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center" style={{ backgroundColor: '#0a528e' }}>
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <Mission />

            {/* Who We Are Section */}
            <AboutUs />

            {/* What We Do Section */}
            <Wwedo />

            {/* Highlights */}
            <Highlights />

            {/* Donation Section */}
            <Donation />

            {/* Footer */}
            <Footer />
        </>
    );
};

export default Home;