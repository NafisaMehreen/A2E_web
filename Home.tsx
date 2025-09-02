import React from 'react'
import Mission from './src/components/Mission';
import AboutUs from './src/components/AboutUs';
import Highlights from './src/components/Highlights';
import Donation from './src/components/Donation';
import Footer from './src/components/Footer';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
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
                            {/* Badge */}
                            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                🇧🇩 Empowering Bangladesh
                            </div>

                            {/* Main heading */}
                            <div className="space-y-6">
                                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Investing in
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                                        Humanity,
                                    </span>
                                    <span className="block">
                                        Empowering Lives
                                    </span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                                        in Bangladesh
                                    </span>
                                </h1>

                                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                                    A2E is dedicated to transforming lives through quality education,
                                    creating opportunities for every Bangladeshi to reach their full potential
                                    and contribute to our nation's bright future.
                                </p>

                                {/* Mission statement highlight */}
                                <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                                    <p className="text-lg font-medium text-gray-800 italic">
                                        "Investing in Humanity, Empowering Lives in Bangladesh"
                                    </p>
                                    <p className="text-sm text-gray-600 mt-2">— Our Mission Statement</p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="pt-4">
                                <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center">
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