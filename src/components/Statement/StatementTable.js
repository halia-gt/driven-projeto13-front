import styled from "styled-components";
import Transaction from "./Transaction";

export default function StatementTable({ statementArr }) {
    const sum = statementArr.reduce((previousValue, currentValue) => {
        const numb = currentValue.amount.replace(",", ".");
        if (currentValue.type === 'income') {
            return previousValue + Number(numb);
        } else {
            return previousValue - Number(numb);
        }
    }, 0);

    function handleClick(id) {
        const confirm = window.confirm('Tem certeza que deseja deletar?');
    }

    return (
        <>
            {statementArr ? (
                    <TableWrapper table={true}>
                        <table>
                            <tbody>
                                {statementArr.map(transaction => (
                                    <Transaction key={transaction.id} {...transaction} />
                                ))}
                            </tbody>
                        </table>
                        <Balance isPositive={sum >= 0}>
                            <p>SALDO</p>
                            <span>{sum}</span>
                        </Balance>
                    </TableWrapper>
                ) : (
                    <TableWrapper table={false}>
                        <span>Não há registros de<br />entrada ou saída</span>
                    </TableWrapper>
                )
            }   
        </>
 
    );
}

const TableWrapper = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    height: calc(100vh - (25px + 16px + 30px + 25px + 13px + 114px));
    width: 100%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.table ? "space-between" : "center"};

    table {
        width: 100%;
        border-collapse:separate; 
        border-spacing: 10px 22px;
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
    padding: 10px;

    p {
        color: #000000;
        font-weight: 700;
    }

    span {
        color: ${props => props.isPositive ? "#03AC00" : "#C70000"};
    }
`;