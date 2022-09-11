import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Transactions from "./Transactions/Transactions";
import TransactionForm from "./TransactionForm/TransactionForm";

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/transaction" element={<TransactionForm />} />
            </Routes>
    </BrowserRouter>
  );
}