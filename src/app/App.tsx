import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

import heroImg from '../assets/hero.jpg';
import aboutImg from '../assets/about.jpg';
import contactImg from '../assets/contact.jpg';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'practices', 'contact', 'socials'];
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
              <span className="flex flex-col md:flex-row md:items-baseline">
                <span
                  style={{
                    fontFamily: `'Fira Sans Condensed', ui-sans-serif, system-ui, sans-serif`,
                    fontWeight: 500
                  }}
                >
                  СИМОНА ГОЦИС |
                </span>
                <span
                  className="md:ml-2"
                  style={{
                    fontFamily: `'Fira Sans Condensed', ui-sans-serif, system-ui, sans-serif`,
                    fontWeight: 400,
                    fontStyle: 'italic'
                  }}
                >
                  Йога и Соматична терапия
                </span>
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className={`tracking-wide transition-colors ${
                  activeSection === 'about' ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                За мен
              </button>
              <button
                onClick={() => scrollToSection('practices')}
                className={`tracking-wide transition-colors ${
                  activeSection === 'practices' ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Практики
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`tracking-wide transition-colors ${
                  activeSection === 'contact' ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Контакт
              </button>
              <button
                onClick={() => scrollToSection('socials')}
                className={`tracking-wide transition-colors ${
                  activeSection === 'socials' ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Последвай ме
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
                За мен
              </button>
              <button
                onClick={() => scrollToSection('practices')}
                className="text-left tracking-wide text-gray-600 hover:text-gray-800"
              >
                Практики
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left tracking-wide text-gray-600 hover:text-gray-800"
              >
                Контакт
              </button>
              <button
                onClick={() => scrollToSection('socials')}
                className="text-left tracking-wide text-gray-600 hover:text-gray-800"
              >
                Последвай ме
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
            src={heroImg}
            alt="Yoga practice"
            // On small screens, shift crop to the right; on md+ keep centered
            className="w-full h-full object-cover object-[20%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-wide">
            Симона Гоцис
          </h1>
          <p className="text-xl md:text-2xl tracking-wider opacity-90" style={{ fontFamily: `'Fira Sans Condensed', ui-sans-serif, system-ui, sans-serif`, fontWeight: 400 }}>
            Йога • Соматична терапия • Консултации
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={aboutImg}
            alt="Simona Gotsis portrait"
            className="w-full h-full object-cover"
            // Keep subject (on the right) in frame on narrow viewports
            style={{ objectPosition: '80% center' }}
          />
          {/* White overlay @ 70% => image effectively shows through at ~30% */}
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl mb-8 text-gray-800 tracking-wide">
            За мен
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Аз съм йога учител, посветен на съзнателния начин на живот. Сертифициран специалист по разчитане на микро- и макро- изражения и по емоционална интелигентност от Paul Ekman International- водеща организация в сферата на емоционалното познание и невербалната комуникация.
            </p>
            <p className="text-lg">
              Членувам в Somatic Institute for Women. Познанията в областта ми позволяват да подпомагам не само физическото, но и емоционалното благополучие и познание на моите ученици.
            </p>
            <p className="text-lg">
              Работя активно в посока на повишаване на самосъзнанието, емпатията и уменията за емоционално регулиране- ключови елементи както в личното развитие, така и в междуличностните отношения.
            </p>

          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section id="practices" className="relative bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl mb-8 text-gray-800 tracking-wide">Практики</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-gray-100/90 border border-gray-200 p-6 text-gray-900">
              <h3 className="text-2xl mb-4 tracking-wide">Индивидуални сесии</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Култивиране на любов и състрадание към себе си</li>
                <li>Развитие на умения за емпатично слушане</li>
                <li>Свързване със собствените емоции чрез тяло и въображение</li>
              </ul>
            </div>

            <div className="rounded-xl bg-gray-100/90 border border-gray-200 p-6 text-gray-900">
              <h3 className="text-2xl mb-4 tracking-wide">Групови практики</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Създаване на усещане за сигурност, мекота и доверие в групата</li>
                <li>Осъзнаване на личните граници- телесни, емоционални и комуникационни</li>
                <li>Насърчаване на уязвимостта като ресурс, а не слабост</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={contactImg}
            alt="Contact background"
            className="w-full h-full object-cover"
          />
          {/* White overlay @ 70% => image effectively shows through at ~30% */}
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-gray-900">
          <h2 className="text-4xl md:text-5xl mb-12 tracking-wide">
            Контакт
          </h2>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              Радвам се да ви предложа безплатна 20-минутна консултация, в която да обсъдим вашите нужди и как можем да работим заедно.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <a
                  href="mailto:gotsis.simona@gmail.com"
                  className="text-lg hover:opacity-80 transition-opacity"
                >
                  gotsis.simona@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <a
                  href="tel:+359899597983"
                  className="text-lg hover:opacity-80 transition-opacity"
                >
                  +359 89 959 7983
                </a>
              </div>
            </div>
            <div className="pt-10">
              {/* Calendly inline widget */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/manchev-ivan/30min"
                style={{ minWidth: 320, height: 700 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section id="socials" className="relative bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl mb-8 text-gray-800 tracking-wide">
            Последвай ме
          </h2>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Последвай ме в Instagram, за да разбереш актуалната ми програма от класове
          </p>
          <div className="mt-6">
            {/* Elfsight Instagram feed embed */}
            <div className="elfsight-app-77938894-2ef1-4884-988b-44a0ddb91a70" data-elfsight-app-lazy></div>

          </div>
          <div className="mt-16 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-600 tracking-wider">
              © 2026 Симона Гоцис. Всички права запазени.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
