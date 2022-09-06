import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { IoExitOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import Transaction from "./Transaction";

export default function Statement() {
    // const auth = JSON.parse(localStorage.getItem("trackit"));
    const name = 'Nathalia';
    const auth = true;
    const isPositive = true;
    // const statementArr = [{
    //     id: 1,
    //     time: "30/11",
    //     description: "Almoço mãe",
    //     amount: "39,90",
    //     type: "expense"
    // }, {
    //     id: 2,
    //     time: "27/11",
    //     description: "Mercado",
    //     amount: "542,54",
    //     type: "expense"
    // }, {
    //     id: 3,
    //     time: "26/11",
    //     description: "Compras churrasco",
    //     amount: "67,60",
    //     type: "expense"
    // }, {
    //     id: 4,
    //     time: "20/11",
    //     description: "Empréstimo Maria",
    //     amount: "500,00",
    //     type: "income"
    // }, {
    //     id: 5,
    //     time: "15/11",
    //     description: "Salário",
    //     amount: "3000,00",
    //     type: "income"
    // }];
    const statementArr = undefined;

    if (auth) {
        return (
            <Wrapper>
                <header>
                    <h2>Olá, {name}</h2>
                    <IconContext.Provider value={{ color: "#FFFFFF", className: "icon", size: "30px" }}>
                        <IoExitOutline />
                    </IconContext.Provider>
                </header>

                {statementArr ? (
                        <TableWrapper table={true}>
                            <table>
                                <tbody>
                                    {statementArr.map(transaction => (
                                        <Transaction key={transaction.id} {...transaction} />
                                    ))}
                                </tbody>
                            </table>
                            <Balance isPositive={isPositive}>
                                <p>SALDO</p>
                                <span>2849,96</span>
                            </Balance>
                        </TableWrapper>

                    ) : (
                        <TableWrapper table={false}>
                            Não há registros de<br />entrada ou saída
                        </TableWrapper>
                    )
                }

                <footer>
                        <button>
                            <IconContext.Provider value={{ color: "#FFFFFF", className: "icon", size: "30px" }}>
                                <AiOutlinePlusCircle />
                            </IconContext.Provider>
                            Nova<br />entrada
                        </button>
                        <button>
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

const TableWrapper = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    height: calc(100vh - (25px + 16px + 30px + 25px + 13px + 114px));
    padding: 10px;
    width: 100%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    table {
        width: 100%;
        border-collapse:separate; 
        border-spacing: 0 22px;
    }

    span {
        color: #868686;
        font-size: 20px;
        text-align: center;
    }
`;

const Balance = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 17px;
    width: 100%;

    p {
        color: #000000;
        font-weight: 700;
    }

    span {
        color: ${props => props.isPositive ? "#03AC00" : "#C70000"};
    }
`;