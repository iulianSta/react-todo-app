// Footer function
const Footer = () => {
  // Get Year with JS method
  let year = new Date().getFullYear();
  // Print the result in Footer
  return (
    <div>
      <h4>Copyrights ®{year} </h4>
    </div>
  );
};

// Export default Footer
export default Footer;
