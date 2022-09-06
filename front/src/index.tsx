import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppContext from './context/AppContext';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <AppContext>
            <App />
        </AppContext>
    </React.StrictMode>,
);
