import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-light-blue via-teal/20 to-lavender/30 border-t border-teal/20">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-teal rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading text-lg font-bold text-foreground">Digital Guardian</span>
            </div>
            <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
              Empowering Indian citizens with cyber safety awareness and digital identity protection.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/cyber-awareness" className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors">
                  Cyber Awareness
                </Link>
              </li>
              <li>
                <Link to="/ip-network-safety" className="font-paragraph text-sm text-foreground/70 hover:text-primary transition-colors">
                  IP & Network Safety
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-paragraph text-sm text-foreground/70">support@digitalguardian.gov.in</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-paragraph text-sm text-foreground/70">1800-XXX-XXXX (Toll Free)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-paragraph text-sm text-foreground/70">New Delhi, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/70 backdrop-blur-sm rounded-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-teal/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-foreground/60 text-center md:text-left">
              © 2026 Digital Guardian Initiative. All rights reserved.
            </p>
            <p className="font-paragraph text-xs text-foreground/50 text-center md:text-right max-w-2xl">
              <strong>Disclaimer:</strong> This website is for educational and awareness purposes. Information provided should not be considered as legal or professional advice. Always verify with official government sources.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
