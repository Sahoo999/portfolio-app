
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';

const projects = [
    {
        title: "DevNaukri",
        description: "Launched a job portal using Next.js, TypeScript, and Tailwind, featuring 60+ jobs from 50+ companies. Achieved 8500+ visitors and 35,000+ page views, connecting job seekers and employers. Utilized PostgreSQL and Prisma ORM to efficiently manage job listings and application data, ensuring robust database performance and scalability.",
        tech: ["TypeScript", "Next.js", "Postgres", "Prisma", "TailwindCss", "Shadcn"],
        demo: "https://devnaukri.vercel.app/"
    },
    {
        title: "Study Notion",
        description: "Architected a responsive Ed-tech platform for 35+ test users to create, consume, and rate content with full authentication & authorization. Integrated Razorpay for secure payments, enhancing course enrollment and instructor earnings. Established robust RESTful communication between frontend and backend services and validated all flows using Postman.",
        tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Cloudinary"],
        demo: "https://studynotion-by-vivek.vercel.app/"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl leading-relaxed">
                        A selection of projects that demonstrate my technical skills and problem-solving abilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <Folder className="w-10 h-10 text-blue-400" />
                                <div className="flex gap-4">
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="text-xs font-mono text-purple-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
