
import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-900/50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Education Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                        <GraduationCap className="text-white" /> Education
                    </h2>

                    <div className="relative pl-8 border-l border-white/10 space-y-12">
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 p-2 bg-slate-900 border border-white/10 rounded-full">
                                <GraduationCap size={16} className="text-blue-400" />
                            </div>
                            <div className="glass p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-white">Bachelor of Technology (CSE)</h3>
                                <p className="text-blue-400 mb-2">JIS University</p>
                                <p className="text-gray-400 text-sm">
                                    Focused on Computer Science and Engineering fundamentals, Data Structures, and Algorithms.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Achievements Column */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 flex items-center gap-3">
                        <Trophy className="text-white" /> Achievements
                    </h2>

                    <div className="space-y-6">
                        <div className="glass p-6 rounded-xl flex items-start gap-4 hover:border-blue-500/30 transition-all">
                            <div className="p-3 bg-blue-500/10 rounded-lg">
                                <Award className="text-blue-400" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-1">LeetCode Rank 359</h3>
                                <p className="text-gray-400 text-sm">
                                    Achieved All India Rank 359 in LeetCode Biweekly Contest 173.
                                </p>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl flex items-start gap-4 hover:border-purple-500/30 transition-all">
                            <div className="p-3 bg-purple-500/10 rounded-lg">
                                <Trophy className="text-purple-400" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-1">1000+ Problems Solved</h3>
                                <p className="text-gray-400 text-sm">
                                    Solved over 1000 algorithmic problems on LeetCode with a max rating of 1714.
                                </p>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl flex items-start gap-4 hover:border-pink-500/30 transition-all">
                            <div className="p-3 bg-pink-500/10 rounded-lg">
                                <Award className="text-pink-400" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-1">Top Engineering Voice</h3>
                                <p className="text-gray-400 text-sm">
                                    1050+ Blog views on LeetCode with 80+ stars.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Education;
