const Footer = () => (
  <footer className="bg-white dark:bg-gray-900 shadow mt-auto py-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
