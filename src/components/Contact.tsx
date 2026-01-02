import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useRef, useState } from 'react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_USER_ID
        );
        setSubmitStatus('success');
        formRef.current.reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-bold font-display leading-tight text-gray-900 dark:text-white mb-6">
                Let's build something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">legendary.</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg">
                Got an idea that challenges the norm? I'm ready to bring my technical expertise and creative vision to your next big project.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:hemanthchandran541@gmail.com" className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-gray-200 dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-neon-blue/20 transition-colors">
                  <Mail className="w-5 h-5 group-hover:text-neon-blue" />
                </div>
                <span className="text-lg">hemanthchandran541@gmail.com</span>
              </a>

              <a href="tel:+919605331411" className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-gray-200 dark:bg-white/5 rounded-full flex items-center justify-center group-hover:bg-neon-blue/20 transition-colors">
                  <Phone className="w-5 h-5 text-gray-700 dark:text-white group-hover:text-neon-blue" />
                </div>
                <span className="text-lg">+91 9605331411</span>
              </a>

              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 group">
                <div className="w-12 h-12 bg-gray-200 dark:bg-white/5 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-700 dark:text-white" />
                </div>
                <span className="text-lg">Kerala, India</span>
              </div>
            </div>

            <div className="flex gap-4 pt-8">
              {/* Social Placeholders - add real links if available */}
              <SocialLink icon={<Github />} href="https://github.com/hmc-69" />
              <SocialLink icon={<Linkedin />} href="https://www.linkedin.com/in/hemanthchandran/" />
              {/* <SocialLink icon={<Twitter />} href="#" /> */}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/50 dark:bg-glass p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-white/10 relative shadow-xl dark:shadow-none backdrop-blur-sm"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Name</label>
                <input type="text" name="name" required className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-blue/50 focus:bg-white dark:focus:bg-white/10 transition-all shadow-sm dark:shadow-none" placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Email</label>
                <input type="email" name="email" required className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-blue/50 focus:bg-white dark:focus:bg-white/10 transition-all shadow-sm dark:shadow-none" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">Message</label>
                <textarea name="message" required rows={4} className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-neon-blue/50 focus:bg-white dark:focus:bg-white/10 transition-all resize-none shadow-sm dark:shadow-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-xl hover:bg-black dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-center text-sm mt-4">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center text-sm mt-4">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <a href={href} className="w-12 h-12 border border-gray-200 dark:border-white/20 rounded-full flex items-center justify-center text-gray-600 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
    {icon}
  </a>
)

export default Contact;