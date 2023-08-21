import LoginScreen from "../../components/LoginScreen";
import HomeScreen from "../../components/HomeScreen";
import {Route, BrowserRouter, Routes} from 'react-router-dom';

const MyRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact element={<LoginScreen/>} path="/"/>
                <Route exact element={<HomeScreen/>} path="/home"/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;