import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateForm() {
  const [data, setData] = useState([]);

  const [values, setValues] = useState({
    username: "",
    email: "",
    city: "",
    interprise: "",
    phone: "",
    birthday: "",
  });

  const handleChangeUpdate = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  

  const { id } = useParams();

  useEffect((id) => {
    axios
      .get("http://localhost:5000/usuarios/" + id)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault;
    axios
      .put("http://localhost:5000/usuarios/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <div>
          <h1> Atualizar dados do Usuário</h1>
          <form onSubmit={handleUpdate}>
            <div>
              <label htmlFor="username">Nome Completo</label>
              <input
                type="text"
                name="username"
                placeholder="Nome Completo"
                required
                value={data.username}
                onChange={handleChangeUpdate}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChangeUpdate}
                type="email"
                name="email"
                placeholder="E-mail para Contato"
                required
                value={data.email}
              />
            </div>
            <div>
              <label htmlFor="city">Cidade</label>
              <input
                onChange={handleChangeUpdate}
                type="text"
                name="city"
                placeholder="Cidade"
                value={data.city}
              />
            </div>
            <div>
              <label htmlFor="interprise">Empresa</label>
              <input
                onChange={handleChangeUpdate}
                type="text"
                name="interprise"
                placeholder="Nome da Empresa"
                value={data.interprise}
              />
            </div>
            <div>
              <label htmlFor="phone">Telefone de Contato</label>
              <input
                onChange={handleChangeUpdate}
                type="number"
                name="phone"
                placeholder="Telefone para Contato"
                value={data.phone}
              />
            </div>
            <div>
              <label htmlFor="birthday">Data de Aniversário</label>
              <input
                onChange={handleChangeUpdate}
                type="text"
                name="birthday"
                placeholder="Data de Aniversário"
                value={data.birthday}
              />
            </div>
            <button>Alterar Dados</button>
            <Link to={"/"}>
              <button>Voltar</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
