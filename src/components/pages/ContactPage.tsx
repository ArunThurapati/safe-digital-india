import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@digitalguardian.gov.in',
      link: 'mailto:support@digitalguardian.gov.in',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '1800-XXX-XXXX (Toll Free)',
      link: 'tel:1800XXXXXXX',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Digital Guardian Initiative, New Delhi, India',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-light-blue via-teal/30 to-lavender/40">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="font-paragraph text-sm text-foreground">Get in Touch</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="font-paragraph text-xl text-foreground/70 leading-relaxed">
              Have questions or need assistance? We're here to help protect your digital identity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {info.link ? (
                  <a
                    href={info.link}
                    className="block bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-teal/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="font-paragraph text-base text-foreground/70">
                      {info.value}
                    </p>
                  </a>
                ) : (
                  <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-teal/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-teal rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="font-paragraph text-base text-foreground/70">
                      {info.value}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-background to-light-blue/30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="font-paragraph text-lg text-foreground/70 mb-8 leading-relaxed">
                Whether you have a question about cyber threats, need help with a security issue, or want to report suspicious activity, our team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-teal/20">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Response Time
                  </h3>
                  <p className="font-paragraph text-base text-foreground/70">
                    We typically respond to all inquiries within 24-48 hours during business days.
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-teal/20">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Emergency Support
                  </h3>
                  <p className="font-paragraph text-base text-foreground/70">
                    For urgent cyber security incidents, please call our toll-free helpline immediately.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-teal/20 shadow-xl">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-br from-subtle-green/20 to-subtle-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-subtle-green" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="font-paragraph text-base text-foreground/70">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="font-paragraph text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full font-paragraph"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-paragraph text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full font-paragraph"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="font-paragraph text-sm font-medium text-foreground mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full font-paragraph"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="font-paragraph text-sm font-medium text-foreground mb-2 block">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full font-paragraph"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-paragraph text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-[150px] font-paragraph"
                        placeholder="Please describe your inquiry or concern in detail..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-lg font-paragraph text-base font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Additional Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              We're Here to Help
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              The Digital Guardian team is committed to protecting Indian citizens from cyber threats. Whether you need information, assistance, or want to report a security concern, we're available to support you in creating a safer digital India.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
