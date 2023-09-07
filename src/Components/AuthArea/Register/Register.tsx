import { useForm } from "react-hook-form";
import "./Register.css";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import { useNavigate } from "react-router-dom";

function Register(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user: UserModel) {
        try {
            await authService.register(user);
            alert("Welcome!");
            navigate("/home");
        }
        catch(err: any) {
            alert(err.message);
        }
        
    }

    return (
        <div className="Register">
			<form onSubmit={handleSubmit(send)}>

                <h2>Register</h2>

                <label>First Name: </label>
                <input type="text" {...register("firstName", UserModel.firstNameValidation)} />
                <span className="err">{formState.errors.firstName?.message}</span>
                
                <label>Last Name: </label>
                <input type="text" {...register("lastName", UserModel.lastNameValidation)} />
                <span className="err">{formState.errors.lastName?.message}</span>
                
                <label>Email: </label>
                <input type="email" {...register("email", UserModel.emailValidation)} />
                <span className="err">{formState.errors.email?.message}</span>
                
                <label>Password: </label>
                <input type="password" {...register("password", UserModel.passwordValidation)} />
                <span className="err">{formState.errors.password?.message}</span>

                <button>Register</button>

            </form>
        </div>
    );
}

export default Register;
