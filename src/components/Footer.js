function Footer() {
  return (
    <footer style={{ 
      backgroundColor: "#f0f0f0", 
      textAlign: "center", 
      padding: "1rem", 
      marginTop: "2rem"
    }}>
      <p>&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
