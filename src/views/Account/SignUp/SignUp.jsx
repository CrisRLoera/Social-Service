import { useState, useRef } from "react";
import "./signUp.css"
import FormInput from "../../../components/FormInput/FormInput"
import { CleaningServices } from "@mui/icons-material";

const Form = () => {
    //const [username, setUsername] = useState("")
    const usernameRef = useRef()

    console.log(usernameRef)

    console.log("re rendered");

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="signUp">
            <form onSubmit={handleSubmit}>
                <FormInput refer={usernameRef} placeholder="First name" />
                <FormInput placeholder="Last name" />
                <FormInput placeholder="Email" />
                <FormInput placeholder="Password" />
                <FormInput placeholder="Confirm Password" />
                <FormInput placeholder="School" />
                <FormInput placeholder="Date of birth" />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;

