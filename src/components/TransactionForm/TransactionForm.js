import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FormWrapper } from "../../assets/styles/FormWrapper";

export default function TransactionForm() {
    const { addOrEdit, type, id } = useLocation().state;
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
            {addOrEdit === 'add' ? <h2>Nova {type}</h2> : <h2>Editar {type}</h2>}
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
                {addOrEdit === 'add' ? <button type="submit">Salvar {type}</button> : <button type="submit">Atualizar {type}</button>}
            </form>
        </FormWrapper>
    );
}