import React, { useState, useEffect } from 'react';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    file: null as File | null,
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

  return (
    <div className="contact">
      <div className="contact__container container">
        <div className="contact__content">
          {/* Contact Information */}
          <div className="contact__info">
            <div className="contact__header">
              <h1 className="contact__title">Contacte-nos</h1>
              <p className="contact__subtitle">Vamos discutir o seu projeto!</p>
            </div>

            <div className="contact__info-item contact__info-item--process">
              <h3 className="contact__info-title">O que acontece a seguir?</h3>
              <div className="contact__process">
                <div className="contact__process-step">
                  <span className="contact__process-number">1</span>
                  <p className="contact__process-text">
                    Um especialista entra em contacto após analisar os seus requisitos
                  </p>
                </div>
                <div className="contact__process-step">
                  <span className="contact__process-number">2</span>
                  <p className="contact__process-text">
                    Se necessário, assinamos um NDA para garantir o mais elevado nível de privacidade
                  </p>
                </div>
                <div className="contact__process-step">
                  <span className="contact__process-number">3</span>
                  <p className="contact__process-text">
                    Enviamos uma proposta de projeto completa com estimativas, cronogramas, CVs, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact__form-wrapper">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__form-label">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact__form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="O seu nome"
                  autoComplete="name"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__form-label">
                  Correio Eletrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact__form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="exemplo@email.com"
                  autoComplete="email"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="phone" className="contact__form-label">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="contact__form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+351 900 000 000"
                  autoComplete="tel"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="company" className="contact__form-label">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="contact__form-input"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome da empresa"
                  autoComplete="organization"
                />
              </div>

              <div className="contact__form-group contact__form-group--full">
                <label htmlFor="service" className="contact__form-label">
                  Serviço de Interesse *
                </label>
                <select
                  id="service"
                  name="service"
                  className="contact__form-select"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  aria-label="Selecione o serviço de interesse"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="sensors">Sensores Inteligentes</option>
                  <option value="readers">Módulos de Leitura</option>
                  <option value="iot">Dispositivos IoT/LTE</option>
                  <option value="cards">Cartões Inteligentes</option>
                  <option value="access">ADVANTACCESS</option>
                  <option value="pay">ADVANTAPAY</option>
                  <option value="integration">Integrações & Gestão</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div className="contact__form-group contact__form-group--full">
                <label htmlFor="message" className="contact__form-label">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__form-textarea"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Conte-nos sobre o seu projeto..."
                />
              </div>

              <div className="contact__form-group contact__form-group--full">
                <label htmlFor="file" className="contact__form-label">
                  Anexar Ficheiro
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
                        : 'Escolher Ficheiro'}
                    </span>
                  </label>
                </div>
              </div>

              <div className="contact__form-actions">
                <button 
                  type="submit" 
                  className="contact__form-submit"
                  aria-label="Enviar mensagem de contacto"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

