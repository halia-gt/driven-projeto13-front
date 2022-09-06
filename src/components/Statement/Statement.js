import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import StatementTable from "./StatementTable";

export default function Statement() {
    // const auth = JSON.parse(localStorage.getItem("trackit"));
    const name = 'Nathalia';
    const auth = true;
    const isPositive = true;
    const statementArr = [{
        id: 1,
        time: "30/11",
        description: "Almoço mãe",
        amount: "39,90",
        type: "expense"
    }, {
        id: 2,
        time: "27/11",
        description: "Mercado",
        amount: "542,54",
        type: "expense"
    }, {
        id: 3,
        time: "26/11",
        description: "Compras churrasco",
        amount: "67,60",
        type: "expense"
    }, {
        id: 4,
        time: "20/11",
        description: "Empréstimo Maria",
        amount: "500,00",
        type: "income"
    }, {
        id: 5,
        time: "15/11",
        description: "Salário",
        amount: "3000,00",
        type: "income"
    }];
    // const statementArr = undefined;
    const navigate = useNavigate();

    function handleClick(addOrEdit, type, id=undefined) {
        navigate("/transaction", { state: {addOrEdit, type, id} });
    }

    if (auth) {
        return (
            <Wrapper>
                <header>
                    <h2>Olá, {name}</h2>
                    <IconContext.Provider value={{ color: "#FFFFFF", className: "icon", size: "30px" }}>
                        <IoExitOutline />
                    </IconContext.Provider>
                </header>

                <StatementTable statementArr={statementArr} handleClick={handleClick} />

                <footer>
                        <button onClick={() => handleClick('add', 'entrada')}>
                            <IconContext.Provider value={{ color: "#FFFFFF", className: "icon", size: "30px" }}>
                                <AiOutlinePlusCircle />
                            </IconContext.Provider>
                            Nova<br />entrada
                        </button>
                        <button onClick={() => handleClick('add', 'saída')}>
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