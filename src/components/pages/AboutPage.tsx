import { motion } from 'framer-motion';
import { Shield, Target, Users, Eye, Heart, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Building a foundation of trust through transparent and secure digital practices.',
    },
    {
      icon: Users,
      title: 'Citizen-Centric',
      description: 'Designed with every Indian citizen in mind, making cyber safety accessible to all.',
    },
    {
      icon: Eye,
      title: 'Awareness First',
      description: 'Empowering citizens with knowledge to recognize and prevent cyber threats.',
    },
    {
      icon: Heart,
      title: 'Public Service',
      description: 'Committed to serving the public interest and protecting digital rights.',
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Quick identification and mitigation of emerging cyber threats.',
    },
    {
      icon: Target,
      title: 'Precision Protection',
      description: 'Targeted solutions for specific threats facing Indian citizens.',
    },
  ];

  const milestones = [
    { year: '2024', title: 'Initiative Launch', description: 'Digital Guardian platform goes live' },
    { year: '2025', title: '1M Users', description: 'Reached one million protected citizens' },
    { year: '2025', title: 'National Coverage', description: 'Expanded to all states and territories' },
    { year: '2026', title: 'AI Integration', description: 'Advanced threat detection systems deployed' },
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
              <Shield className="w-4 h-4 text-primary" />
              <span className="font-paragraph text-sm text-foreground">About Our Mission</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Protecting India's Digital Identity
            </h1>
            <p className="font-paragraph text-xl text-foreground/70 leading-relaxed">
              A public service initiative dedicated to empowering Indian citizens with the knowledge and tools to navigate the digital world safely and securely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <div className="space-y-6">
                <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                  In an increasingly connected world, digital safety has become as essential as physical safety. The Digital Guardian initiative was born from the recognition that every Indian citizen deserves to participate in the digital economy without fear of fraud, identity theft, or cyber exploitation.
                </p>
                <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                  We work tirelessly to educate citizens about emerging cyber threats, from SIM fraud and scam calls to sophisticated phishing attacks and identity misuse. Our approach combines cutting-edge technology with clear, accessible communication to ensure that digital safety is within everyone's reach.
                </p>
                <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                  Through partnerships with telecom providers, law enforcement agencies, and cybersecurity experts, we create a comprehensive shield against digital threats while respecting privacy and individual rights.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/10 via-teal/10 to-lavender/10 rounded-2xl p-12 border border-teal/20"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">Vision</h3>
                  <p className="font-paragraph text-base text-foreground/70 leading-relaxed">
                    A digitally empowered India where every citizen can safely access online services, conduct digital transactions, and protect their personal information with confidence.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">Commitment</h3>
                  <p className="font-paragraph text-base text-foreground/70 leading-relaxed">
                    We are committed to providing free, accessible, and actionable cyber safety information to all Indians, regardless of their technical expertise or digital literacy level.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-background to-light-blue/30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              The principles that guide our mission to protect India's digital future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-lg rounded-xl p-8 border border-teal/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-teal rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-paragraph text-base text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              Key milestones in our mission to secure India's digital landscape
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-teal to-secondary hidden lg:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-teal/20 inline-block">
                      <div className="font-heading text-3xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="font-paragraph text-base text-foreground/70">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10" />
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-teal to-secondary">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Making a Real Difference
            </h2>
            <p className="font-paragraph text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Every day, we help thousands of Indian citizens recognize threats, protect their identities, and navigate the digital world with confidence. Together, we're building a safer digital India for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
