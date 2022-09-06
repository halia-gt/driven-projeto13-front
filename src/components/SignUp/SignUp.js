import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginWrapper } from "../../assets/styles/LoginWrapper";

export default function SignUp() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmation: ''
    });
    const navigate = useNavigate();

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <LoginWrapper>
            <strong>MyWallet</strong>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={data.name}
                    updateData={updateData}
                    required                
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={data.email}
                    updateData={updateData}
                    required                
                />
                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={data.password}
                    updateData={updateData}
                    required                
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    name="confirmation"
                    value={data.confirmation}
                    updateData={updateData}
                    required                
                />
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">
                <p>Já tem uma conta? Entre agora!</p>
            </Link>
        </LoginWrapper>
    );
}