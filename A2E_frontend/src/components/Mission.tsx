'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const MissionsSection = () => {
    const [hoveredImage, setHoveredImage] = useState<number | null>(null)

    return (
        <section className="pt-20 pb-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-gray-800 comfortaa-bold mb-4">Our Mission</h2>
                    <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#0a528e' }}></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl text-gray-800 leading-tight mb-6 comfortaa-light">
                                One World, One Mission
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed comfortaa-regular">
                                Education is more than just books and classrooms; it&apos;s the foundation for dignity, 
                                opportunity, and growth. Through our programs, students who once faced the possibility 
                                of dropping out are now equipped to dream bigger, work harder, and contribute 
                                meaningfully to their communities.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Enhanced Image Formation */}
                    <div className="relative">
                        {/* Interactive Image Grid */}
                        <div className="relative h-96 grid grid-cols-3 gap-4">
                            {/* Main Large Image */}
                            <motion.div 
                                className="col-span-2 row-span-2 bg-gray-200 rounded-3xl overflow-hidden shadow-xl cursor-pointer relative"
                                onHoverStart={() => setHoveredImage(1)}
                                onHoverEnd={() => setHoveredImage(null)}
                                animate={{
                                    scale: hoveredImage === 1 ? 1.4 : hoveredImage !== null && hoveredImage !== 1 ? 0.8 : 1,
                                    opacity: hoveredImage === 1 ? 1 : hoveredImage !== null && hoveredImage !== 1 ? 0.3 : 1,
                                    zIndex: hoveredImage === 1 ? 10 : 1,
                                }}
                                transition={{ duration: 0.15, ease: "easeOut" }}
                            >
                                <motion.img 
                                    src="/service1.jpg"
                                    alt="Access to Education Service"
                                    className="w-full h-full object-cover"
                                    animate={{
                                        scale: hoveredImage === 1 ? 1.2 : 1,
                                    }}
                                    transition={{ duration: 0.15, ease: "easeOut" }}
                                />
                            </motion.div>

                            {/* Top Right - Secondary Image */}
                            <motion.div 
                                className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg cursor-pointer relative"
                                onHoverStart={() => setHoveredImage(2)}
                                onHoverEnd={() => setHoveredImage(null)}
                                animate={{
                                    scale: hoveredImage === 2 ? 2.5 : hoveredImage !== null && hoveredImage !== 2 ? 0.8 : 1,
                                    opacity: hoveredImage === 2 ? 1 : hoveredImage !== null && hoveredImage !== 2 ? 0.3 : 1,
                                    zIndex: hoveredImage === 2 ? 10 : 1,
                                }}
                                transition={{ duration: 0.15, ease: "easeOut" }}
                            >
                                <motion.img 
                                    src="/Usha.jpg"
                                    alt="Children studying"
                                    className="w-full h-full object-cover"
                                    animate={{
                                        scale: hoveredImage === 2 ? 1.3 : 1,
                                    }}
                                    transition={{ duration: 0.15, ease: "easeOut" }}
                                />
                            </motion.div>

                            {/* Bottom Right - Third Image */}
                            <motion.div 
                                className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg cursor-pointer relative"
                                onHoverStart={() => setHoveredImage(3)}
                                onHoverEnd={() => setHoveredImage(null)}
                                animate={{
                                    scale: hoveredImage === 3 ? 2.5 : hoveredImage !== null && hoveredImage !== 3 ? 0.8 : 1,
                                    opacity: hoveredImage === 3 ? 1 : hoveredImage !== null && hoveredImage !== 3 ? 0.3 : 1,
                                    zIndex: hoveredImage === 3 ? 10 : 1,
                                }}
                                transition={{ duration: 0.15, ease: "easeOut" }}
                            >
                                <motion.img 
                                    src="/Chhayadol.jpg"
                                    alt="Educational support"
                                    className="w-full h-full object-cover"
                                    animate={{
                                        scale: hoveredImage === 3 ? 1.3 : 1,
                                    }}
                                    transition={{ duration: 0.15, ease: "easeOut" }}
                                />
                            </motion.div>
                        </div>

                        {/* Additional floating element */}
                        <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-200 rounded-full shadow-md"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionsSection