"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deleteUser = exports.updateUser = exports.getAllUsers = exports.getUserByRol = exports.getUserById = exports.login = exports.createUser = void 0;
const Person_js_1 = require("../Entities/Person.js");
const User_js_1 = require("../Entities/User.js");
const argon2 = __importStar(require("argon2"));
const db_config_js_1 = require("../db.config.js");
const constants_js_1 = require("../constants.js");
const jwt = require("jsonwebtoken");
const repo = db_config_js_1.dataSource.getRepository(User_js_1.Usuarios);
require("dotenv").config();
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { persona, rolId, username, password } = req.body;
    const personaIn = yield Person_js_1.Persons.insert({
        nombre: persona.nombre,
        paterno: persona.paterno,
        materno: persona.materno,
        edad: persona.edad,
        telefono: persona.telefono,
    });
    const hashedPassword = yield argon2.hash(password);
    try {
        const userInsert = yield User_js_1.Usuarios.save({
            personaId: personaIn.identifiers[0].id,
            rolId: rolId,
            username: username,
            password: hashedPassword,
        });
        if (userInsert) {
            let payload = {
                id: userInsert.id,
                username: username,
            };
            const token = jwt.sign(payload, process.env.TOKEN_SECRET);
            return res.send({ userInsert, token });
        }
    }
    catch (error) {
        yield Person_js_1.Persons.delete({
            id: personaIn.identifiers[0].id,
        });
        return res.json({ error: "Hubo un error al registrar al usuario." });
    }
});
exports.createUser = createUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const userFound = yield repo
        .createQueryBuilder("user")
        .where("user.username = :username", { username: username })
        .leftJoinAndSelect("user.persona", "person")
        .addSelect(["*"])
        .leftJoinAndSelect("user.rol", "rol")
        .addSelect(["*"])
        .getOne();
    if (!userFound) {
        return res.json({ message: "Usuario no existe" });
    }
    const valid = yield argon2.verify(userFound.password, password);
    if (!valid) {
        return res.json({ message: "Contraseña incorrecta" });
    }
    let payload = { id: userFound.id, username: userFound.username };
    const token = jwt.sign(payload, constants_js_1.__token__);
    return res.status(200).header("auth-token", token).json({ userFound, token });
});
exports.login = login;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userFound = yield repo
        .createQueryBuilder("user")
        .where("user.id = :id", { id: Number(id) })
        .leftJoinAndSelect("user.persona", "person")
        .addSelect(["*"])
        .leftJoinAndSelect("user.rol", "rol")
        .addSelect(["*"])
        .getOne();
    return res.status(200).json(userFound);
});
exports.getUserById = getUserById;
const getUserByRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rol } = req.params;
    const usersFound = yield User_js_1.Usuarios.find({
        where: { rolId: Number(rol) },
    });
    return res.status(200).json(usersFound);
});
exports.getUserByRol = getUserByRol;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usersFound = yield repo
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.persona", "person")
        .addSelect(["*"])
        .leftJoinAndSelect("user.rol", "rol")
        .addSelect(["*"])
        .getMany();
    return res.status(200).json(usersFound);
});
exports.getAllUsers = getAllUsers;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { persona, username, password, rolId } = req.body;
    const userFound = yield User_js_1.Usuarios.findOneBy({
        id: Number(id),
    });
    const personFound = yield Person_js_1.Persons.findOneBy({
        id: userFound === null || userFound === void 0 ? void 0 : userFound.personaId,
    });
    if (!personFound || !userFound)
        return res.json({
            success: false,
            message: "Usuario no existe",
        });
    const personaUpdate = yield Person_js_1.Persons.update({ id: personFound.id }, {
        nombre: persona.nombre,
        paterno: persona.paterno,
        materno: persona.materno,
        telefono: persona.telefono,
        edad: persona.edad,
    });
    const hashedPassword = yield argon2.hash(password);
    const result = yield User_js_1.Usuarios.update({ id: userFound.id }, {
        rolId: rolId,
        username: username,
        password: password !== "" ? hashedPassword : userFound.password,
    });
    return res.json({
        success: result.affected === 1,
        message: result.affected === 1
            ? "Usuario actualizado correctamente"
            : "Hubo un error al actualizar",
    });
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userFound = yield User_js_1.Usuarios.findOneBy({
        id: Number(id),
    });
    if (userFound) {
        try {
            const result = yield User_js_1.Usuarios.delete({
                id: Number(id),
            });
            const resultTwo = yield Person_js_1.Persons.delete({
                id: userFound.personaId,
            });
            return res.send(resultTwo.affected === 1
                ? "Usuario eliminado"
                : "Hubo un error al eliminar al Usuario");
        }
        catch (error) {
            return res.send({ error: "Hubo un error al eliminar al Usuario" });
        }
    }
    return res.send({ error: "Hubo un error al eliminar al Usuario" });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0NvbnRyb2xsZXJzL1VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHFEQUFnRDtBQUNoRCxpREFBK0M7QUFFL0MsK0NBQWlDO0FBQ2pDLGtEQUE2QztBQUM3QyxrREFBNEM7QUFFNUMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sSUFBSSxHQUFHLHlCQUFVLENBQUMsYUFBYSxDQUFDLGtCQUFRLENBQUMsQ0FBQztBQUNoRCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFcEIsTUFBTSxVQUFVLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDOUQsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFeEQsTUFBTSxTQUFTLEdBQUcsTUFBTSxtQkFBTyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07UUFDdEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO1FBQ3hCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTztRQUN4QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO0tBQzNCLENBQUMsQ0FBQztJQUVILE1BQU0sY0FBYyxHQUFHLE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRCxJQUFJO1FBQ0YsTUFBTSxVQUFVLEdBQUcsTUFBTSxrQkFBUSxDQUFDLElBQUksQ0FBQztZQUNyQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FB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