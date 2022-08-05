import { createContext, useState } from "react";

const INITIAL_DATA = {
    formData: {
        fullName: "",
        displayName: "",
        workspaceName: "",
        workspaceUrl: "",
        useSelect: 1
    },
    saveForm: () => {}
}

//Context to set and retrieve the formData
export const UserContext = createContext(INITIAL_DATA);

export const UserProvider = ({ children }) => {
    const [formData, setFormData] = useState({ 
        fullName: "",
        displayName: "",
        workspaceName: "",
        workspaceUrl: "",
        useSelect: 1
    });

    const saveForm = (data) => {
        setFormData({...data});
    };

    const value = {formData, saveForm};

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};