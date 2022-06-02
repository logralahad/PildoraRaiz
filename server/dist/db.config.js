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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const constants_1 = require("./constants");
const Person_js_1 = require("./Entities/Person.js");
const Pacient_js_1 = require("./Entities/Pacient.js");
const Consultation_js_1 = require("./Entities/Consultation.js");
const Rol_js_1 = require("./Entities/Rol.js");
const User_js_1 = require("./Entities/User.js");
const File_js_1 = require("./Entities/File.js");
exports.dataSource = new typeorm_1.DataSource({
    type: "postgres",
    username: constants_1.__dbUser__,
    password: constants_1.__dbPassword__,
    port: Number(constants_1.__dbPort__),
    host: constants_1.__dbHost__,
    database: constants_1.__dbName__,
    entities: [Rol_js_1.Roles, Person_js_1.Persons, User_js_1.Usuarios, Pacient_js_1.Pacients, Consultation_js_1.Consultations, File_js_1.Files],
    synchronize: constants_1.__dbSync__,
    ssl: !constants_1.__isProd__,
});
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    exports.dataSource
        .initialize()
        .then(() => {
        console.log("Conectado a la base de datos");
    })
        .catch((err) => {
        console.error(err);
    });
});
exports.connectDB = connectDB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2RiLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBcUM7QUFFckMsMkNBUXFCO0FBQ3JCLG9EQUErQztBQUMvQyxzREFBaUQ7QUFDakQsZ0VBQTJEO0FBQzNELDhDQUEwQztBQUMxQyxnREFBOEM7QUFDOUMsZ0RBQTJDO0FBRTlCLFFBQUEsVUFBVSxHQUFHLElBQUksb0JBQVUsQ0FBQztJQUN2QyxJQUFJLEVBQUUsVUFBVTtJQUNoQixRQUFRLEVBQUUsc0JBQVU7SUFDcEIsUUFBUSxFQUFFLDBCQUFjO0lBQ3hCLElBQUksRUFBRSxNQUFNLENBQUMsc0JBQVUsQ0FBQztJQUN4QixJQUFJLEVBQUUsc0JBQVU7SUFDaEIsUUFBUSxFQUFFLHNCQUFVO0lBQ3BCLFFBQVEsRUFBRSxDQUFDLGNBQUssRUFBRSxtQkFBTyxFQUFFLGtCQUFRLEVBQUUscUJBQVEsRUFBRSwrQkFBYSxFQUFFLGVBQUssQ0FBQztJQUNwRSxXQUFXLEVBQUUsc0JBQVU7SUFDdkIsR0FBRyxFQUFFLENBQUMsc0JBQVU7Q0FDakIsQ0FBQyxDQUFDO0FBRUksTUFBTSxTQUFTLEdBQUcsR0FBUyxFQUFFO0lBQ2xDLGtCQUFVO1NBQ1AsVUFBVSxFQUFFO1NBQ1osSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtRQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUM7QUFUVyxRQUFBLFNBQVMsYUFTcEIifQ==