import { motion } from 'framer-motion';
import { Shield, Network, Eye, Lock, AlertTriangle, CheckCircle, Activity, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function IPNetworkSafetyPage() {
  const monitoringSteps = [
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: 'Our systems continuously scan network traffic for suspicious patterns and anomalies.',
      color: 'from-primary to-teal',
    },
    {
      icon: Activity,
      title: 'Threat Detection',
      description: 'Advanced algorithms identify potentially malicious IP addresses and connection attempts.',
      color: 'from-teal to-secondary',
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessment',
      description: 'Each detected threat is analyzed and assigned a risk level based on multiple factors.',
      color: 'from-secondary to-lavender',
    },
    {
      icon: Lock,
      title: 'Automatic Blocking',
      description: 'High-risk connections are automatically blocked to prevent unauthorized access.',
      color: 'from-primary to-secondary',
    },
  ];

  const threatIndicators = [
    'Multiple failed login attempts from same IP',
    'Unusual geographic location patterns',
    'Known malicious IP databases matches',
    'Suspicious port scanning activity',
    'Abnormal data transfer volumes',
    'Connection attempts to restricted services',
  ];

  const protectionLayers = [
    {
      layer: 'Network Perimeter',
      description: 'First line of defense filtering incoming traffic',
      status: 'Active',
    },
    {
      layer: 'Firewall Rules',
      description: 'Dynamic rules based on threat intelligence',
      status: 'Active',
    },
    {
      layer: 'Intrusion Detection',
      description: 'Real-time monitoring of network behavior',
      status: 'Active',
    },
    {
      layer: 'IP Reputation',
      description: 'Global database of known threats',
      status: 'Active',
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
              <Network className="w-4 h-4 text-primary" />
              <span className="font-paragraph text-sm text-foreground">Network Security</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              IP & Network Safety
            </h1>
            <p className="font-paragraph text-xl text-foreground/70 leading-relaxed">
              Understanding how we monitor, detect, and block suspicious network connections to keep your digital identity safe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How Network Protection Works
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              A multi-layered approach to identifying and blocking cyber threats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {monitoringSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-teal/20 hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute top-6 right-6 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-heading text-sm font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="font-paragraph text-base text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < monitoringSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-teal" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Indicators Section */}
      <section className="py-24 bg-gradient-to-br from-background to-light-blue/30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                What We Monitor
              </h2>
              <p className="font-paragraph text-lg text-foreground/70 mb-8 leading-relaxed">
                Our advanced monitoring systems track multiple indicators to identify potential threats before they can cause harm.
              </p>
              <div className="space-y-4">
                {threatIndicators.map((indicator, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-teal/20"
                  >
                    <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph text-base text-foreground/80">
                      {indicator}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-teal/20 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    Live Monitoring Dashboard
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-subtle-green rounded-full animate-pulse" />
                    <span className="font-paragraph text-sm text-foreground/60">Active</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary/10 to-teal/10 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-paragraph text-sm text-foreground/60">Threats Blocked Today</span>
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-heading text-4xl font-bold text-foreground">1,247</div>
                  </div>

                  <div className="bg-gradient-to-br from-teal/10 to-secondary/10 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-paragraph text-sm text-foreground/60">Active Connections</span>
                      <Activity className="w-5 h-5 text-teal" />
                    </div>
                    <div className="font-heading text-4xl font-bold text-foreground">45,892</div>
                  </div>

                  <div className="bg-gradient-to-br from-secondary/10 to-lavender/10 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-paragraph text-sm text-foreground/60">System Uptime</span>
                      <CheckCircle className="w-5 h-5 text-subtle-green" />
                    </div>
                    <div className="font-heading text-4xl font-bold text-foreground">99.9%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Protection Layers Section */}
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
              Multi-Layer Protection
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto">
              Multiple security layers work together to provide comprehensive protection
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {protectionLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-teal/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-teal rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {layer.layer}
                      </h3>
                    </div>
                    <p className="font-paragraph text-base text-foreground/70 ml-14">
                      {layer.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 ml-6">
                    <div className="w-2 h-2 bg-subtle-green rounded-full" />
                    <span className="font-paragraph text-sm text-foreground/60 whitespace-nowrap">
                      {layer.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Explanation Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-teal to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="relative max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Network className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Your Safety is Our Priority
            </h2>
            <p className="font-paragraph text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Our network protection systems work silently in the background, 24/7, to ensure that suspicious connections are identified and blocked before they can threaten your digital security. With advanced threat intelligence and real-time monitoring, we keep you safe from evolving cyber threats.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
