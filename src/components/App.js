import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Statement from "./Statement/Statement";

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/statement" element={<Statement />} />
            </Routes>
    </BrowserRouter>
  );
}