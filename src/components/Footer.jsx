// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} Cosmic Explorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
