import Mission from './Mission';
import AboutUs from './AboutUs';
import Highlights from './Highlights';
import Donation from './Donation';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute top-40 right-20 w-48 h-48 bg-blue-200 rounded-full opacity-30 blur-2xl"></div>
                    <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-200 rounded-full opacity-15 blur-3xl"></div>
                </div>

                {/* Main content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

                        {/* Left side - Text content */}
                        <div className="space-y-8 lg:pr-8">
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
                                <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Learn More
                                </button>
                            </div>


                        </div>

                        {/* Right side - Grid layout */}
                        <div className="relative">
                            {/* Grid container with unique images */}
                            <div className="grid grid-cols-2 gap-4 h-[600px]">
                                {/* Left side - Large students image */}
                                <div className="row-span-3">
                                    <div className="h-full rounded-3xl overflow-hidden shadow-lg bg-white p-2">
                                        <img
                                            src="/students.jpg"
                                            alt="Students learning together"
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>
                                </div>

                                {/* Top right - ed.jpg */}
                                <div>
                                    <div className="h-full rounded-3xl overflow-hidden shadow-lg bg-white p-2">
                                        <img
                                            src="/ed.jpg"
                                            alt="Education in action"
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>
                                </div>

                                {/* Bottom right - ankur.jpeg */}
                                <div className="row-span-2">
                                    <div className="h-full rounded-3xl overflow-hidden shadow-lg bg-white p-2">
                                        <img
                                            src="/ankur.jpeg"
                                            alt="Learning environment"
                                            className="w-full h-full object-cover rounded-2xl"
                                        />
                                    </div>
                                </div>
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