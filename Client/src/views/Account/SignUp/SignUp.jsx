import { useState } from "react";
import "./signUp.css"
import FormInput from "../../../components/FormInput/FormInput"
import { CleaningServices } from "@mui/icons-material";

const Form = () => {
    const [values, setValues] = useState({
        Nombre: "",
        Apellidos: "",
        email: "",
        school: "",
        dateOfBirth: "",
        password: "",
        confirmPassword: "",
    })

    const inputs = [
        {
            id: 1,
            name: "Nombre",
            type: "text",
            placeholder: "Nombre",
            errorMessage: "Nombre no debe de incluir caracteres especiales, debe ser entre 3 a 16 caracteres y no contener numeros",
            label: "Nombre",
            pattern: "^[A-Za-z]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "Apellidos",
            type: "text",
            placeholder: "Apellidos",
            errorMessage: "Apellido no debe de incluir caracteres especiales, debe ser entre 3 a 20 caracteres y no contener numeros",
            label: "Apellidos",
            pattern: "^[A-Za-z]{3,20}$",
            required: true,
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "El correo ingreso es invalido",
            label: "Correo electronico",
            required: true,
        },
        {
            id: 4,
            name: "school",
            type: "text",
            placeholder: "Escuela",
            errorMessage: "La escuela no se encuentra",
            label: "Escuela",
            required: true,
        },
        {
            id: 5,
            name: "dateOfBirth",
            type: "date",
            placeholder: "Fecha de nacimiento",
            label: "Día de nacimiento",
            required: true,
        },
        {
            id: 6,
            name: "password",
            type: "password",
            placeholder: "Contraseña",
            errorMessage: "La contraseña debe ser minimo de 8 a 20 caracteres y debe incluir almenos una letra, numero y caracter especial",
            label: "Contraseña",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*.]{8,20}$`,
            required: true,
        },
        {
            id: 7,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirmar contraseña",
            errorMessage: "La contraseña no coincide",
            label: "Confirmar contraseña",
            pattern: values.password,
            required: true,
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    console.log(values);
    return (
        <div className="signUp">
            <form onSubmit={handleSubmit}>
                <h1>Registro</h1>
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
                <button>Registrarse</button>
            </form>
        </div>
    );
};

export default Form;

