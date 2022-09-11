import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Statement from "./Statement";
import { deleteSession, getTransactions } from "../../services/myWallet";

export default function Transactions() {
    const name = JSON.parse(localStorage.getItem("mywallet"))?.name;
    const [statement, setStatement] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getTransactions()
            .then((answer) => {
                setStatement(answer.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function handleClick(addOrEdit, type, id = undefined) {
        navigate("/transaction", { state: {addOrEdit, type, id} });
    }

    function logout() {
        const confirm = window.confirm("Tem certeza que deseja sair?");

        if (confirm) {
            deleteSession()
                .then(() => {
                    localStorage.removeItem("mywallet");    
                    navigate("/");
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    if (name) {
        return (
            <Wrapper>
                <header>
                    <h2>Olá, {name}</h2>
                    <IconContext.Provider value={{ color: "#FFFFFF", className: "icon", size: "30px" }}>
                        <IoExitOutline onClick={logout} />
                    </IconContext.Provider>
                </header>

                <Statement statement={statement} handleClick={handleClick} />

                <footer>
                        <button onClick={() => handleClick("add", "entrada")}>
                            <IconContext.Provider value={{ color: "#FFFFFF", className: "icon", size: "30px" }}>
                                <AiOutlinePlusCircle />
                            </IconContext.Provider>
                            Nova<br />entrada
                        </button>
                        <button onClick={() => handleClick("add", "saída")}>
                            <IconContext.Provider value={{ color: "#FFFFFF", className: "icon", size: "30px" }}>
                                <AiOutlineMinusCircle />
                            </IconContext.Provider>
                            Nova<br />saída
                        </button>
                </footer>
            </Wrapper>
        );
    } else {
        return <Navigate to="/" />
    }
}

const Wrapper = styled.div`
    color: #FFFFFF;
    height: 100vh;
    padding: 25px 25px 16px 25px;
    width: 100vw;

    header {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }

    h2 {
        font-size: 26px;
        font-weight: 700;
    }

    footer {
        display: flex;
        justify-content: space-between;
        margin-top: 13px;
    }

    button {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        height: 114px;
        justify-content: space-between;
        padding: 8px;
        text-align: justify;
        width: 48%;
        font-size: 17px;
    }
`;