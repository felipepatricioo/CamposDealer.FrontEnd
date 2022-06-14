import "./style.css";
import { Link } from "react-router-dom";

export default function Management() {
  return (
    <div className="container">
      <div id="mainManagement">
        <div>
          <h1>Genrenciador:</h1>
        </div>

        <ul className="mb-3 mx-3 my-3">
          <li className="sub">
            <Link to="/clientes">
              <h3>Clientes</h3>
            </Link>
          </li>
          <li className="sub">
            <Link to="/produtos">
              <h3>Produtos</h3>
            </Link>
          </li>
          <li className="sub">
            <Link to="/vendas">
              <h3>Vendas</h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
