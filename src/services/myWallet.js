import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

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

function postTransaction(body) {
    const config = createHeaders();
    const body = {};
    const promise = axios.post(`${BASE_URL}/transactions`, body, config);
    return promise;
}

function getTransactions(body) {
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/transactions`, config);
    return promise;
}

function deleteTransaction(transactionId) {
    const config = createHeaders();
    const promise = axios.delete(`${BASE_URL}/transactions/${transactionId}`, config);
    return promise;
}

function updateTransaction(transactionId) {
    const config = createHeaders();
    const promise = axios.put(`${BASE_URL}/transactions/${transactionId}`, config);
    return promise;
}

export { postSignUp, postLogin, postTransaction, getTransactions, deleteTransaction, updateTransaction };