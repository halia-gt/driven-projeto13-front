import { Navigate } from "react-router-dom";

export default function Statement() {
    // const auth = JSON.parse(localStorage.getItem("trackit"));
    const auth = true;

    if (auth) {
        return (
            <>
                Olá
            </>
        );
    } else {
        return <Navigate to="/" />
    }
}