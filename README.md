# Aakashdeep Singh - Portfolio Website

A modern, responsive portfolio website built with React showcasing my professional experience, projects, and skills as a Software Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Interactive**: Smooth scrolling, hover effects, and animations
- **Contact Form**: Functional contact form for inquiries

## 🛠️ Built With

- **React 18** - Frontend framework
- **React Icons** - Icon library
- **Framer Motion** - Animation library
- **CSS3** - Modern styling with CSS variables
- **Vercel** - Deployment platform

## 📱 Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Professional summary and highlights
3. **Experience** - Work experience timeline
4. **Projects** - Featured projects showcase
5. **Skills** - Technical skills and certifications
6. **Education** - Academic background
7. **Contact** - Contact information and form

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Aakashsedha/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 🎨 Customization

### Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #2563eb;
  --accent-color: #f59e0b;
  /* ... other colors */
}
```

### Content
Update personal information in respective component files:
- `src/components/Hero.js` - Personal introduction
- `src/components/About.js` - About section
- `src/components/Experience.js` - Work experience
- `src/components/Projects.js` - Projects
- `src/components/Skills.js` - Skills and certifications
- `src/components/Education.js` - Education details
- `src/components/Contact.js` - Contact information

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: sedha007aakash@gmail.com
- **LinkedIn**: [Aakashdeep Singh Sedha](https://linkedin.com/in/aakashdeep-singh-sedha-657abb1a7)
- **GitHub**: [Aakashsedha](https://github.com/Aakashsedha)

## 🙏 Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Deployed on [Vercel](https://vercel.com/)

---

⭐ Star this repo if you found it helpful!
