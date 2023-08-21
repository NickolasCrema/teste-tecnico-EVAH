import './campo-formulario-login.css';

const CampoFormularioLogin = (props) => {

    return (
        <div className='campo-formulario'>
            <label>
                {props.label}
            </label>

            <input
                style={
                    props.name === 'email' ? 
                        props.errors.email ?
                            props.errors.email.type === 'required' ?
                            {border: "1px solid red"} : {border: "1px solid #fa6525"}
                            : null
                        :
                        props.errors.password ?
                            {border: "1px solid red"}
                            : null
                }
                name={props.name} 
                type={props.type} 
                placeholder={props.placeholder} 
                value={props.valor}
                {...props.register( props.name,
                    {
                        pattern: {
                            value: props.pattern,
                            message: props.error_message
                        },
                        required: 'O campo não pode estar vazio.'
                    }
                )}    
            >
            </input>

            {
                props.name === 'email' ?
                    props.errors.email ? (
                        <>
                        {props.errors.email.type === "required" && (
                            <div style={{ color: "red", margin:'0', fontSize:"12px", position: "absolute" }}>
                            {props.errors.email.message}
                            </div>
                        )}
                        {props.errors.email.type === "pattern" && (
                            <div style={{ color: "#fa6525", margin:'0', fontSize:"12px", position: "absolute" }}>
                            {props.errors.email.message}
                            </div>
                        )}
                        </>
                    ) 
                    : null
                :
                    props.errors.password ? (
                        <>
                        {props.errors.password.type === "required" && (
                            <div style={{ color: "red", margin:'0', fontSize:"12px", position: "absolute" }}>
                            {props.errors.password.message}
                            </div>
                        )}
                        {props.errors.password.type === "pattern" && (
                            <div style={{ color: "#fa6525", margin:'0', fontSize:"12px" }}>
                            {props.errors.password.message}
                            </div>
                        )}
                        </>
                    )
                    : null
            }

        </div>
    )
}

export default CampoFormularioLogin