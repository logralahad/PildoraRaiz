"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const User_routes_js_1 = __importDefault(require("./Routes/User.routes.js"));
const Rol_routes_js_1 = __importDefault(require("./Routes/Rol.routes.js"));
const Pacient_routes_js_1 = __importDefault(require("./Routes/Pacient.routes.js"));
const File_routes_js_1 = __importDefault(require("./Routes/File.routes.js"));
const Consultation_routes_js_1 = __importDefault(require("./Routes/Consultation.routes.js"));
const Images_routes_js_1 = __importDefault(require("./Routes/Images.routes.js"));
const db_config_js_1 = require("./db.config.js");
const constants_js_1 = require("./constants.js");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_config_js_1.connectDB)();
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        credentials: true,
        origin: [constants_js_1.__clientURL__],
    }));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(User_routes_js_1.default);
    app.use(Rol_routes_js_1.default);
    app.use(Pacient_routes_js_1.default);
    app.use(File_routes_js_1.default);
    app.use(Consultation_routes_js_1.default);
    app.use(Images_routes_js_1.default);
    app.listen(constants_js_1.__apiPort__);
    console.log("Listening on port", constants_js_1.__apiPort__);
});
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBOEI7QUFFOUIsZ0RBQXdCO0FBQ3hCLDhEQUFxQztBQUVyQyw2RUFBaUQ7QUFDakQsMkVBQStDO0FBQy9DLG1GQUF1RDtBQUN2RCw2RUFBaUQ7QUFDakQsNkZBQWlFO0FBQ2pFLGlGQUFxRDtBQUVyRCxpREFBMkM7QUFDM0MsaURBQXdFO0FBRXhFLE1BQU0sSUFBSSxHQUFHLEdBQVMsRUFBRTtJQUN0QixNQUFNLElBQUEsd0JBQVMsR0FBRSxDQUFDO0lBRWxCLE1BQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO0lBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQ0wsSUFBQSxjQUFJLEVBQUM7UUFDSCxXQUFXLEVBQUUsSUFBSTtRQUNqQixNQUFNLEVBQUUsQ0FBQyw0QkFBYyxDQUFDO0tBQ3pCLENBQUMsQ0FDSCxDQUFDO0lBQ0YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBVSxDQUFDLENBQUM7SUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyx1QkFBUyxDQUFDLENBQUM7SUFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQywyQkFBYSxDQUFDLENBQUM7SUFDdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBVSxDQUFDLENBQUM7SUFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQ0FBa0IsQ0FBQyxDQUFDO0lBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsMEJBQVksQ0FBQyxDQUFDO0lBRXRCLEdBQUcsQ0FBQyxNQUFNLENBQUMsMEJBQVcsQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsMEJBQVcsQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQSxDQUFDO0FBRUYsSUFBSSxFQUFFLENBQUMifQ==