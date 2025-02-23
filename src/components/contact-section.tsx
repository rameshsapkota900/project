import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const faqs = [
  {
    question: "What academic writing services do you offer?",
    answer: "We provide comprehensive academic writing assistance including essay writing, research papers, dissertations, thesis help, coursework support, and assignment guidance across all subjects."
  },
  {
    question: "How do you ensure the quality of work?",
    answer: "Our team of expert academic writers follows strict quality control measures, including thorough research, proper citations, plagiarism checks, and multiple rounds of proofreading."
  },
  {
    question: "What is your turnaround time?",
    answer: "We offer flexible delivery options ranging from 24 hours to several days, depending on the complexity and length of your assignment. Rush orders are also available for urgent requirements."
  },
];

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_03zck94',
        'template_5vwlez8',
        {
          to_name: 'Admin',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'E_p9hJ8b_gCaw7KCq'
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 relative overflow-hidden" ref={ref}>
      <Toaster position="top-right" richColors closeButton theme="dark" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 animate-pulse"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-neutral-900/20 rounded-2xl p-8 border border-neutral-800/50 hover:border-blue-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 mb-6">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-xl bg-neutral-800/30 border border-neutral-700/50 px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-xl bg-neutral-800/30 border border-neutral-700/50 px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-xl bg-neutral-800/30 border border-neutral-700/50 px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                />
              </div>
              <Button 
                type="submit"
                size="lg" 
                disabled={isLoading}
                className="w-full group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  className="bg-neutral-800/50 backdrop-blur-lg rounded-xl p-6 border border-neutral-700/50"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <MessageSquare className="h-5 w-5 text-blue-400 mr-2" />
                    {faq.question}
                  </h3>
                  <p className="text-neutral-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}