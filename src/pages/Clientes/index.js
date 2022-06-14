import "./style.css";
import axios from "axios";
import { useState } from "react";

export default function Clientes() {

  const [nome, setName] = useState("");
  const [cidade, setCidade] = useState("");

  const cliente = {
    nome: nome,
    cidade: cidade,
  };

  const sendForm = async () => {
    console.log(cliente)
    await axios.post("/cliente", cliente)
  }

  return (
    <>
      <div className="mainClientes">
        <div>
          <div className="container">
            <div className="card mt-4">
              <div className="card-title">
                <div className="row">
                  <div className="col">
                    <h2 className="mx-3 my-3">Registrar novo cliente: </h2>
                  </div>
                </div>
              </div>
              <form>
                <fieldset>
                  <div className="mb-3 mx-3 my-3">
                    <label for="TextInput" className="form-label">
                      Nome Cliente
                    </label>
                    <span class="required">*</span>
                    <input
                      type="text"
                      id="nome"
                      className="form-control"
                      placeholder="Fulano de Tal"
                      name="nome"
                      onChange={event => setName(event.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 mx-3 my-3">
                    <label for="TextInput" className="form-label">
                      Cidade
                    </label>
                    <span class="required">*</span>
                    <textarea
                      type="text"
                      id="cidade"
                      className="form-control"
                      placeholder="Curitiba"
                      name="cidade"
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
