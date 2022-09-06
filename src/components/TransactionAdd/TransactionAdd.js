import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FormWrapper } from "../../assets/styles/FormWrapper";

export default function TransactionAdd() {
    const state = useLocation().state;
    const [data, setData] = useState({
        amount: '',
        description: ''
    });

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <FormWrapper>
            <h2>Nova {state}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Valor"
                    name="amount"
                    value={data.amount}
                    onChange={updateData}
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    value={data.description}
                    onChange={updateData}
                    required
                />
                <button type="submit">Salvar {state}</button>
            </form>
        </FormWrapper>
    );
}