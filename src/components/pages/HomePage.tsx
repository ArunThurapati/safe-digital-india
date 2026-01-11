// HPI 1.6-V
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, AlertTriangle, Network, ArrowRight, CheckCircle, Activity, Globe, Smartphone, Server } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

// --- Types ---
type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
  id: string;
};

type Stat = {
  value: string;
  label: string;
};

// --- Canonical Data Sources ---
const FEATURES: Feature[] = [
  {
    id: 'f1',
    icon: Shield,
    title: 'SIM Fraud Protection',
    description: 'Advanced protocols to detect and prevent unauthorized SIM swaps, ensuring your mobile identity remains solely yours.',
  },
  {
    id: 'f2',
    icon: AlertTriangle,
    title: 'Scam Call Awareness',
    description: 'Real-time identification of fraudulent caller IDs, empowering citizens to recognize and report deceptive communications.',
  },
  {
    id: 'f3',
    icon: Lock,
    title: 'Digital Identity Security',
    description: 'Comprehensive safeguards for your personal data, utilizing next-gen encryption to prevent identity misuse.',
  },
  {
    id: 'f4',
    icon: Network,
    title: 'Network Threat Monitoring',
    description: '24/7 surveillance of network traffic to identify, isolate, and neutralize suspicious IP connections before they reach you.',
  },
];

const STATS: Stat[] = [
  { value: '10M+', label: 'Citizens Protected' },
  { value: '500K+', label: 'Threats Blocked' },
  { value: '24/7', label: 'Active Monitoring' },
  { value: '99.9%', label: 'System Uptime' },
];

const SAFETY_TIPS: string[] = [
  'Never share OTP or PIN with anyone, including bank officials',
  'Verify caller identity before sharing any personal information',
  'Enable two-factor authentication on all important accounts',
  'Regularly monitor your bank statements for suspicious activity',
  'Report suspicious calls or messages to cybercrime authorities',
];

// --- Helper Components ---

// Mandatory AnimatedElement for Scroll Reveals
type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay via setTimeout if needed, or just let CSS handle it
          setTimeout(() => {
            element.classList.add('is-visible');
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-base ${className || ''}`}>
      {children}
    </div>
  );
};

// Scroll Progress Observer for Parallax Effects
const ScrollProgressObserver: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress: 0 when entering bottom, 1 when leaving top
      let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      progress = Math.max(0, Math.min(1, progress));
      
      container.style.setProperty('--scroll-progress', progress.toString());
    };

    // Use a passive scroll listener for performance, but ideally we'd use IntersectionObserver to enable/disable the listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

// --- Main Page Component ---

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background font-paragraph overflow-clip selection:bg-primary/20 selection:text-primary">
      <style>{`
        .reveal-base {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .reveal-base.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Custom Scrollbar for a cleaner look */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(120, 176, 255, 0.3);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(120, 176, 255, 0.5);
        }

        /* Gradient Text Utility */
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(135deg, #4A5568 0%, #78B0FF 100%);
        }

        /* Glassmorphism Utilities */
        .glass-panel {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(174, 226, 255, 0.3);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
        }

        /* Animation Utilities */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite 1s;
        }
        
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-soft {
          animation: pulse-soft 4s ease-in-out infinite;
        }
      `}</style>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-teal to-secondary origin-left z-50"
        style={{ scaleX }}
      />

      <Header />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-light-blue via-white to-lavender/30 z-0" />
          
          {/* Abstract Shapes / Parallax Background */}
          <ScrollProgressObserver className="absolute inset-0 z-0 pointer-events-none">
            <div 
              className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-teal/20 blur-[100px]"
              style={{ transform: 'translateY(calc(var(--scroll-progress) * 100px))' }}
            />
            <div 
              className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-secondary/10 blur-[80px]"
              style={{ transform: 'translateY(calc(var(--scroll-progress) * -150px))' }}
            />
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(120,176,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,176,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </ScrollProgressObserver>

          <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <AnimatedElement>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-primary/20 mb-8 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-paragraph text-sm font-medium text-foreground/80 tracking-wide uppercase">Official Digital India Initiative</span>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={100}>
                <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
                  Securing India's <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Future</span>
                </h1>
              </AnimatedElement>

              <AnimatedElement delay={200}>
                <p className="font-paragraph text-xl md:text-2xl text-foreground/70 max-w-2xl mb-10 leading-relaxed">
                  A unified shield for every citizen. Empowering you with the knowledge and tools to navigate the digital world with absolute confidence.
                </p>
              </AnimatedElement>

              <AnimatedElement delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/cyber-awareness">
                    <Button className="h-14 px-8 rounded-full bg-foreground text-white hover:bg-foreground/90 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                      Start Learning
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-foreground/10 text-foreground hover:bg-foreground/5 text-lg font-medium transition-all duration-300">
                      Our Mission
                    </Button>
                  </Link>
                </div>
              </AnimatedElement>
            </div>

            {/* Hero Visual / 3D Composition */}
            <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
              <ScrollProgressObserver className="w-full h-full relative">
                {/* Main Floating Card */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] glass-panel rounded-3xl shadow-2xl z-20 overflow-hidden flex flex-col"
                  style={{ transform: 'translate(-50%, calc(-50% + var(--scroll-progress) * -50px))' }}
                >
                  <div className="h-1/2 bg-gradient-to-b from-light-blue/50 to-transparent p-6 flex items-center justify-center">
                    <Shield className="w-32 h-32 text-primary/80 drop-shadow-lg animate-float" />
                  </div>
                  <div className="p-8">
                    <div className="h-2 w-24 bg-primary/20 rounded-full mb-4" />
                    <div className="h-2 w-full bg-foreground/5 rounded-full mb-2" />
                    <div className="h-2 w-3/4 bg-foreground/5 rounded-full mb-2" />
                    <div className="h-2 w-5/6 bg-foreground/5 rounded-full" />
                    
                    <div className="mt-8 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground">System Secure</div>
                        <div className="text-xs text-foreground/50">Last scan: Just now</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements Behind */}
                <div 
                  className="absolute top-[20%] right-[10%] w-24 h-24 glass-card rounded-2xl flex items-center justify-center z-10 animate-float-delayed"
                  style={{ transform: 'translateY(calc(var(--scroll-progress) * -80px))' }}
                >
                  <Lock className="w-10 h-10 text-secondary" />
                </div>
                
                <div 
                  className="absolute bottom-[20%] left-[10%] w-20 h-20 glass-card rounded-2xl flex items-center justify-center z-30 animate-float"
                  style={{ transform: 'translateY(calc(var(--scroll-progress) * -30px))' }}
                >
                  <Network className="w-8 h-8 text-teal-500" />
                </div>
              </ScrollProgressObserver>
            </div>
          </div>
        </section>

        {/* --- STATS TICKER SECTION --- */}
        <section className="py-12 border-y border-foreground/5 bg-white/50 backdrop-blur-sm">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-foreground/5">
              {STATS.map((stat, index) => (
                <AnimatedElement key={index} delay={index * 100} className="text-center px-4">
                  <div className="font-heading text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-teal mb-2">
                    {stat.value}
                  </div>
                  <div className="font-paragraph text-sm font-medium text-foreground/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* --- MISSION STATEMENT (Parallax Text) --- */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <AnimatedElement>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                    Building a <br />
                    <span className="text-primary">Resilient Digital</span> <br />
                    Ecosystem
                  </h2>
                </AnimatedElement>
                <AnimatedElement delay={100}>
                  <p className="font-paragraph text-lg text-foreground/70 leading-relaxed mb-6">
                    In an era where our lives are increasingly digital, security isn't just a feature—it's a fundamental right. We are dedicated to creating a transparent, robust, and citizen-centric safety net.
                  </p>
                  <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                    From protecting your mobile identity to securing the networks that connect us, our mission is to stay one step ahead of threats, ensuring that technology remains a tool for empowerment, not exploitation.
                  </p>
                </AnimatedElement>
                
                <AnimatedElement delay={200}>
                  <div className="mt-10 pt-10 border-t border-foreground/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Activity className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-foreground">Real-time Threat Intelligence</h4>
                        <p className="text-sm text-foreground/60">Constantly updating our defense protocols.</p>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              </div>

              <div className="relative h-[600px] rounded-3xl overflow-hidden">
                <ScrollProgressObserver className="w-full h-full">
                  <div 
                    className="absolute inset-0 w-full h-[120%]"
                    style={{ transform: 'translateY(calc(var(--scroll-progress) * -100px))' }}
                  >
                    <Image 
                      src="https://static.wixstatic.com/media/8c74af_6654007cc0b24076b087ccca2e53ba52~mv2.png?originWidth=1152&originHeight=576"
                      alt="Digital network visualization representing connectivity and security"
                      className="w-full h-full object-cover"
                      width={1200}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </ScrollProgressObserver>
              </div>
            </div>
          </div>
        </section>

        {/* --- STICKY FEATURES SECTION --- */}
        <section className="py-32 bg-light-blue/30 relative">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-20">
              
              {/* Sticky Sidebar */}
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <AnimatedElement>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/20 rounded-full text-teal-700 text-xs font-bold uppercase tracking-wider mb-6">
                      Core Protections
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                      Comprehensive <br /> Cyber Defense
                    </h2>
                    <p className="font-paragraph text-lg text-foreground/70 mb-8">
                      Our multi-layered approach ensures that every aspect of your digital life is guarded against evolving threats.
                    </p>
                    <Link to="/cyber-awareness">
                      <Button variant="ghost" className="p-0 text-primary hover:text-primary/80 hover:bg-transparent font-semibold text-lg group">
                        Explore all features <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </AnimatedElement>
                </div>
              </div>

              {/* Scrolling Cards */}
              <div className="lg:w-2/3 flex flex-col gap-8">
                {FEATURES.map((feature, index) => (
                  <AnimatedElement key={feature.id} delay={index * 50}>
                    <div className="group relative bg-white rounded-3xl p-10 shadow-sm border border-white/50 hover:shadow-xl transition-all duration-500 overflow-hidden">
                      {/* Hover Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-light-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-teal flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                          <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* --- NETWORK SAFETY VISUALIZATION (Conceptual Demo) --- */}
        <section className="py-32 bg-foreground text-white overflow-hidden relative">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <AnimatedElement>
                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Intelligent Threat Blocking</h2>
                <p className="font-paragraph text-xl text-white/70 max-w-2xl mx-auto">
                  Visualizing how our network filters identify and neutralize suspicious connections in real-time.
                </p>
              </AnimatedElement>
            </div>

            {/* The Visualization */}
            <div className="relative h-[400px] w-full max-w-4xl mx-auto bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              
              {/* Central Shield */}
              <div className="relative z-20 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(120,176,255,0.3)]">
                <Shield className="w-10 h-10 text-white" />
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20" />
              </div>

              {/* Incoming Threats (Animated Dots) */}
              <div className="absolute inset-0 z-10">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                    style={{
                      top: '50%',
                      left: '50%',
                      animation: `threat-incoming 3s infinite linear ${i * 0.5}s`,
                      opacity: 0
                    }}
                  />
                ))}
              </div>

              {/* Safe Traffic (Animated Dots) */}
              <div className="absolute inset-0 z-10">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={`safe-${i}`}
                    className="absolute w-2 h-2 bg-teal-400 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      animation: `safe-traffic 4s infinite linear ${i * 0.6}s`,
                      opacity: 0
                    }}
                  />
                ))}
              </div>

              {/* CSS for the visualization */}
              <style>{`
                @keyframes threat-incoming {
                  0% { transform: translate(-400px, ${Math.random() * 200 - 100}px); opacity: 1; }
                  60% { transform: translate(-60px, 0); opacity: 1; background-color: #ef4444; }
                  70% { transform: translate(-40px, 0); opacity: 0; transform: scale(2); }
                  100% { opacity: 0; }
                }
                @keyframes safe-traffic {
                  0% { transform: translate(400px, ${Math.random() * 200 - 100}px); opacity: 1; }
                  45% { transform: translate(60px, 0); opacity: 1; }
                  55% { transform: translate(-60px, 0); opacity: 1; }
                  100% { transform: translate(-400px, ${Math.random() * 200 - 100}px); opacity: 1; }
                }
              `}</style>

              {/* Labels */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 text-left hidden md:block">
                <div className="text-red-400 font-bold text-sm mb-1">Suspicious Traffic</div>
                <div className="text-white/40 text-xs">Blocked automatically</div>
              </div>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right hidden md:block">
                <div className="text-teal-400 font-bold text-sm mb-1">Verified Traffic</div>
                <div className="text-white/40 text-xs">Allowed securely</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SAFETY TIPS (Masonry/Grid) --- */}
        <section className="py-32 bg-gradient-to-b from-white to-light-blue/20">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              
              <div className="md:w-1/3 sticky top-32">
                <AnimatedElement>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Essential <br /> Safety Habits
                  </h2>
                  <p className="font-paragraph text-lg text-foreground/70 mb-8">
                    Cyber safety starts with you. Adopting these simple daily habits can prevent 90% of common digital threats.
                  </p>
                  <Link to="/cyber-awareness">
                    <Button className="bg-foreground text-white hover:bg-foreground/90 px-8 py-6 rounded-lg text-base font-paragraph shadow-lg">
                      View Full Guide
                    </Button>
                  </Link>
                </AnimatedElement>
              </div>

              <div className="md:w-2/3 grid grid-cols-1 gap-6">
                {SAFETY_TIPS.map((tip, index) => (
                  <AnimatedElement key={index} delay={index * 100}>
                    <div className="flex items-start gap-6 p-8 bg-white rounded-2xl shadow-sm border border-teal/10 hover:border-teal/30 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-subtle-green flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-teal-700" />
                      </div>
                      <div>
                        <h4 className="font-heading text-xl font-bold text-foreground mb-2">Tip #{index + 1}</h4>
                        <p className="font-paragraph text-lg text-foreground/80">{tip}</p>
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-teal to-secondary opacity-90" />
          <div className="absolute inset-0 bg-[url('https://static.wixstatic.com/media/8c74af_e79e7c25a03d4c91a478f7435e9dd66f~mv2.png?originWidth=1152&originHeight=768')] opacity-10 mix-blend-overlay" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <AnimatedElement>
              <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-sm">
                Ready to Secure Your Digital Life?
              </h2>
              <p className="font-paragraph text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
                Join millions of responsible citizens in creating a safer, more secure digital India.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <Button className="bg-white text-primary hover:bg-white/90 px-10 py-7 rounded-xl text-lg font-bold shadow-xl transition-transform hover:scale-105">
                    Get in Touch
                  </Button>
                </Link>
                <Link to="/cyber-awareness">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 rounded-xl text-lg font-bold">
                    Learn More
                  </Button>
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}