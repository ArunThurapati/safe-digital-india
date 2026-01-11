import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, Search, AlertTriangle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { CyberAwarenessTopics } from '@/entities';
import { Input } from '@/components/ui/input';
import { Image } from '@/components/ui/image';

export default function CyberAwarenessPage() {
  const [topics, setTopics] = useState<CyberAwarenessTopics[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTopics();
  }, []);

  const loadTopics = async () => {
    const { items } = await BaseCrudService.getAll<CyberAwarenessTopics>('cyberawarenesstopics');
    setTopics(items);
    setLoading(false);
  };

  const filteredTopics = topics.filter(topic =>
    topic.topicName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.shortDescription?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.threatCategory?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryColor = (category?: string) => {
    switch (category?.toLowerCase()) {
      case 'fraud':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'identity theft':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'scam':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'malware':
        return 'bg-subtle-green/30 text-foreground border-subtle-green/40';
      default:
        return 'bg-teal/10 text-foreground border-teal/20';
    }
  };

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
              <AlertTriangle className="w-4 h-4 text-primary" />
              <span className="font-paragraph text-sm text-foreground">Stay Informed, Stay Safe</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Cyber Awareness Topics
            </h1>
            <p className="font-paragraph text-xl text-foreground/70 leading-relaxed mb-8">
              Learn about common cyber threats and how to protect yourself from digital fraud, identity theft, and online scams.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <Input
                type="text"
                placeholder="Search for threats, topics, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 rounded-xl bg-white/70 backdrop-blur-sm border-teal/20 font-paragraph text-base"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="font-paragraph text-foreground/60 mt-4">Loading topics...</p>
            </div>
          ) : filteredTopics.length === 0 ? (
            <div className="text-center py-20">
              <AlertTriangle className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                No topics found
              </h3>
              <p className="font-paragraph text-foreground/60">
                {searchQuery ? 'Try adjusting your search query' : 'No cyber awareness topics available yet'}
              </p>
            </div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
                  {searchQuery ? `Search Results (${filteredTopics.length})` : 'All Topics'}
                </h2>
                <p className="font-paragraph text-foreground/60">
                  Click on any topic to learn more about protection strategies
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTopics.map((topic, index) => (
                  <motion.div
                    key={topic._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link to={`/cyber-awareness/${topic._id}`}>
                      <div className="group bg-white/70 backdrop-blur-lg rounded-xl overflow-hidden border border-teal/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
                        {topic.topicImage && (
                          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-light-blue to-teal/30">
                            <Image
                              src={topic.topicImage}
                              alt={topic.topicName || 'Cyber threat topic'}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              width={400}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          </div>
                        )}
                        
                        <div className="p-6 flex-1 flex flex-col">
                          {topic.threatCategory && (
                            <div className="mb-4">
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-paragraph font-medium border ${getCategoryColor(topic.threatCategory)}`}>
                                {topic.threatCategory}
                              </span>
                            </div>
                          )}
                          
                          <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {topic.topicName}
                          </h3>
                          
                          <p className="font-paragraph text-base text-foreground/70 leading-relaxed mb-4 flex-1">
                            {topic.shortDescription}
                          </p>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-teal/10">
                            <span className="font-paragraph text-sm text-foreground/50">
                              {topic.lastUpdated ? new Date(topic.lastUpdated).toLocaleDateString('en-IN', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              }) : 'Recently updated'}
                            </span>
                            <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                              <span className="font-paragraph text-sm font-medium">Learn More</span>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-teal to-secondary">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Report a Cyber Threat
            </h2>
            <p className="font-paragraph text-xl text-white/90 max-w-2xl mx-auto mb-8">
              If you've encountered a cyber threat or have been a victim of digital fraud, report it immediately to help protect others.
            </p>
            <Link to="/contact">
              <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-paragraph text-base font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
