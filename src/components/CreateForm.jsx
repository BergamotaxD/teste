import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const url_data = "http://localhost:5000/usuarios";



export default function CreateForm (){

    
    const [values , setValues] = useState({

        username: '',
        email: '',
        city: '',
        interprise: '',
        phone: '',
        birthday: ''
    })
   
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
  
    const navigate = useNavigate();
   
    
 
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(url_data, values)
        .then(res => {
                 console.log(res);
            navigate('/')
        })
         .catch((error) => console.log(error));


    }

   return (
<>
        <div>
          <div>
            <h1> Adicionar Novo Usuário</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Nome Completo</label>
                        <input type="text" name="username" placeholder="Nome Completo" required 
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="E-mail para Contato"  required
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="city">Cidade</label>
                        <input type="text" name="city" placeholder="Cidade" 
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="interprise">Empresa</label>
                        <input type="text" name="interprise" placeholder="Nome da Empresa" 
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="phone">Telefone de Contato</label>
                        <input type="number" name="phone" placeholder="Telefone para Contato" 
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="birthday">Data de Aniversário</label>
                        <input type="text" name="birthday" placeholder="Data de Aniversário" 
                        onChange={handleChange}/>
                    </div>
                    <button>Cadastrar</button>
                    <button><Link to="/" > Voltar </Link></button>
                </form>
          </div>
        </div>
        </>
    )

}