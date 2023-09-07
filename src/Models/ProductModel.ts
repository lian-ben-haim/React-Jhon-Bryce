import { RegisterOptions } from "react-hook-form";
class ProductModel {

	public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageUrl: string;
    public image: File;


    public static nameValidation : RegisterOptions<ProductModel, "name"> = {
        required: {value: true, message: "Missing Name"},
        minLength: {value: 2, message: "Name is too short"},
        maxLength: {value: 20, message: "Name is too long"}
    }

    public static priceValidation : RegisterOptions<ProductModel, "price"> = {
        required: {value: true, message: "Missing Price"},
        min: {value: 0, message: "Price is illegal"},
        max: {value: 1000, message: "Price is too high"}
    }

    public static stockValidation : RegisterOptions<ProductModel, "stock"> = {
        required: {value: true, message: "Missing Stock"},
        min: {value: 0, message: "Stock is illegal"},
        max: {value: 1000, message: "Stock is too high"}
    }

    public static imageValidation : RegisterOptions<ProductModel, "image"> = {
        required: {value: true, message: "Missing image"}
    }
}

export default ProductModel;
