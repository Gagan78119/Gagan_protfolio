
import { useState, useEffect, useRef, FormEvent } from 'react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isInView, setIsInView] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
        subject: '',
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
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-sm text-blue-600 mb-2">— Contact Me</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-semibold mb-2">Call Me</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email Me</h3>
              <p className="text-gray-600">hello@johndoe.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Toronto, Canada</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-10">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all"
                      placeholder="Hi John, I'd like to discuss a project..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              <div className="bg-blue-600 p-6 md:p-10 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <p className="mb-8">
                    Fill up the form and I'll get back to you within 24 hours.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Phone size={20} />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-white/80">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail size={20} />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-white/80">hello@johndoe.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin size={20} />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-white/80">123 Design Street, Toronto, Canada</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <p className="font-medium mb-3">Follow Me</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
