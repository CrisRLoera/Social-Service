import { useState } from "react";
import "./signUp.css"
import FormInput from "../../../components/FormInput/FormInput"
import { CleaningServices } from "@mui/icons-material";

const Form = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        school: "",
        dateOfBirth: "",
        password: "",
        confirmPassword: "",
    })

    const inputs = [
        {
            id: 1,
            name: "firstName",
            type: "text",
            placeholder: "First Name",
            label: "firstName"
        },
        {
            id: 2,
            name: "lastName",
            type: "text",
            placeholder: "Last Name",
            label: "lastName"
        },
        {
            id: 3,
            name: "email",
            type: "text",
            placeholder: "Email",
            label: "email"
        },
        {
            id: 4,
            name: "school",
            type: "text",
            placeholder: "School",
            label: "school"
        },
        {
            id: 5,
            name: "dateOfBirth",
            type: "text",
            placeholder: "DateOfBirth",
            label: "dateOfBirth"
        },
        {
            id: 6,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "password"
        },
        {
            id: 7,
            name: "confirmPassword",
            type: "password",
            placeholder: "ConfirmPassword",
            label: "confirmPassword"
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
                {inputs.map((input) => (
                    <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;

