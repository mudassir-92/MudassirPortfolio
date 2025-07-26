import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Send, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      title: "Email",
      value: "gem920se@gmail.com",
      icon: Mail,
      color: "bg-red-500 hover:bg-red-600",
      href: "mailto:gem920se@gmail.com"
    },
    {
      title: "GitHub",
      value: "@mudassir-92",
      icon: Github,
      color: "bg-gray-800 dark:bg-gray-600 hover:bg-gray-900 dark:hover:bg-gray-700",
      href: "https://github.com/mudassir-92"
    },
    {
      title: "LeetCode",
      value: "mudassir_920",
      icon: Code,
      color: "bg-orange-500 hover:bg-orange-600",
      href: "https://leetcode.com/u/mudassir_920/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-r from-primary/5 to-blue-50 dark:from-slate-800 dark:to-slate-700" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-slate-800 dark:text-white mb-8"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-slate-600 dark:text-slate-300 mb-12"
        >
          I'm always open to discussing new opportunities and interesting projects.
        </motion.p>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {contactMethods.map((method) => (
            <motion.a
              key={method.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              href={method.href}
              className="glass rounded-xl p-8 hover:scale-105 transition-transform group block"
            >
              <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-colors`}>
                <method.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">{method.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-white/50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 backdrop-blur-sm"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-white/50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 backdrop-blur-sm"
              />
            </div>
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="bg-white/50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 backdrop-blur-sm"
            />
            <Textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="bg-white/50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 backdrop-blur-sm resize-none"
            />
            <Button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
