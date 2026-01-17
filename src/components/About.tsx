import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        "JavaScript", "TypeScript", "C++", "Ruby", "React.js",
        "Next.js", "Express.js", "Node.js", "MongoDB",
        "Ruby on Rails", "REST", "Kafka", "AWS", "Datadog",
        "Git", "Vercel", "Docker", "Postman", "Github",
        "Grafana", "Pagerduty", "Redis"
    ];

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[2px] w-12 bg-orange-500"></div>
                        <h2 className="text-2xl font-bold text-white">Tech Stack</h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left Column - Technologies Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-[#0F1117] border border-white/5 p-8 rounded-3xl"
                    >
                        <h3 className="text-xl font-bold text-gray-200 mb-6">Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span key={index} className="px-4 py-2 bg-[#1A1D26] text-gray-400 text-sm font-medium rounded-lg border border-white/5 hover:text-white hover:border-white/10 transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Stats & Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                        {/* Years Exp Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#0F1117] border border-white/5 p-8 rounded-3xl flex flex-col justify-center items-center text-center"
                        >
                            <h4 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">1.5+</h4>
                            <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">Years Exp</p>
                        </motion.div>

                        {/* LeetCode Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-[#0F1117] border border-white/5 p-8 rounded-3xl flex flex-col justify-center items-center text-center"
                        >
                            <h4 className="text-5xl font-bold text-orange-500 mb-2">1000+</h4>
                            <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">LeetCode</p>
                        </motion.div>

                        {/* Location/Focus Card - Spans full width of right column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-[#0F1117] border border-white/5 p-8 rounded-3xl flex justify-between items-center md:col-span-2"
                        >
                            <div>
                                <p className="text-gray-500 text-sm mb-1">Current Location</p>
                                <p className="text-xl font-bold text-white">India</p>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-500 text-sm mb-1">Focus</p>
                                <p className="text-xl font-bold text-blue-500">Backend Systems</p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
