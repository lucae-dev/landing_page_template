import React from 'react';
import { useMyI18n } from '../context/MyI18nContext';

function Navbar() {
  const { lang, setLang, t } = useMyI18n();

  const handleToggleLanguage = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="navbar">
      <div className="logo">AIAgent</div>
      <ul className="nav-links">
        <li>
          <a href="#hero">{t('navbar.home')}</a>
        </li>
        <li>
          <a href="#details">{t('navbar.details')}</a>
        </li>
        <li>
          <a href="#reviews">{t('navbar.reviews')}</a>
        </li>
        <li>
          <a href="#pricing">{t('navbar.pricing')}</a>
        </li>
        <li>
          <button onClick={handleToggleLanguage} className="lang-toggle">
            {t('navbar.languageToggle')}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;