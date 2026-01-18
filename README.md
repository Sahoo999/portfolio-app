# 🌌 Debangsu Sahoo - Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Verified](https://img.shields.io/badge/Status-Active-green)](https://github.com/Sahoo999/portfolio-app)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Three.js%20%7C%20Tailwind-blue?logo=react)](https://reactjs.org/)

A robust, interactive personal portfolio website designed to showcase backend-heavy full-stack engineering skills. Features a fully immersive **3D Star Field background**, glassmorphism aesthetics, and responsive layout.
---

## 🔗 Links
- **🌍 Live Site**: [https://portfolio-app-sahoo999.vercel.app](https://portfolio-app-sahoo999.vercel.app) *(Update if different)*
- **📦 Repository**: [github.com/Sahoo999/portfolio-app](https://github.com/Sahoo999/portfolio-app)

---

## ✨ Key Features

*   **🌌 3D Interactive Background**: Custom particle star field built with **Three.js** and **React Fiber** that rotates and provides depth.
*   **💻 Terminal Hero Section**: A unique "Code Terminal" introduction that reflects a developer-first persona.
*   **🎨 Glassmorphism Design**: Modern, frosted-glass UI elements using clear visual hierarchy.
*   **⚡ High Performance**: Built with **Vite** for instant loading and **Framer Motion** for butter-smooth transitions.
*   **📱 Fully Responsive**: Optimized experience across Desktop, Tablet, and Mobile.

---

## 🏗️ System Architecture

The portfolio utilizes a modern Client-Side Rendering (CSR) architecture optimized for interactivity.

graph TD
    User((👤 User))
    DNS[🌐 Vercel Edge Network]
    
    
    ## subgraph "Client Side (Browser)"
        App[⚛️ React Application]
        
        subgraph "Visual Engine"
            R3F[🌌 Three.js / R3F Canvas]
            Tailwind[🎨 Tailwind CSS]
            Motion[✨ Framer Motion]
        end
        
        subgraph "Core Components"
            Hero[Hero (Terminal)]
            Bg[3D Star Field]
            Projects[Project Cards]
            Contact[Actions]
        end
    end

    User -->|HTTPS Request| DNS
    DNS -->|Delivers Static Bundle| App
    
    App -->|Initializes| R3F
    App -->|Styles| Tailwind
    App -->|Animates| Motion
    
    R3F --> Bg
    App --> Hero
    App --> Projects

## 💻 Tech Stack
Domain	Technologies
Core	React 18, TypeScript, Vite
Styling	Tailwind CSS, PostCSS
3D & Graphics	Three.js, React Three Fiber, React Three Drei, Maath
Animations	Framer Motion
Icons	Lucide React

--
 ## 📂 Project Structure
src/
├── components/
│   ├── Background3D.tsx   # 🌌 The 3D Star Field Component
│   ├── Hero.tsx           # 💻 Terminal Intro Section
│   ├── About.tsx          # 📊 Tech Stack Grid
│   ├── Projects.tsx       # 🚀 Project Showcases
│   └── Contact.tsx        # 📬 Contact CTA
├── App.tsx                # Main Layout Assembly
└── index.css              # Global Tailwind Directives

--

Email: 
sahoodebangsu@gmail.com
--
<p align="center">
  Made with ❤️ by Debangsu Sahoo
</p>
