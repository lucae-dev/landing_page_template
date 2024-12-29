// src/components/DetailsSection.js
import React from 'react';
import { useMyI18n } from '../context/MyI18nContext';

function DetailsSection() {
  const { t } = useMyI18n();

  return (
    <section id="details" className="details-section scroll-margin">
      <h2>{t('details.title')}</h2>
      <p>{t('details.description')}</p>
      {/* Additional bullets, images, or content as desired */}
    </section>
  );
}

export default DetailsSection;