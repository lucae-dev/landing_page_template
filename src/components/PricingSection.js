// src/components/PricingSection.js
import React from 'react';
import { useMyI18n } from '../context/MyI18nContext';

function PricingSection() {
  const { t } = useMyI18n();
  const plans = t('pricing.plans');

  return (
    <section id="pricing" className="pricing-section scroll-margin">
      <h2>{t('pricing.title')}</h2>
      <div className="pricing-cards">
        {plans && Object.keys(plans).map((planKey) => {
          const plan = plans[planKey];
          return (
            <div className="pricing-card" key={planKey}>
              <h3>{plan.name}</h3>
              <h4>{plan.price}</h4>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button>Choose {plan.name}</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PricingSection;