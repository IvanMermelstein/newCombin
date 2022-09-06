import { useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import { ContextProps, useAppContext } from './context/AppContext';
import { getMembers } from './utils/getMembers';

const App = () => {
    const { setMembers } = useAppContext() as ContextProps;

    useEffect(() => {
        getMembers().then(members => {
            setMembers(members);
        });
    }, [setMembers]);

    return (
        <>
            <Header />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1vw',
                }}>
                <Form />
                <List />
            </div>
            <Footer />
        </>
    );
};

export default App;
