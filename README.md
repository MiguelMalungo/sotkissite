# SOTKIS Website

A modern React + TypeScript website for SOTKIS, specializing in intelligent waste management systems as part of the Sotkon Group.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite for fast development and optimal performance
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Smart Navigation**: Sticky header with smooth scrolling and mobile hamburger menu
- **Component-Based**: Reusable components (Button, Card, Hero) for consistent design
- **5 Main Sections**: 
  - **Sotkis (Home)**: Main landing page with company overview
  - **Platform**: Centralized management system information
  - **Paylt**: Payment solutions for waste management
  - **Access**: Smart access control systems
  - **Level**: Fill-level monitoring technology

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Navigation header with mobile menu
│   │   ├── Footer.tsx         # Site footer
│   │   └── Layout.tsx         # Main layout wrapper
│   └── common/
│       ├── Button.tsx         # Reusable button component
│       ├── Card.tsx           # Card component
│       └── Hero.tsx           # Hero section component
├── pages/
│   ├── Home.tsx              # Home page (Sotkis)
│   ├── Platform.tsx          # Platform page
│   ├── Paylt.tsx            # Paylt page
│   ├── Access.tsx           # Access page
│   └── Level.tsx            # Level page
├── styles/
│   ├── variables.css        # CSS custom properties
│   └── globals.css          # Global styles
├── App.tsx                  # Main app with routing
└── main.tsx                 # Entry point
```

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Colors

- **Primary**: Blue (#2563eb) - Technology and trust
- **Secondary**: Green (#10b981) - Sustainability
- **Accent**: Purple (#8b5cf6) - Innovation

### Typography

- Modern sans-serif font stack
- Responsive font sizes that scale with viewport
- Clear hierarchy with 6 heading levels

### Components

All components are fully typed with TypeScript and include:
- Responsive design
- Smooth transitions and animations
- Accessibility features (focus states, ARIA labels)
- Customizable variants and sizes

## 🌐 Pages Overview

### Home (Sotkis)
The main landing page featuring:
- Hero section with call-to-action
- Feature showcase (4 key benefits)
- Statistics section
- Solutions overview
- Final CTA section

### Platform
Details about the centralized management system:
- Real-time dashboard
- Route optimization
- Predictive analytics
- Multi-site management
- Custom reporting
- API integration

### Paylt
Payment solutions information:
- Automated billing
- Multiple payment methods
- Usage analytics
- Fair pricing model

### Access
Access control systems:
- Smart locks
- RFID & NFC support
- Access logs
- Remote management

### Level
Fill-level monitoring:
- Ultrasonic sensors
- Real-time updates
- Long battery life
- Weather-resistant design
- Technical specifications

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: CSS Modules with CSS Custom Properties
- **Icons**: Unicode emoji icons (can be replaced with icon library)

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 769px

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The `dist` folder will contain the optimized production build ready to be deployed to any static hosting service (Netlify, Vercel, AWS S3, etc.).

## 📄 License

© 2024 SOTKIS. Part of Sotkon Group. All rights reserved.

## 🤝 Contributing

For internal development team only. Contact the project maintainer for contribution guidelines.

## 📞 Contact

- **Email**: info@sotkis.com
- **Phone**: +358 12 345 6789
- **Website**: [Sotkon Group](https://www.sotkon.com)

---

Built with ❤️ by the SOTKIS development team
