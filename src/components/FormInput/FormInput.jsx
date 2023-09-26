import "./formInput.css";

const FormInput = (props) => {
    return (
        <div className="formInput">
            {/*<label>username</label>*/}
            <input placeholder={props.placeholder} onChange={(e) => props.setUsername(e.target.value)} />
        </div>
    );
};

export default FormInput;