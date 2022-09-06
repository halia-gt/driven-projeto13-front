import { useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { LoginWrapper } from "../../assets/styles/LoginWrapper";

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const auth = JSON.parse(localStorage.getItem("mywallet"));

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    
    if (auth) {
        return (<Navigate to="/statement" />);
    } else {
        return (
            <LoginWrapper>
                <strong>MyWallet</strong>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Entrar</button>
                </form>
                <Link to="/sign-up">
                    <p>Primeira vez? Cadastre-se!</p>
                </Link>
            </LoginWrapper>
        );
    }
}