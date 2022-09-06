import React, {
    createContext,
    Dispatch,
    FC,
    SetStateAction,
    useContext,
    useState,
} from 'react';

type Props = {
    children?: React.ReactNode;
};

export type ContextProps = {
    firstName: string;
    setFirstName: Dispatch<SetStateAction<string>>;
    lastName: string;
    setLastName: Dispatch<SetStateAction<string>>;
    address: string;
    setAddress: Dispatch<SetStateAction<string>>;
    SSN: string;
    setSSN: Dispatch<SetStateAction<string>>;
    members: Member[];
    setMembers: Dispatch<SetStateAction<Member[]>>;
};

export type Member = {
    firstName: string;
    lastName: string;
    address: string;
    ssn: string;
};

export const AppContext = createContext<ContextProps | null>(null);
export const useAppContext = () => useContext(AppContext);

const AppProvider: FC<Props> = ({ children }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [SSN, setSSN] = useState<string>('');
    const [members, setMembers] = useState<Member[]>([]);

    return (
        <AppContext.Provider
            value={{
                firstName,
                setFirstName,
                SSN,
                setSSN,
                lastName,
                setLastName,
                address,
                setAddress,
                members,
                setMembers,
            }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
