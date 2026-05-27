import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Send, ArrowRight, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

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
    <section id="contact" className="py-32 bg-bg relative">
      {/* Subtle top separator */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Heading and social connections (5 cols) */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-label uppercase text-text-tertiary tracking-widest mb-6">
                Contact
              </p>
              <h2 className="text-heading text-text leading-tight mb-6">
                Let's build <br />something <span className="text-accent">together.</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed max-w-sm mt-6">
                Got a project in mind, a role to discuss, or just want to say hello? I'd love to hear from you.
              </p>
            </motion.div>

            {/* Direct Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <a
                href="mailto:hemanthchandran541@gmail.com"
                className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-full border border-border group-hover:border-accent/30 flex items-center justify-center transition-all duration-300">
                  <Mail size={16} />
                </div>
                <span className="text-[15px] font-mono">hemanthchandran541@gmail.com</span>
              </a>

              <a
                href="tel:+919605331411"
                className="flex items-center gap-4 text-text-secondary hover:text-accent transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-full border border-border group-hover:border-accent/30 flex items-center justify-center transition-all duration-300">
                  <Phone size={16} />
                </div>
                <span className="text-[15px] font-mono">+91 9605331411</span>
              </a>

              <div className="flex items-center gap-4 text-text-secondary">
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <span className="text-[15px] font-mono">Kerala, India</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 pt-4 border-t border-border/40"
            >
              <a
                href="https://github.com/hmc-69"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border hover:border-border-hover text-text-secondary hover:text-text flex items-center justify-center transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/hemanthchandran/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border hover:border-border-hover text-text-secondary hover:text-text flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Premium Form (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-10 bg-surface border border-border rounded-2xl relative overflow-hidden"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-text-tertiary uppercase tracking-wider block ml-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full bg-bg border border-border focus:border-accent hover:border-border-hover rounded-xl px-4 py-3.5 text-text focus:outline-none transition-all duration-300 text-[15px]"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-text-tertiary uppercase tracking-wider block ml-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full bg-bg border border-border focus:border-accent hover:border-border-hover rounded-xl px-4 py-3.5 text-text focus:outline-none transition-all duration-300 text-[15px]"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono text-text-tertiary uppercase tracking-wider block ml-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-bg border border-border focus:border-accent hover:border-border-hover rounded-xl px-4 py-3.5 text-text focus:outline-none transition-all duration-300 text-[15px] resize-none"
                    placeholder="Tell me about your project, idea, or role..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group py-4 bg-text hover:bg-accent text-bg hover:text-white font-semibold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:bg-text disabled:hover:text-bg"
                >
                  {isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {/* Status messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-emerald-400 text-center text-sm font-medium mt-4 bg-emerald-400/5 py-2.5 rounded-lg border border-emerald-500/20"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.p>
                  )}
                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-400 text-center text-sm font-medium mt-4 bg-red-400/5 py-2.5 rounded-lg border border-red-500/20"
                    >
                      Failed to send. Please email me directly at hemanthchandran541@gmail.com
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;