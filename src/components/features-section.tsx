import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Bot, 
  FileText, 
  BarChart3, 
  Moon, 
  User, 
  FileOutput 
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Expert Writing Team",
    description: "Professional academic writers with proven expertise"
  },
  {
    icon: FileText,
    title: "Research Support",
    description: "Comprehensive research and citation assistance"
  },
  {
    icon: Moon,
    title: "Flexible Scheduling",
    description: "24/7 availability with rush order options"
  },
  {
    icon: User,
    title: "Personalized Service",
    description: "Tailored assistance for your specific requirements"
  },
  {
    icon: FileOutput,
    title: "Quality Assurance",
    description: "Multiple rounds of review and proofreading"
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Real-time updates on your order status"
  }
];

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-950 to-neutral-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Advanced tools and features to enhance your academic writing experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group bg-neutral-800/50 backdrop-blur-lg rounded-xl p-6 border border-neutral-700/50 hover:bg-neutral-800/80 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}