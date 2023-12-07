import { createContext } from "react";
import { useNavigate } from 'react-router-dom';
import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";


const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values,setErrorMessage) => {
        try {
            const result = await authService.login(values.email, values.password);
    
            if (result && result.accessToken) {
                setAuth(result);
                localStorage.setItem('accessToken', result.accessToken);
                navigate('/');
            } else {
                // Set the error message to be displayed in your login component
                setErrorMessage("Login failed. Please try again.");
            }
        } catch (error) {
            // Set the error message to be displayed in your login component
            setErrorMessage(error.message);
        }
    };

    const registerSubmitHandler = async (values) => {
        try {
            const result = await authService.register(values.email, values.password);
    
            if (result && result.accessToken) {
                setAuth(result);
                localStorage.setItem('accessToken', result.accessToken);
                navigate('/');
            } else {
                // Handle the situation where result is not as expected
                // For example, set an error message in your state
            }
        } catch (error) {
            // Handle the error, possibly by setting an error state
            console.error("Registration Error:", error);
            // Return the error to be handled/displayed in your component
            return { success: false, message: error.message };
        }
    };

    const logoutHandler = () => {
      
        setAuth({});
        localStorage.removeItem('accessToken');
        
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
