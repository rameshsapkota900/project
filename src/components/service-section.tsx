import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  BookOpen, 
  CheckCircle, 
  FileSearch, 
  PenTool, 
  Sparkles, 
  Zap 
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Coursework & Assignment Assistance",
    description: "Expert guidance and support for all academic subjects"
  },
  {
    icon: CheckCircle,
    title: "Assessment Help",
    description: "Comprehensive support for exams and assessments"
  },
  {
    icon: FileSearch,
    title: "AI-Powered Plagiarism Removal",
    description: "Advanced detection and unique content generation"
  },
  {
    icon: PenTool,
    title: "Advanced Rewriting",
    description: "Smart paraphrasing with context understanding"
  },
  {
    icon: Sparkles,
    title: "Grammar Enhancement",
    description: "Professional proofreading and correction"
  },
  {
    icon: Zap,
    title: "Instant Analysis",
    description: "Real-time feedback and improvements"
  }
];

export function ServiceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-950" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-neutral-400 max-w-2xl mx-auto"
          >
            Comprehensive academic support powered by cutting-edge AI technology
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group bg-neutral-800/50 backdrop-blur-lg rounded-xl p-6 border border-neutral-700/50 hover:bg-neutral-800/80 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}