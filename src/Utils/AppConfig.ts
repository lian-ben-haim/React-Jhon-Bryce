class AppConfig {
    public productsUrl = "http://localhost:3030/delay/api/products/"; // Include the ending slash
    public employeesUrl = "http://localhost:3030/api/employees/";
}

const appConfig = new AppConfig();

export default appConfig; // מחצינים את המשתנה ולא את המחלקה
