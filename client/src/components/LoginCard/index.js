import { useContext, useState } from "react";
import CampoFormularioLogin from "../CampoFormularioLogin";
import "./login-card.css";
import { useForm } from 'react-hook-form';
import { MyApi } from '../../services/api'
import { useNavigate } from "react-router-dom";
import PopupAlert from "../PopupAlert";
import userProvider from "../../services/userProvider";

const LoginCard = () => {

    const navigate = useNavigate();

    const [user, setUser] = useContext(userProvider)
    const [openPopup, setOpenPopup] = useState(false);

    const { register, handleSubmit, formState: { errors }, } = useForm({defaultValues: ''});
    const onSubmit = async (data) => {
            await MyApi.post('login', {
                email: data.email,
                password: data.password, 
            })
            .then((response) => {
                if(response.data.auth === true){
                    const userInfo = {
                        "name": response.data.user.name,
                        "email": response.data.user.email,
                        "id": response.data.user.id,
                        "token": response.data.token,
                    }
                    setUser(userInfo)
                    console.log(userInfo)
                    navigate('/home');
                }
                else{
                    setOpenPopup(true);
                }
            });
    }

    return (
        <section className='login-card'>
            {
                openPopup ? 
                <PopupAlert title='Credenciais incorretas' message='Login ou senha inválido!' usestate={setOpenPopup}/>  
                : null
            }
            <div className="title">
                <h1>Olá, seja</h1>
                <h1>bem-vindo</h1>
            </div>
            <h2>Para acessar a plataforma, faça seu login.</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <CampoFormularioLogin
                    name='email'
                    label='E-MAIL'
                    placeholder='user.name@mail.com'
                    type='text'
                    pattern= {/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
                    register={register}
                    error_message='Preencha um endereço de e-mail válido'
                    errors={errors}
                />
                <CampoFormularioLogin
                    name='password'
                    label='SENHA'
                    placeholder='*******'
                    type='password'
                    pattern={null}
                    register={register}
                    error_message={null}
                    errors={errors}
                />
                <div className='button-center'>
                    <button>ENTRAR</button>
                </div>
            </form>

            <div className="forgot-password">
                <h3>Esqueceu seu login ou senha?</h3>
                <h3>Clique <a href=''>aqui</a></h3>
            </div>
        </section>
    )
};

export default LoginCard;