import React from 'react';
import { Button } from './Button';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
import { useLanguage } from '../../contexts/LanguageContext';
import './CTASection.css';

const ctaText = {
  pt: { button: 'Fale connosco' },
  en: { button: 'Talk to us' },
  es: { button: 'Hable con nosotros' },
  fr: { button: 'Parlez-nous' },
  gr: { button: 'Talk to us' },
  cr: { button: 'Talk to us' },
};

const ArrowIcon = () => (
  <div className="cta-section__arrow-icon">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export const CTASection: React.FC = () => {
  const { language } = useLanguage();
  const t = ctaText[language] ?? ctaText.en;

  return (
    <div className="cta-section">
      <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
        <Button href="/contact" variant="primary" size="md">
          {t.button}
          <ArrowIcon />
        </Button>
      </AnimateOnScroll>
    </div>
  );
};
