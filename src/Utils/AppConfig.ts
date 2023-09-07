class AppConfig {
    // public productsUrl = "http://localhost:3030/delay/api/products/";
    public productsUrl = "http://localhost:3030/delay/api/products/"; // Include the ending slash
    public employeesUrl = "http://localhost:3030/api/employees/";
    public registerUrl = "http://localhost:3030/api/register/";
    public loginUrl = "http://localhost:3030/api/login/";
}

const appConfig = new AppConfig();

export default appConfig; // מחצינים את המשתנה ולא את המחלקה
