import emailjs from 'emailjs-com';
import { CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600 dark:text-blue-400" size={24} />,
      title: 'Email',
      value: 'hemanthchandran541@gmail.com',
      link: 'mailto:hemanthchandran541@gmail.com',
    },
    {
      icon: <Phone className="text-blue-600 dark:text-blue-400" size={24} />,
      title: 'Phone',
      value: '+91 9605331411',
      link: 'tel:+919605331411',
    },
    {
      icon: <MapPin className="text-blue-600 dark:text-blue-400" size={24} />,
      title: 'Location',
      value: 'India',
      link: null,
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            Get In Touch
          </span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transform transition-all duration-500 hover:shadow-lg ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <div 
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 transform transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Send me a message</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300`}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300`}
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-md border ${
                      errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;