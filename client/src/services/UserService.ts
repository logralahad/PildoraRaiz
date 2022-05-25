import User from "../models/User";
import httpClient from "./HttpClient";

const prefix = "/users";

export default class UserService {
  static async createUser(user: User) {
    return (await httpClient.post(`${prefix}`, user)).data;
  }

  static async updateUser(user: User) {
    return (await httpClient.put(`${prefix}/${user.id}`, user)).data;
  }

  static async deleteUser(id: Number) {
    return (await httpClient.delete(`${prefix}/${id}`)).data;
  }

  static async login(user: User) {
    return (await httpClient.post(`${prefix}/login`, user)).data;
  }

  static async getAllUsers() {
    return (await httpClient.get(`${prefix}/`)).data;
  }

  static async getById(id: Number) {
    return (await httpClient.get(`${prefix}/getById/${id}`)).data;
  }

  static async getByRol(rol: Number) {
    return (await httpClient.get(`${prefix}/getByRol/${rol}`)).data;
  }
}
