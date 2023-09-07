import { RegisterOptions } from "react-hook-form";

class UserModel {
	public id: number;
    public firstName: string; 
    public lastName: string;
    public email: string;
    public password: string;
    public role: string; // User / Admin


    public static firstNameValidation : RegisterOptions<UserModel, "firstName"> = {
        required: {value: true, message: "Missing First Name"},
        minLength: {value: 2, message: "First Name is too short"},
        maxLength: {value: 10, message: "First Name is too long"}
    }

    public static lastNameValidation : RegisterOptions<UserModel, "lastName"> = {
        required: {value: true, message: "Missing Last Name"},
        minLength: {value: 2, message: "Last Name is too short"},
        maxLength: {value: 10, message: "Last Name is too long"}
    }

    public static emailValidation : RegisterOptions<UserModel, "email"> = {
        required: {value: true, message: "Missing Email"},
        pattern: {value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: "Illegal email address"},
        
    }

    public static passwordValidation : RegisterOptions<UserModel, "password"> = {
        required: {value: true, message: "Missing Password"},
        minLength: {value: 6, message: "Password must have at least 6 characters"},
        maxLength: {value: 20, message: "Password is too long"}
    }
}




export default UserModel;
