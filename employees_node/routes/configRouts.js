const employeesR =require("./employees");

exports.routesInit = (app) => {
    app.use("/employees",employeesR);
}