import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-[#0F1117] border border-white/5 rounded-[2rem] p-12 text-center relative overflow-hidden"
                >
                    {/* Gradient Border Line Top */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500" />

                    {/* Background Glow */}
                    <div className="absolute top-[-50%] left-1/2 transform -translate-x-1/2 w-[60%] h-[60%] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
                        Let’s Build Something Scalable
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
                        I’m currently open to new opportunities. Whether you have a question or just want to say hi,
                        I’ll try my best to get back to you!
                    </p>

                    <div className="relative z-10">
                        <a
                            href="mailto:sahoodebangsu@gmail.com"
                            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105"
                        >
                            <Mail size={20} />
                            Say Hello
                        </a>
                    </div>

                </motion.div>

                {/* Footer Links (Placed outside/below the card as per design usually, or could be part of footer) */}
                <div className="mt-16 flex justify-center gap-8 text-gray-400">
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

            </div>
        </section>
    );
};

export default Contact;
