import { createContext } from "react";


export const MyDispatcherContext = createContext();
export const MyUserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);

    return (
        <MyUserContext.Provider value={{ userId, setUserId }}>
            {children}
        </MyUserContext.Provider>
    );
};
