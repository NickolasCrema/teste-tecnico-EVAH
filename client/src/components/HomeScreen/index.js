import { useContext } from 'react';
import userProvider from '../../services/userProvider';
import './home-screen.css';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
    
    const [user, setUser] = useContext(userProvider);
    const navigate = useNavigate();

    const Logout = () => {
        setUser({});
        console.log(user);
        navigate('/');
    }

    return (
        <div className="home-screen">
            <button onClick={() => Logout()}>Logout</button>
            <h1>Olá, {user.name}</h1>
            <h2>Suas informações:</h2>
            <h3>E-mail: {user.email}</h3>
            <h3>Id: {user.id}</h3>
            <h3>Token: {user.token}</h3>
        </div>
    )
}

export default HomeScreen;