import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {


    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse" />
                        Available for work
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Hi, I'm <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                            Debangsu
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-medium text-gray-200">
                        Software Engineer
                    </h2>

                    <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                        Experienced Software Engineer specializing in backend development, API optimization, and building scalable web applications with modern technologies.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link to="contact" smooth={true} duration={500} className="px-8 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-gray-100 transition-all cursor-pointer flex items-center gap-2">
                            Get In Touch
                            <ArrowRight size={18} />
                        </Link>
                        <a href="#resume" className="px-8 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-semibold hover:bg-white/10 transition-all cursor-pointer">
                            View Resume
                        </a>
                    </div>

                    <div className="flex items-center gap-6 pt-6 text-gray-400">
                        <a href="https://www.linkedin.com/in/debangsu-sahoo-2609a9289" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/Sahoo999" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="mailto:sahoodebangsu@gmail.com" className="hover:text-white transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>

                </motion.div>

                {/* Right Content - Terminal */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative rounded-xl bg-[#0F1117] border border-white/5 shadow-2xl overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 bg-[#0F1117] border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <div className="ml-4 text-xs text-gray-500 font-mono">debangsu@dev ~</div>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-sm font-mono leading-relaxed">
                                <div className="text-purple-400 mb-2">class <span className="text-yellow-400">Developer</span> {'{'}</div>
                                <div className="pl-4 text-blue-400">constructor <span className="text-gray-400">() {'{'}</span></div>
                                <div className="pl-8 text-red-400">this<span className="text-gray-400">.</span><span className="text-blue-300">name</span> <span className="text-white">=</span> <span className="text-green-400">"Debangsu"</span><span className="text-gray-400">;</span></div>
                                <div className="pl-8 text-red-400">this<span className="text-gray-400">.</span><span className="text-blue-300">role</span> <span className="text-white">=</span> <span className="text-green-400">"Software Engineer"</span><span className="text-gray-400">;</span></div>
                                <div className="pl-8 text-red-400">this<span className="text-gray-400">.</span><span className="text-blue-300">location</span> <span className="text-white">=</span> <span className="text-green-400">"India"</span><span className="text-gray-400">;</span></div>
                                <div className="pl-4 text-gray-400">{'}'}</div>
                                <br />
                                <div className="pl-4 text-blue-400">skills <span className="text-gray-400">() {'{'}</span></div>
                                <div className="pl-8 text-purple-400">return <span className="text-gray-400">[</span></div>
                                <div className="pl-12 text-green-400">"Node.js"<span className="text-gray-400">,</span> "Postgres"<span className="text-gray-400">,</span></div>
                                <div className="pl-12 text-green-400">"AWS"<span className="text-gray-400">,</span> "Docker"</div>
                                <div className="pl-8 text-gray-400">]<span className="text-gray-400">;</span></div>
                                <div className="pl-4 text-gray-400">{'}'}</div>
                                <div className="text-gray-400">{'}'}</div>
                            </pre>
                        </div>
                    </div>

                    {/* Glow effect behind terminal */}
                    <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 blur-[100px] rounded-full" />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
