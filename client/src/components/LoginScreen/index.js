import LoginCard from '../LoginCard';
import './login-screen.css';

const LoginScreen = () => {
    return (
        <div className='login-screen'>
            <div className='image' style={{backgroundImage: `linear-gradient(0deg, rgba(19, 5, 37, 1) 10%, rgba(105, 57, 153, 0) 100%), url(${process.env.PUBLIC_URL + 'images/shutterstock_12208099181.png'})`, backgroundSize: 'cover'}}></div>

            <div className='login-section'>
                <LoginCard/>
            </div>
        </div>
    )
}

export default LoginScreen;