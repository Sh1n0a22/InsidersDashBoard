import { useState } from "react";

import { useNavigate } from "react-router";
import { resetUserPassword } from "../features/Auth/servises/resetPassword";
import { registerUser } from "../features/Auth/servises/register";
import { logInUser } from "../features/Auth/servises/logIn";
import { logoutUser } from "../features/Auth/servises/logOut";

const useAuth = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorState, setErroState] = useState(false)

    const handleLogin = async () => {

        const { error } = await logInUser(email, password)

        if (error) {
            setErrorMessage(error.message)
        } else {
            navigate("/dashboard", { replace: true });
        }
    }


    const handlePasswordChange = async () => {
        const error = await resetUserPassword(email)
        if (error) {
            setErrorMessage("Error sending password reset email.");
            setErroState(true);
        } else {
            setErrorMessage("Password reset email sent.");
            setErroState(false);
        }
    }

    const handleRegister = async () => {
        const { error } = await registerUser(email, password)

        if (error) {
            setErrorMessage(error.message)
        } else {
            navigate("/dashboard", { replace: true });
        }
    }

    const hanldeLogOut = async () => {
            await logoutUser();
            navigate("/Login", { replace: true })
        }

    return { email, password, errorMessage, errorState, setEmail, setPassword, setErrorMessage, setErroState, handlePasswordChange, handleLogin, handleRegister, hanldeLogOut }
}
export default useAuth