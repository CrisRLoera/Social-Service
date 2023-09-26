import { useState } from "react";
import "./signUp.css"
import FormInput from "../../../components/FormInput/FormInput"

const Form = () => {
    const [username, setUsername] = useState("")
    console.log(username)

    return (
        <div className="signUp">
            <form>
                <FormInput placeholder="First name" setUsername={setUsername} />
                <FormInput placeholder="Last name" />
                <FormInput placeholder="Email" />
                <FormInput placeholder="School" />
                <FormInput placeholder="Date of birth" />
            </form>
        </div>
    );
};

export default Form;

