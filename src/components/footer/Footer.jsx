import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 py-10 text-white flex space-x-3 justify-center text-xl ">
      <p>Perahin Knowledge</p>
      <p>&copy; {currentYear}</p>
    </footer>
  );
};

export default Footer;