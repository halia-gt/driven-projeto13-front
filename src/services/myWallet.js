import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem("mywallet"));
    const config = {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    };

    return config;
}

function postSignUp(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/login`, body);
    return promise;
}

function deleteSession() {
    const config = createHeaders();
    const promise = axios.delete(`${BASE_URL}/login`, config);
    return promise;
}

function postTransaction(body) {
    const config = createHeaders();
    const promise = axios.post(`${BASE_URL}/transactions`, body, config);
    return promise;
}

function getTransactions() {
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/transactions`, config);
    return promise;
}

function deleteTransaction(transactionId) {
    const config = createHeaders();
    const promise = axios.delete(`${BASE_URL}/transactions/${transactionId}`, config);
    return promise;
}

function updateTransaction(body, transactionId) {
    const config = createHeaders();
    const promise = axios.put(`${BASE_URL}/transactions/${transactionId}`, body, config);
    return promise;
}

export { postSignUp, postLogin, deleteSession, postTransaction, getTransactions, deleteTransaction, updateTransaction };