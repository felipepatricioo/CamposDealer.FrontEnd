import "./style.css";
import axios from "axios";
import { useState } from "react";

export default function Vendas() {
  const [nome, setName] = useState("");
  const [cidade, setCidade] = useState("");

  const vendaNova = {
    nome: nome,
    cidade: cidade,
  };

  const sendForm = async () => {
    console.log(vendaNova);
    await axios.post("/venda", vendaNova);
  };

  const resultadoAPI = [
    {
      idVenda: 1,
      idCliente: 1,
      idProduto: 2,
      qtdVenda: 10,
      vlrUnitarioVenda: 9.9,
      dthVenda: "2022-06-12 01:49:36.0583092",
      vlrTotalVenda: 99
    },
    {
      idVenda: 2,
      idCliente: 2,
      idProduto: 1,
      qtdVenda: 100,
      vlrUnitarioVenda: 9.9,
      dthVenda: "2022-06-12 01:49:36.0583092",
      vlrTotalVenda: 990
    },
  ];

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
                      onChange={(event) => setName(event.target.value)}
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
                      onChange={(event) => setCidade(event.target.value)}
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
                      onChange={(event) => setCidade(event.target.value)}
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
                      onChange={(event) => setCidade(event.target.value)}
                      required
                    />
                  </div>
                </fieldset>

                <div
                  role="button"
                  className="btn btn-success"
                  onClick={sendForm}
                >
                  Enviar
                </div>
                <div role="button" className="btn btn-danger">
                  Cancelar
                </div>
              </form>
            </div>
          </div>
        </div>

        <div>
          <div className="searchBar">
            <form className="form-label">
              <input
                type="search"
                placeholder="Procure por uma venda"
                name="search"
                required
              />
              <button type="submit" className="btn btn-dark">
                Procurar
              </button>
            </form>
          </div>

          {resultadoAPI.map((venda) => (
            <div className="container">
              <div className="row">
                <div className="col-sm">Id Venda: {venda.idVenda}</div>
                <div className="col-sm">Id Cliente: {venda.idCliente}</div>
                <div className="col-sm">Id Produto: {venda.idProduto}</div>
                <div className="col-sm">Qtd Venda: {venda.qtdVenda}</div>
                <div className="col-sm">Vlr Unitario Venda: {venda.vlrUnitarioVenda}</div>
                <div className="col-sm">Data Venda: {venda.dthVenda}</div>
                <div className="col-sm">Vlr Total Venda: {venda.vlrTotalVenda}</div>
                <div role="button" className="col-sm btn btn-success" onClick={sendForm}>
                Editar
              </div>
              <div role="button" className="col-sm btn btn-danger">
                Excluir
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
