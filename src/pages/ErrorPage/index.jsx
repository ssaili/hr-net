import { Link } from "react-router-dom";
import "./style.scss";
import Header from "../../components/Header";

function ErrorPage() {
  return (
    <div className="error-page">
      <Header />
      <h1 className="error-page-title">Oops! Something went wrong.</h1>
      <p className="error-page-message">
        We're sorry, but the page you are looking for does not exist.
      </p>
      <Link to="/" className="error-page-link">
        Go back to home
      </Link>
    </div>
  );
}

export default ErrorPage;
