import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LoginWrapper } from "../../assets/styles/LoginWrapper";
import { postSignUp } from "../../services/myWallet";

export default function SignUp() {
    const [disabled, setDisabled] = useState(false);
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

    function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);
        if (data.password !== data.confirm_password) {
            alert('Confirmação de senha e senha devem ser iguais');
            setDisabled(false);
            return;
        }
        
        postSignUp(data)
            .then(() => {
                navigate('/');
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
                        type="text"
                        placeholder="Nome"
                        name="name"
                        value={data.name}
                        onChange={updateData}
                        disabled={disabled}
                        required
                    />
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
                    <input
                        type="password"
                        placeholder="Confirme a senha"
                        name="confirm_password"
                        value={data.confirm_password}
                        onChange={updateData}
                        disabled={disabled}
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