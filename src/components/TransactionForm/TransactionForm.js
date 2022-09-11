import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormWrapper } from "../../assets/styles/FormWrapper";
import { postTransaction, updateTransaction } from "../../services/myWallet";
import { IconContext } from "react-icons";
import { BsArrowReturnLeft } from "react-icons/bs";

export default function TransactionForm() {
    const { addOrEdit, type, id } = useLocation().state;
    const [disabled, setDisabled] = useState(false);
    const [data, setData] = useState({
        amount: "",
        description: ""
    });
    const navigate = useNavigate();

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    if (type === "saída") {
        data.type = "expense";
    }

    if (type === "entrada") {
        data.type = "income";
    }

    function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);
        data.amount = data.amount.replace(",", ".");

        if (addOrEdit === "add") {
            postTransaction(data)
                .then(() => {
                    navigate("/transactions");
                })
                .catch((error) => {
                    console.log(error);
                    setDisabled(false);
                });
        }

        if (addOrEdit === "edit") {
            updateTransaction(data, id)
                .then(() => {
                    navigate("/transactions");
                })
                .catch((error) => {
                    console.log(error);
                    setDisabled(false);
                });
        }
    }

    function returnTransactions() {
        navigate("/transactions");
    }

    return (
        <FormWrapper>
            <header>
                {addOrEdit === "add" ? <h2>Nova {type}</h2> : <h2>Editar {type}</h2>}
                <IconContext.Provider value={{ color: "#FFFFFF", className: "icon", size: "30px" }}>
                    <BsArrowReturnLeft onClick={returnTransactions} />
                </IconContext.Provider>
            </header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Valor"
                    name="amount"
                    value={data.amount}
                    onChange={updateData}
                    disabled={disabled}
                    pattern="[0-9]+([,\.][0-9]+)?"
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    value={data.description}
                    onChange={updateData}
                    disabled={disabled}
                    required
                />
                {addOrEdit === "add" ? <button type="submit">Salvar {type}</button> : <button type="submit">Atualizar {type}</button>}
            </form>
        </FormWrapper>
    );
}