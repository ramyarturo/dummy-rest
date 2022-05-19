import {Route, Routes} from "react-router-dom"
import HomePage from "../pages/Home"


const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<HomePage/>}/>
    </Routes>
}

export default AppRouter