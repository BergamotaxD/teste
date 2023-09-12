import { useEffect, useState } from "react";
import axios from "axios";
import { Link , useNavigate} from "react-router-dom";



const url_data = "http://localhost:5000/usuarios";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url_data)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirm = window.confirm("voce quer realmente deletar este usuário?");
    if(confirm) {
        axios.delete('http://localhost:5000/usuarios/'+id)
        .then(res =>{ console.log(res)
          navigate("/")
          window.location.reload(true);
        }).catch(error => console.log(error))

    }

  }


  
  return (
    <div>
      <h1>lista de Usuários</h1>
      <div>
        <button>
         <Link className="div_link" to="/CreateForm">Novo User +</Link></button>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome Completo</th>
              <th>E-mail</th>
              <th>Cidade</th>
              <th>Empresa</th>
              <th>Telefone</th>
              <th>Data Aniversário</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>{d.city}</td>
                <td>{d.interprise}</td>
                <td>{d.phone}</td>
                <td>{d.birthday}</td>
                <td>
                  <Link to={`/UpdateForm/${d.id}`}><button>Editar</button></Link>
                  <button onClick={e => handleDelete(d.id)}>Apagar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

            
            }

