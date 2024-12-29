// src/components/HeroSection.js
import React from 'react';
import { useMyI18n } from '../context/MyI18nContext';

function HeroSection() {
  const { t } = useMyI18n();

  return (
    <section id="hero" className="hero-section scroll-margin">
      <div className="hero-content">
        <h1>{t('hero.headline')}</h1>
        <p>{t('hero.subheadline')}</p>
        <button className="hero-cta">
          {t('hero.ctaButton')}
        </button>
      </div>
      {/* If you have a hero image, place it here or as a background via CSS */}
    </section>
  );
}

export default HeroSection;