import styled from "styled-components";

export default function Transaction({ id, time, description, amount, type, deleteConfirm, handleClick }) {
    const text = type === "income" ? "entrada" : "saída";

    return (
        <tr>
            <Time>{time}</Time>
            <Description onClick={() => handleClick("edit", text, id)}>{description}</Description>
            <Amount type={type}>{amount.replace(".", ",")}</Amount>
            <Delete onClick={() => deleteConfirm(id)}>x</Delete>
        </tr>
    );
}

const Time = styled.td`
    color: #C6C6C6;
`;

const Description = styled.td`
    color: #000000;
`;

const Amount = styled.td`
    color: ${props => props.type === "income" ? "#03AC00" : "#C70000"};
    text-align: end;
`;

const Delete = styled.td`
    color: #C6C6C6;
    text-align: end;
`;