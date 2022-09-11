import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LoginWrapper } from "../../assets/styles/LoginWrapper";

export default function SignUp() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    }); 
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem("mywallet"));

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    console.log(data);

    function handleSubmit(e) {
        e.preventDefault();
    }

    if (auth) {
        return (<Navigate to="/transactions" />);
    } else {
        return (
            <LoginWrapper>
                <strong>MyWallet</strong>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="name"
                        value={data.name}
                        onChange={updateData}
                        required                
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        value={data.email}
                        onChange={updateData}
                        required                
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        value={data.password}
                        onChange={updateData}
                        required                
                    />
                    <input
                        type="password"
                        placeholder="Confirme a senha"
                        name="confirm   _password"
                        value={data.confirmation}
                        onChange={updateData}
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
}