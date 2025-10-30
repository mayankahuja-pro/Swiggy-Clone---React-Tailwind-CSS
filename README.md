 
# 🍽️ Swiggy Clone - React + Tailwind CSS

A modern food delivery application UI built with React and Tailwind CSS, featuring a responsive design inspired by Swiggy.

![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-06B6D4?style=flat-square&logo=tailwindcss)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square)

## 🎯 Live Demo

[View Live Demo](https://yourusername.github.io/swiggy-clone) | [Report Bug](https://github.com/yourusername/swiggy-clone/issues) | [Request Feature](https://github.com/yourusername/swiggy-clone/issues)
 


https://github.com/user-attachments/assets/338e5c30-22a0-4d57-a9cc-847d6ca2e29b




## 📋 Table of Contents

- [About The Project](##about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


 


## 📖 About The Project

This is a frontend clone of Swiggy, one of India's largest food delivery platforms. Built with React and Tailwind CSS, this project demonstrates modern web development practices including component-based architecture, responsive design, and smooth animations.

### Why This Project?
- 🎨 Practice modern UI/UX design principles
- ⚛️ Learn React component composition
- 🎯 Master Tailwind CSS utility classes
- 📱 Implement responsive design patterns
- 🚀 Understand real-world application structure

## ✨ Features

### Core Features
- ✅ **Responsive Design** - Seamless experience across all devices
- ✅ **Category Slider** - Horizontal scrolling with smooth animations
- ✅ **Restaurant Cards** - Dynamic cards with ratings and offers
- ✅ **Sticky Header** - Fixed navigation with location selector
- ✅ **Smart Filtering** - Filter restaurants by various criteria
- ✅ **Offer Tags** - Highlight special deals and discounts
- ✅ **Loading States** - Smooth loading animations
- ✅ **Error Handling** - Graceful error boundaries

### UI/UX Features
- 🎨 Modern and clean interface
- 🌈 Color-coded rating system
- ⚡ Smooth hover effects
- 🔄 Fluid animations and transitions
- 📱 Mobile-first responsive design
- 🎯 Intuitive navigation

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18+
- **Styling:** Tailwind CSS 3.0+
- **Build Tool:** Vite
- **Package Manager:** npm/yarn

### Key Libraries
- React Hooks for state management
- PostCSS for CSS processing
- Autoprefixer for browser compatibility

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

```bash
node --version
npm --version
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/swiggy-clone.git
```

2. **Navigate to project directory**
```bash
cd swiggy-clone
```

3. **Install dependencies**
```bash
npm install
```

4. **Start development server**
```bash
npm run dev
```

5. **Open browser**
```
http://localhost:5173
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
swiggy-clone/
├── public/                     # Public assets
│   └── vite.svg
├── src/                        # Source files
│   ├── components/             # React components
│   │   ├── Header.jsx          # Navigation header
│   │   ├── CategorySlider.jsx  # Food categories
│   │   ├── RestaurantCard.jsx  # Restaurant display
│   │   └── TopRestaurants.jsx  # Restaurant grid
│   ├── data.js                 # Mock data
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── .gitignore                  # Git ignore rules
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind config
├── vite.config.js              # Vite config
└── README.md                   # Documentation
```

## 🧩 Components

### Header Component
```jsx
// Sticky navigation with branding and user actions
<Header />
```
- Logo and branding
- Location selector
- Navigation menu (Search, Offers, Help, Sign In, Cart)
- Mobile responsive hamburger menu

### CategorySlider Component
```jsx
// Horizontal scrolling food categories
<CategorySlider categories={categories} />
```
- Smooth horizontal scrolling
- Previous/Next navigation buttons
- Auto-disable buttons at boundaries
- Touch-friendly on mobile devices

### RestaurantCard Component
```jsx
// Individual restaurant display card
<RestaurantCard restaurant={restaurantData} />
```
- Restaurant image with lazy loading
- Rating with color coding (Green: 4.0+, Yellow: 3.5+, Red: <3.5)
- Delivery time estimate
- Cuisine types
- Special offers badge

### TopRestaurants Component
```jsx
// Grid layout for restaurant listings
<TopRestaurants title="Top Restaurants" restaurants={data} />
```
- Responsive grid (2/3/4 columns)
- Dynamic title
- Reusable for different sections

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Format code
npm run format
```

## 🎨 Customization

### Modifying Theme Colors

Edit `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FC8019',
        secondary: '#02060C',
      }
    }
  }
}
```

### Adding New Categories

Edit `src/data.js`:
```javascript
export const MOCK_CATEGORIES = [
  {
    id: 1,
    name: "Your Category",
    imageUrl: "image-url"
  }
];
```

### Adjusting Responsive Breakpoints

```css
/* Mobile First Approach */
/* Default: Mobile */
/* sm: 640px */
/* md: 768px */
/* lg: 1024px */
/* xl: 1280px */
```

## 🔄 State Management

The application uses React Hooks for state management:

```javascript
// Component State
const [categories, setCategories] = useState([]);

// Side Effects
useEffect(() => {
  fetchData();
}, []);

// Event Handlers
const handleClick = () => {
  // Handle user interactions
};
```

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run tests with coverage
npm run test:coverage
```

## 🚦 Roadmap

- [x] Basic UI implementation
- [x] Responsive design
- [x] Category slider
- [x] Restaurant cards
- [ ] Search functionality
- [ ] Filter & Sort options
- [ ] Restaurant detail page
- [ ] Cart functionality
- [ ] User authentication
- [ ] Payment integration
- [ ] Order tracking
- [ ] Dark mode
- [ ] PWA support
- [ ] API integration

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.

### How to Contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Update documentation as needed
- Add comments for complex logic
- Test your changes thoroughly

## 📝 Code Style

- Use functional components
- Implement React Hooks
- Follow ES6+ standards
- Use meaningful variable names
- Keep components small and focused

## 🐛 Known Issues

- Mobile menu is decorative only (not functional yet)
- Image placeholders may load slowly
- Category scroll works best with 10+ items

## 🛠️ Troubleshooting

### Tailwind CSS not working
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Port already in use
```bash
npm run dev -- --port 3000
```

### Build errors
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [Node.js](https://nodejs.org)

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Inspired by [Swiggy](https://www.swiggy.com)
- React community for amazing tools
- Tailwind CSS for utility-first CSS
- All contributors who help improve this project

## 📊 Project Stats

![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/swiggy-clone)
![GitHub code size](https://img.shields.io/github/languages/code-size/yourusername/swiggy-clone)
![GitHub repo size](https://img.shields.io/github/repo-size/yourusername/swiggy-clone)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/swiggy-clone?style=social)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/yourusername">Your Name</a>
</p>

<p align="center">
  <a href="https://github.com/yourusername/swiggy-clone/stargazers">⭐ Star this repo</a> •
  <a href="https://github.com/yourusername/swiggy-clone/fork">🍴 Fork this repo</a> •
  <a href="https://github.com/yourusername/swiggy-clone/issues">🐛 Report Bug</a>
</p>
```

---

**Note:** Replace `yourusername` and `your.email@example.com` with your actual GitHub username and email address before using this README.
