import './App.css';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import List from './Components/List/List';

const App = () => {
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
