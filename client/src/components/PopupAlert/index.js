import './popup-alert.css';

const PopupAlert = (props) => {
    return(
        <div className="popup-alert">
            <div className='box'>
                <h1>{props.title}</h1>
                <h2>{props.message}</h2>
                <h3>Tente:</h3>
                <h3>Email: 123@gmail.com</h3>
                <h3>Senha: 12345</h3>
                <div className='button-center'>
                    <button onClick={() => props.usestate(false)}>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default PopupAlert;