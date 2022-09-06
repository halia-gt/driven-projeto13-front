import styled from "styled-components";

export default function Transaction({ id, time, description, amount, type }) {

    return (
        <tr>
            <Time>{time}</Time>
            <Description>{description}</Description>
            <Amount type={type}>{amount}</Amount>
            <Delete onClick={() => handleClick(id)}>x</Delete>
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
    color: ${props => props.type === 'income' ? "#03AC00" : "#C70000"};
    text-align: end;
`;

const Delete = styled.td`
    color: #C6C6C6;
    text-align: end;
`;