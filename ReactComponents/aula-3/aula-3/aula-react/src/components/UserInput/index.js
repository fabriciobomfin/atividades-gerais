// aula-3\aula-react\src\components\UserInput\index.js
import { useState } from "react";
import './style.css'

const UserInput = ({onAddUser}) => {
    const [usuario, setUsuario] = useState('')

    const handleChange = (event) => {
        setUsuario(event.target.value)
    }

    const hangleSubmit = () => {
        if(usuario.trim()){
            onAddUser(usuario)
            setUsuario('')
        }else{
            alert('Digite um nome de usuário:')
        }
    }

    return(
        <div className="user-input"> 
            <h2>Adicionar usuário</h2>
            <input
                type="text"
                placeholder="Digite o nome do usuário:"
                value={usuario}
                onChange={handleChange}
            />
            <button onClick={hangleSubmit}>Adicionar</button>
        </div>
    )
}
export default UserInput