import "./style.scss";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="site-name">HRnet</span>
      </div>
      <div className="header-right">
        <nav className="navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/current-employees">Employees</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
