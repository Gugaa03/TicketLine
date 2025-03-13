import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav>
          <ul className="list">
            <li className="item">
              <a href="/About" className="link">
                About
              </a>
            </li>
            <li className="item">
              <a href="/Contact" className="link">
                Contact
              </a>
            </li>
            <li className="item">
              <a href="/Privacy" className="link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
        <p>© 2024 TicketSolution</p>
      </div>
    </footer>
  );
};

export default Footer;
