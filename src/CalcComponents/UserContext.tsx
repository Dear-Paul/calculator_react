import React,   { createContext, ReactNode, useState, useEffect, useMemo, useContext } from "react"


interface UserAuthContextType {
    user?: User;
    loading: boolean;
    error?: any;
    signUp: (email: string, name:string, password: string) => void;
    login: (email: string, name: string, password: string) => void;
    logout: () => void;
}

const UserAuthContext =createContext<UserAuthContextType>(
    {} as UserAuthContextType
);

export function UserAuthProvider ({
    children,
}: {
    children: ReactNode;
}) : JSX.Element {
    const [user, setUser] = useState<User>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true)


    const handleRegisterUser = () => {
    localStorage.setItem("save", JSON.stringify(user)) 
}

const memoedValue = useMemo(
    () => ({
        user,
        loading,
        error,
    }),
    [user, loading, error]
)
return (
   <></>
)

}







