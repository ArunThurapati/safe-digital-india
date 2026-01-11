import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Shield, ArrowLeft, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { CyberAwarenessTopics } from '@/entities';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';

export default function CyberAwarenessDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [topic, setTopic] = useState<CyberAwarenessTopics | null>(null);
  const [relatedTopics, setRelatedTopics] = useState<CyberAwarenessTopics[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadTopic();
    }
  }, [id]);

  const loadTopic = async () => {
    if (!id) return;
    
    const topicData = await BaseCrudService.getById<CyberAwarenessTopics>('cyberawarenesstopics', id);
    setTopic(topicData);
    
    // Load related topics
    const { items } = await BaseCrudService.getAll<CyberAwarenessTopics>('cyberawarenesstopics');
    const related = items.filter(item => 
      item._id !== id && 
      item.threatCategory === topicData.threatCategory
    ).slice(0, 3);
    setRelatedTopics(related);
    
    setLoading(false);
  };

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

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="font-paragraph text-foreground/60 mt-4">Loading topic details...</p>
        </div>
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <AlertTriangle className="w-16 h-16 text-foreground/20 mx-auto mb-4" />
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Topic Not Found</h2>
          <p className="font-paragraph text-foreground/60 mb-8">The topic you're looking for doesn't exist.</p>
          <Link to="/cyber-awareness">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Topics
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-light-blue via-teal/30 to-lavender/40">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/cyber-awareness" className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-6 font-paragraph">
              <ArrowLeft className="w-4 h-4" />
              Back to All Topics
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              {topic.threatCategory && (
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-paragraph font-medium border ${getCategoryColor(topic.threatCategory)}`}>
                  {topic.threatCategory}
                </span>
              )}
              {topic.lastUpdated && (
                <div className="flex items-center gap-2 text-foreground/60">
                  <Calendar className="w-4 h-4" />
                  <span className="font-paragraph text-sm">
                    Updated {new Date(topic.lastUpdated).toLocaleDateString('en-IN', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
              )}
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {topic.topicName}
            </h1>
            
            <p className="font-paragraph text-xl text-foreground/70 leading-relaxed max-w-4xl">
              {topic.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {topic.topicImage && (
        <section className="py-12 bg-white">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-teal/20 shadow-xl"
            >
              <Image
                src={topic.topicImage}
                alt={topic.topicName || 'Cyber threat illustration'}
                className="w-full h-[500px] object-cover"
                width={1200}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/70 backdrop-blur-lg rounded-xl p-8 border border-teal/20"
              >
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Detailed Information
                </h2>
                <div className="font-paragraph text-base text-foreground/80 leading-relaxed space-y-4 whitespace-pre-line">
                  {topic.detailedContent || 'Detailed information about this cyber threat will be available soon. Please check back later for comprehensive guidance on how to protect yourself.'}
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              {/* Quick Tips */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/10 via-teal/10 to-lavender/10 rounded-xl p-6 border border-teal/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Quick Protection Tips
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-subtle-green flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph text-sm text-foreground/80">
                      Stay vigilant and verify all suspicious communications
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-subtle-green flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph text-sm text-foreground/80">
                      Never share sensitive information over phone or email
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-subtle-green flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph text-sm text-foreground/80">
                      Report suspicious activity immediately
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-subtle-green flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph text-sm text-foreground/80">
                      Keep your software and security systems updated
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Report Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-teal/20"
              >
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Need Help?
                </h3>
                <p className="font-paragraph text-sm text-foreground/70 mb-4">
                  If you've encountered this threat or need assistance, our team is here to help.
                </p>
                <Link to="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Contact Support
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Topics */}
      {relatedTopics.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-background to-light-blue/30">
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
                Related Topics
              </h2>
              <p className="font-paragraph text-foreground/60">
                Learn more about similar cyber threats
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedTopics.map((relatedTopic, index) => (
                <motion.div
                  key={relatedTopic._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/cyber-awareness/${relatedTopic._id}`}>
                    <div className="group bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-teal/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full">
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {relatedTopic.topicName}
                      </h3>
                      <p className="font-paragraph text-sm text-foreground/70 leading-relaxed mb-4">
                        {relatedTopic.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-paragraph font-medium">
                        Learn More
                        <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
