import { RegisterOptions } from "react-hook-form";

class CredentialsModel {
	public email: string;
    public password: string;

    public static emailValidation : RegisterOptions<CredentialsModel, "email"> = {
        required: {value: true, message: "Missing Email"}
    }

    public static passwordValidation : RegisterOptions<CredentialsModel, "password"> = {
        required: {value: true, message: "Missing Password"}
    }

}

export default CredentialsModel;
