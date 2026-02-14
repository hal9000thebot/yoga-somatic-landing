import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'contact', 'socials'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl tracking-wider text-gray-800"
            >
              STUDIO
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`tracking-wide transition-colors ${
                  activeSection === 'about' ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`tracking-wide transition-colors ${
                  activeSection === 'contact' ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('socials')}
                className={`tracking-wide transition-colors ${
                  activeSection === 'socials' ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Connect
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left tracking-wide text-gray-600 hover:text-gray-800"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left tracking-wide text-gray-600 hover:text-gray-800"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('socials')}
                className="text-left tracking-wide text-gray-600 hover:text-gray-800"
              >
                Connect
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761034114072-9ec9c3d2fbb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMHBlYWNlZnVsJTIwc3R1ZGlvfGVufDF8fHx8MTc3MTA1OTQxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Yoga practice"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wide">
            Find Your Balance
          </h1>
          <p className="text-xl md:text-2xl tracking-wider opacity-90">
            Yoga • Somatic Therapy • Healing
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwc2VyZW5lJTIwbmF0dXJlfGVufDF8fHx8MTc3MTA1OTQxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Meditation in nature"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl mb-8 text-gray-800 tracking-wide">
            About
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Welcome. I'm a certified yoga instructor and somatic therapist dedicated to
              helping you reconnect with your body and find inner peace through mindful movement
              and therapeutic practices.
            </p>
            <p className="text-lg">
              With over 10 years of experience in both yoga instruction and somatic therapy,
              I offer a holistic approach to wellness that honors the deep connection between
              mind, body, and spirit.
            </p>
            <p className="text-lg">
              My practice integrates traditional yoga philosophy with somatic experiencing,
              creating a safe space for you to explore, heal, and transform. Whether you're
              seeking physical healing, emotional release, or simply a deeper connection with
              yourself, I'm here to guide you on your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758274530610-1994ee573400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwdGhlcmFweSUyMGNhbG0lMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NzEwNTk0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Wellness therapy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-white">
          <h2 className="text-4xl md:text-5xl mb-12 tracking-wide">
            Schedule a Consultation
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              Ready to begin your journey? I offer complimentary 20-minute consultations
              to discuss your needs and how we can work together.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <a
                  href="mailto:hello@yogastudio.com"
                  className="text-lg hover:opacity-80 transition-opacity"
                >
                  hello@yogastudio.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <a
                  href="tel:+15551234567"
                  className="text-lg hover:opacity-80 transition-opacity"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>
            <div className="pt-8">
              <p className="mb-4 text-sm tracking-wider uppercase opacity-90">
                Studio Hours
              </p>
              <div className="space-y-2 text-lg">
                <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                <p>Saturday: 8:00 AM - 4:00 PM</p>
                <p>Sunday: By appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section id="socials" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1643237131522-bbf79b062ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb21hdGljJTIwYm9keXdvcmslMjBoZWFsaW5nfGVufDF8fHx8MTc3MTA1OTQxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Somatic healing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/75" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl mb-12 text-gray-800 tracking-wide">
            Connect With Me
          </h2>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Follow along for daily inspiration, class updates, and wellness tips.
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors">
                <Instagram size={28} />
              </div>
              <span className="tracking-wide">Instagram</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors">
                <Facebook size={28} />
              </div>
              <span className="tracking-wide">Facebook</span>
            </a>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-600 tracking-wider">
              © 2026 Yoga & Somatic Therapy Studio. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
