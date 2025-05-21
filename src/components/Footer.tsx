const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Gagan Dileep
            </h3>
            <p className="text-gray-600 mt-2">UI/UX Designer & Frontend Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/Gagan78119" className="text-gray-600 hover:text-blue-600 transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/vemulagagandileep/" className="text-gray-600 hover:text-blue-600 transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://x.com/v_gagan4556" className="text-gray-600 hover:text-blue-600 transition-colors">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
