import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NotificationProvider from './providers/NotificationProvider';
import {ThemeProvider} from 'styled-components';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import ApiResourceProvider from "./providers/ApiResourceProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const theme = {
    breakpoints: {
        phone: "498px"
    },
    colors: {
        black: "#0a0a0a",
        bgBlack: "#2b2b2b",
        gray: "#9e9e9e"
    }
}
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <NotificationProvider>
                <ApiResourceProvider>
                    <App/>
                </ApiResourceProvider>
            </NotificationProvider>
        </ThemeProvider>
    </React.StrictMode>
);
