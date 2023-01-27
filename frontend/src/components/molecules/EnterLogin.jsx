import { Link } from "react-router-dom";

export default function EnterLogin() {
  return (
    <Link
      to="/login"
      className="d-flex align-items-center text-white text-decoration-none pb-3"
    >
      <i className="text-warning fs-5 bi bi-box-arrow-in-right me-2"></i>
      <span className="d-none d-sm-inline mx-1 ms-2">Entrar</span>
    </Link>
  );
}
