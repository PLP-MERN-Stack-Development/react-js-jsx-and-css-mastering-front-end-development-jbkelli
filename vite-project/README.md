# 🎨 PLP Task Manager - Week 3 Assignment# React + Vite



A responsive React application built with Vite, React Router, and Tailwind CSS that demonstrates component architecture, state management, hooks usage, and API integration.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## 🚀 FeaturesCurrently, two official plugins are available:



- ✅ **Task Management**: Add, complete, delete, and filter tasks- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- 🌓 **Dark Mode**: Toggle between light and dark themes- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- 🔄 **API Integration**: Fetch and display data from JSONPlaceholder API

- 📱 **Responsive Design**: Works seamlessly on mobile, tablet, and desktop## React Compiler

- 💾 **Local Storage**: Tasks persist across browser sessions

- 🎯 **React Router**: Clean navigation between pagesThe React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

- 🎨 **Tailwind CSS**: Modern, utility-first styling

Note: This will impact Vite dev & build performances.

## 📂 Project Structure

## Expanding the ESLint configuration

```

src/If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

├── components/
│   ├── Button.jsx          # Reusable button with variants
│   ├── Card.jsx            # Card component for content layout
│   ├── Navbar.jsx          # Navigation bar with theme toggle
│   ├── Footer.jsx          # Footer component
│   ├── Layout.jsx          # Main layout wrapper
│   └── TaskManager.jsx     # Task management component
├── pages/
│   ├── Home.jsx            # Home page
│   ├── Tasks.jsx           # Tasks page
│   └── ApiDemo.jsx         # API integration demo
├── context/
│   └── ThemeContext.jsx    # Theme context for dark mode
├── utils/
│   └── useLocalStorage.js  # Custom hook for localStorage
├── App.jsx                 # Main app component with routing
└── main.jsx                # Entry point
```

## 🛠️ Technologies Used

- **React 19.1.1** - UI library
- **Vite 7.1.14** - Build tool
- **React Router DOM 7.9.3** - Routing
- **Tailwind CSS 4.1.7** - Styling
- **PropTypes** - Type checking

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd vite-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## 🎯 Assignment Requirements Checklist

### Task 1: Project Setup ✅
- [x] Created React application using Vite
- [x] Installed and configured Tailwind CSS
- [x] Set up project structure (components, pages, utils folders)
- [x] Configured routing using React Router

### Task 2: Component Architecture ✅
- [x] Button component with variants (primary, secondary, danger, success, warning)
- [x] Card component for boxed layouts
- [x] Navbar component with navigation
- [x] Footer component
- [x] Layout component with Navbar and Footer

### Task 3: State Management and Hooks ✅
- [x] TaskManager component with add/complete/delete/filter functionality
- [x] useState for component state
- [x] useEffect for side effects
- [x] useContext for theme management
- [x] Custom useLocalStorage hook

### Task 4: API Integration ✅
- [x] Fetch data from JSONPlaceholder API
- [x] Display data in list layout
- [x] Loading and error states
- [x] Pagination
- [x] Search/filter feature

### Task 5: Styling with Tailwind CSS ✅
- [x] Responsive design (mobile, tablet, desktop)
- [x] Theme switcher (light/dark mode)
- [x] Tailwind utility classes throughout
- [x] Smooth transitions and animations

## 🎨 Components Overview

### Button Component
Reusable button with multiple variants and sizes:
- Variants: primary, secondary, danger, success, warning
- Sizes: sm, md, lg
- Supports disabled state and custom onClick handlers

### TaskManager Component
Full-featured task management:
- Add new tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Filter by All, Active, or Completed
- Persists to localStorage

### API Demo Page
Demonstrates API integration:
- Fetches posts from JSONPlaceholder
- Search functionality
- Pagination controls
- Loading and error handling

### Theme System
- Dark mode toggle in navbar
- Persists theme preference
- Smooth transitions between themes

## 🚀 Deployment

The application can be deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Connect your Git repository
- **GitHub Pages**: Build and deploy the `dist` folder

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Notes

- The application uses React 19's latest features
- Tailwind CSS is configured with dark mode support
- All tasks are saved to browser localStorage
- The API demo uses JSONPlaceholder's free API

## 🤝 Contributing

This is a school assignment project. For issues or suggestions, please contact the instructor.

## 📄 License

This project is created for educational purposes as part of the PLP Academy curriculum.

## 👨‍💻 Author

**Your Name**
- GitHub: [@jbkelli](https://github.com/jbkelli)
- Email: 444mwangialvinm@gmail.com

## 🙏 Acknowledgments

- PLP Academy for the assignment specifications
- React and Vite teams for excellent documentation
- Tailwind CSS for the styling framework
- JSONPlaceholder for the free API

---

**Deployed URL**: [vercel](https://frontend-react-two-gamma.vercel.app)

**Last Updated**: October 2025
