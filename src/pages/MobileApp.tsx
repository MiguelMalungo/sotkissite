import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './MobileApp.css';

export const MobileApp: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="mobile-app">
      <section className="mobile-app__hero">
        <div className="container">
          <h1 className="mobile-app__title">
            {language === 'pt' ? 'Aplicação Mobile' : 'Mobile Application'}
          </h1>
          <p className="mobile-app__subtitle">
            {language === 'pt'
              ? 'Esta página está em desenvolvimento. Em breve teremos mais informações.'
              : 'This page is under development. More information coming soon.'}
          </p>
        </div>
      </section>
    </div>
  );
};
