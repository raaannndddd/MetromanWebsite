import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen" style={{
      background: 'radial-gradient(circle at center, #ffffff 0%, #FFD700 50%, #FFC700 100%)'
    }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#FFD700]/95 backdrop-blur-sm border-b border-[#E6B800] z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center font-bold text-[#FFD700]">
              M
            </div>
            <span className="text-xl font-bold text-[#1a1a1a]">MetroMan</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#1a1a1a] hover:text-[#4d4d00] transition-colors font-semibold"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#1a1a1a] hover:text-[#4d4d00] transition-colors font-semibold"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('tokenomics')}
              className="text-[#1a1a1a] hover:text-[#4d4d00] transition-colors font-semibold"
            >
              {t.nav.tokenomics}
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="text-[#1a1a1a] hover:text-[#4d4d00] transition-colors font-semibold"
            >
              {t.nav.roadmap}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#1a1a1a] hover:text-[#4d4d00] transition-colors font-semibold"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-lg bg-[#1a1a1a] text-[#FFD700] font-semibold hover:bg-[#333333] transition-colors text-sm"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#FFD700]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFC700] border-t border-[#E6B800] p-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-[#1a1a1a] hover:text-[#4d4d00] transition-colors py-2 font-semibold"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-[#1a1a1a] hover:text-[#4d4d00] transition-colors py-2 font-semibold"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('tokenomics')}
              className="block w-full text-left text-[#1a1a1a] hover:text-[#4d4d00] transition-colors py-2 font-semibold"
            >
              {t.nav.tokenomics}
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="block w-full text-left text-[#1a1a1a] hover:text-[#4d4d00] transition-colors py-2 font-semibold"
            >
              {t.nav.roadmap}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-[#1a1a1a] hover:text-[#4d4d00] transition-colors py-2 font-semibold"
            >
              {t.nav.contact}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#1a1a1a] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#1a1a1a] rounded-full blur-3xl"></div>
        </div>
        {/* Meme-style decorative elements */}
        <div className="absolute top-10 left-5 text-6xl opacity-20 transform -rotate-12">😂</div>
        <div className="absolute bottom-10 right-5 text-6xl opacity-20 transform rotate-12">🚀</div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black text-[#1a1a1a] mb-4 leading-tight drop-shadow-lg" style={{
              textShadow: '3px 3px 0px #FFD700, 6px 6px 0px rgba(0,0,0,0.1)'
            }}>
              {t.hero.title}
            </h1>
            <h2 className="text-2xl md:text-4xl text-[#1a1a1a] mb-6 font-bold drop-shadow-md" style={{
              textShadow: '2px 2px 0px #FFD700'
            }}>
              {t.hero.subtitle}
            </h2>
            <p className="text-lg text-[#4d4d00] mb-8 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                className="bg-[#1a1a1a] text-[#FFD700] hover:bg-[#333333] font-bold text-lg px-8 py-6 rounded-lg flex-1 sm:flex-none"
                onClick={() => scrollToSection('contact')}
              >
                {t.hero.cta}
              </a>
              <a
                href="https://www.bilibili.com/video/BV1L3H3zcEnm/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a] text-[#FFD700] hover:bg-[#333333] font-bold text-lg px-8 py-6 rounded-lg inline-flex items-center justify-center transition-colors flex-1 sm:flex-none"
              >
                {t.hero.watchVideo}
              </a>
            </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#1a1a1a] rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src="/metroman.webp"
                  alt="MetroMan"
                  className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#FFC700] relative">
        <div className="absolute top-5 right-10 text-5xl opacity-30">💪</div>
        <div className="absolute bottom-5 left-10 text-5xl opacity-30">⭐</div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] text-center mb-12 drop-shadow-md" style={{
            textShadow: '2px 2px 0px rgba(255,255,255,0.5)'
          }}>
            {t.about.title}
          </h2>
          <p className="text-lg text-[#4d4d00] text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.about.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {t.about.features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#FFD700] border border-[#E6B800] rounded-xl p-6 hover:border-[#1a1a1a] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FFD700] font-bold text-xl">✓</span>
                  </div>
                  <p className="text-[#1a1a1a] text-lg font-semibold">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-4 bg-[#FFD700] relative">
        <div className="absolute top-5 left-10 text-5xl opacity-30">💰</div>
        <div className="absolute bottom-5 right-10 text-5xl opacity-30">📈</div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] text-center mb-12 drop-shadow-md" style={{
            textShadow: '2px 2px 0px rgba(255,255,255,0.5)'
          }}>
            {t.tokenomics.title}
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: t.tokenomics.totalSupply, value: '1B' },
              { label: t.tokenomics.circulatingSupply, value: '500M' },
              { label: t.tokenomics.burnRate, value: '2%' },
              { label: t.tokenomics.stakingRewards, value: '5%' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#FFC700] to-[#FFD700] border border-[#E6B800] rounded-xl p-8 text-center hover:border-[#1a1a1a] transition-colors"
              >
                <p className="text-[#4d4d00] text-sm mb-3 uppercase tracking-wider font-semibold">
                  {item.label}
                </p>
                <p className="text-4xl font-black text-[#1a1a1a]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4 bg-[#FFC700] relative">
        <div className="absolute top-5 right-10 text-5xl opacity-30">🎯</div>
        <div className="absolute bottom-5 left-10 text-5xl opacity-30">🌙</div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] text-center mb-12 drop-shadow-md" style={{
            textShadow: '2px 2px 0px rgba(255,255,255,0.5)'
          }}>
            {t.roadmap.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: t.roadmap.phase1, desc: t.roadmap.phase1Desc },
              { title: t.roadmap.phase2, desc: t.roadmap.phase2Desc },
              { title: t.roadmap.phase3, desc: t.roadmap.phase3Desc },
              { title: t.roadmap.phase4, desc: t.roadmap.phase4Desc },
            ].map((phase, index) => (
              <div
                key={index}
                className="bg-[#FFD700] border border-[#E6B800] rounded-xl p-8 hover:border-[#1a1a1a] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#FFD700] font-bold text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{phase.title}</h3>
                    <p className="text-[#4d4d00]">{phase.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#FFD700] relative">
        <div className="absolute top-5 left-10 text-5xl opacity-30">🤝</div>
        <div className="absolute bottom-5 right-10 text-5xl opacity-30">💬</div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] text-center mb-12 drop-shadow-md" style={{
            textShadow: '2px 2px 0px rgba(255,255,255,0.5)'
          }}>
            {t.contact.title}
          </h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '📧', label: t.contact.email, link: 'mailto:hello@metroman.com' },
              { icon: '𝕏', label: t.contact.twitter, link: 'https://twitter.com/metroman' },
              { icon: '✈️', label: t.contact.telegram, link: 'https://t.me/metroman' },
              { icon: '💬', label: t.contact.discord, link: 'https://discord.gg/metroman' },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFC700] border border-[#E6B800] rounded-xl p-6 text-center hover:border-[#1a1a1a] hover:bg-[#FFD700] transition-all group"
              >
                <div className="text-4xl mb-3">{contact.icon}</div>
                <p className="text-[#1a1a1a] font-semibold group-hover:text-[#4d4d00] transition-colors">
                  {contact.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-[#E6B800] py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-[#FFD700] mb-2">{t.footer.copyright}</p>
          <p className="text-[#FFC700] text-sm">{t.footer.disclaimer}</p>
        </div>
      </footer>
    </div>
  );
}

