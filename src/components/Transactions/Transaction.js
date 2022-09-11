import styled from "styled-components";
import dayjs from "dayjs";

export default function Transaction({ _id, time, description, amount, type, deleteConfirm, handleClick }) {
    const text = type === "income" ? "entrada" : "saída";
    const formatedTime = dayjs(time).format("DD/MM");

    return (
        <tr>
            <Time>{formatedTime}</Time>
            <Description onClick={() => handleClick("edit", text, _id)}>{description}</Description>
            <Amount type={type}>{amount.replace(".", ",")}</Amount>
            <Delete onClick={() => deleteConfirm(_id)}>x</Delete>
        </tr>
    );
}

const Time = styled.td`
    color: #C6C6C6;
`;

const Description = styled.td`
    color: #000000;
    text-align: justify;
`;

const Amount = styled.td`
    color: ${props => props.type === "income" ? "#03AC00" : "#C70000"};
    text-align: end;
`;

const Delete = styled.td`
    color: #C6C6C6;
    text-align: end;
`;