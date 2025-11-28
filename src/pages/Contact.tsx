import React, { useState, useEffect } from 'react';
import { AnimateOnScroll } from '../components/ui/AnimateOnScroll';
import { useLanguage } from '../contexts/LanguageContext';
import { contactTranslations } from '../translations/contact';
import './Contact.css';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = contactTranslations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    file: null as File | null,
    privacyPolicy: false,
    newsletter: false,
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files![0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  // Helper to render markdown links in privacy text
  const renderPrivacyText = (text: string) => {
    const parts = text.split(/\[(.*?)\]\((.*?)\)/g);
    if (parts.length === 1) return text;

    return (
      <>
        {parts[0]}
        <a href={parts[2]} target="_blank" rel="noopener noreferrer" className="contact__privacy-link">
          {parts[1]}
        </a>
        {parts[3]}
      </>
    );
  };

  return (
    <div className="contact">
      <div className="contact__container container">
        <div className="contact__content">
          {/* Contact Information */}
          <div className="contact__info">
            <div className="contact__header">
              <AnimateOnScroll animation="fadeSlideUp" delay={0} duration={0.8}>
                <h1 className="contact__title">{t.title}</h1>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeSlideUp" delay={150} duration={0.8}>
                <p className="contact__subtitle">{t.subtitle}</p>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Contact Form */}
          <AnimateOnScroll animation="fadeSlideUp" delay={300} duration={0.9}>
            <div className="contact__form-wrapper">
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-group">
                <label htmlFor="name" className="contact__form-label">
                  {t.form.name.label}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact__form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.form.name.placeholder}
                  autoComplete="name"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__form-label">
                  {t.form.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact__form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.form.email.placeholder}
                  autoComplete="email"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="phone" className="contact__form-label">
                  {t.form.phone.label}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="contact__form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t.form.phone.placeholder}
                  autoComplete="tel"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="company" className="contact__form-label">
                  {t.form.company.label}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="contact__form-input"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t.form.company.placeholder}
                  autoComplete="organization"
                />
              </div>

              <div className="contact__form-group contact__form-group--full">
                <label htmlFor="service" className="contact__form-label">
                  {t.form.service.label}
                </label>
                <select
                  id="service"
                  name="service"
                  className="contact__form-select"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  aria-label={t.form.service.placeholder}
                >
                  {t.form.service.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact__form-group contact__form-group--full">
                <label htmlFor="message" className="contact__form-label">
                  {t.form.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__form-textarea"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t.form.message.placeholder}
                />
              </div>

              <div className="contact__form-group contact__form-group--full">
                <label htmlFor="file" className="contact__form-label">
                  {t.form.file.label}
                </label>
                <div className="contact__form-file">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="contact__form-file-input"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file" className="contact__form-file-label">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      {formData.file
                        ? formData.file.name
                        : t.form.file.button}
                    </span>
                  </label>
                </div>
              </div>

              <div className="contact__privacy-section">
                <div className="contact__privacy-option">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    name="privacyPolicy"
                    checked={formData.privacyPolicy}
                    onChange={handleChange}
                    required
                    className="contact__privacy-checkbox"
                  />
                  <label htmlFor="privacyPolicy" className="contact__privacy-label">
                    {renderPrivacyText(t.privacy.policy)}
                  </label>
                </div>
                <div className="contact__privacy-option">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="contact__privacy-checkbox"
                  />
                  <label htmlFor="newsletter" className="contact__privacy-label">
                    {t.privacy.newsletter}
                  </label>
                </div>
              </div>

              <div className="contact__form-actions">
                <button
                  type="submit"
                  className="contact__form-submit"
                  aria-label={t.form.submit}
                >
                  {t.form.submit}
                </button>
              </div>
            </form>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

