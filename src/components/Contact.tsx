
import { useState, useEffect, useRef, FormEvent } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isInView, setIsInView] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white to-blue-50 py-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Contact Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2 text-gray-900">Get In Touch</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have a project in mind or want to explore collaboration opportunities? 
            I'd love to hear from you and discuss how we can work together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Contact Information */}
          <div 
            className={`md:col-span-5 transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 text-blue-500 rounded-full mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a href="mailto:hello@designnarrative.com" className="text-blue-500 hover:underline transition-colors">
                      hello@designnarrative.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Available for project inquiries 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 text-blue-500 rounded-full mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <a href="tel:+1234567890" className="text-blue-500 hover:underline transition-colors">
                      +1 (234) 567-890
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Monday to Friday, 9AM to 6PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 text-blue-500 rounded-full mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">New York, NY</p>
                    <p className="text-sm text-gray-500 mt-1">Available for remote work globally</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 hover:bg-blue-100 hover:text-blue-500 rounded-full transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 hover:bg-blue-100 hover:text-blue-500 rounded-full transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://dribbble.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 hover:bg-blue-100 hover:text-blue-500 rounded-full transition-colors"
                    aria-label="Dribbble Profile"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            className={`md:col-span-7 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
              
              <p className="text-center text-gray-500 text-sm mt-4">
                I'll respond to your message within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map or decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100/50 to-transparent"></div>
    </section>
  );
};

export default Contact;
