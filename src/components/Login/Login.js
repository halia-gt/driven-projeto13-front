import { useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { LoginWrapper } from "../../assets/styles/LoginWrapper";
import { postLogin } from "../../services/myWallet";

export default function Login() {
    const [disabled, setDisabled] = useState(false);
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
        setDisabled(true);

        postLogin(data)
            .then((answer) => {
                const token = answer.data.token;
                const name = answer.data.name;
                const infoJSON = JSON.stringify({ token, name });
                localStorage.setItem('mywallet', infoJSON);

                navigate('/transactions');
            })
            .catch((error) => {
                console.error(error);
                setDisabled(false);
            }); 
    }
    
    if (auth) {
        return (<Navigate to="/transactions" />);
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
                        disabled={disabled}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        value={data.password}
                        onChange={updateData}
                        disabled={disabled}
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