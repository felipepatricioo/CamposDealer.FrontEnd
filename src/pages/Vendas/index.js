import "./style.css";
import axios from "axios";
import { useState } from "react";

export default function Vendas(){

const [nome, setName] = useState("");
const [cidade, setCidade] = useState("");

const vendaNova = {
  nome: nome,
  cidade: cidade,
};

const sendForm = async () => {
  console.log(vendaNova)
  await axios.post("/venda", vendaNova)
}

return (
  <>
    <div className="mainVendas">
      <div>
        <div className="container">
          <div className="card mt-4">
            <div className="card-title">
              <div className="row">
                <div className="col">
                  <h2 className="mx-3 my-3">Registrar nova venda: </h2>
                </div>
              </div>
            </div>
            <form>
              <fieldset>
                <div className="mb-3 mx-3 my-3">
                  <label for="TextInput" className="form-label">
                    Id Cliente
                  </label>
                  <span class="required">*</span>
                  <input
                    type="text"
                    id="idCliente"
                    className="form-control"
                    placeholder="Id Cliente..."
                    name="idCliente"
                    onChange={event => setName(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 mx-3 my-3">
                  <label for="TextInput" className="form-label">
                    Id Produto
                  </label>
                  <span class="required">*</span>
                  <textarea
                    type="text"
                    id="idProduto"
                    className="form-control"
                    placeholder="Id Produto..."
                    name="idProduto"
                    onChange={event => setCidade(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 mx-3 my-3">
                  <label for="TextInput" className="form-label">
                    Quantidade Venda
                  </label>
                  <span class="required">*</span>
                  <textarea
                    type="text"
                    id="qtdVenda"
                    className="form-control"
                    placeholder="Quantidade Venda..."
                    name="qtdVenda"
                    onChange={event => setCidade(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 mx-3 my-3">
                  <label for="TextInput" className="form-label">
                    Valor Unitário Venda
                  </label>
                  <span class="required">*</span>
                  <textarea
                    type="text"
                    id="vlrUnitarioVenda"
                    className="form-control"
                    placeholder="Valor Unitário Venda..."
                    name="vlrUnitarioVenda"
                    onChange={event => setCidade(event.target.value)}
                    required
                  />
                </div>
              </fieldset>

              <div role="button" className="btn btn-success" onClick={sendForm}>
                Enviar
              </div>
              <div role="button" className="btn btn-danger">
                Cancelar
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="searchBar">
        <form className="form-label">
          <input
            type="search"
            placeholder="Procure por um cliente"
            name="search"
            required
          />
          <button type="submit" className="btn btn-dark">
            Procurar
          </button>
        </form>
      </div>
    </div>
  </>
);
}
