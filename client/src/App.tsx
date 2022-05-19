import {BrowserRouter} from 'react-router-dom';
import AppRouter from './routes/router';
import Navbar from "./components/Navbar/Navbar";

function App() {
    return <BrowserRouter>
        <Navbar/>
        <AppRouter/>
    </BrowserRouter>
}

export default App;
