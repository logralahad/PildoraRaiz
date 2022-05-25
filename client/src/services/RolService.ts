import Rol from "../models/Rol";
import httpClient from "./HttpClient";

const prefix = "/roles";

export default class RolService {
  static async createRol(rol: Rol) {
    return (await httpClient.post(`${prefix}`, rol)).data;
  }

  static async updateRol(rol: Rol) {
    return (await httpClient.put(`${prefix}/${rol.id}`, rol)).data;
  }

  static async deleteRol(id: Number) {
    return (await httpClient.delete(`${prefix}/${id}`)).data;
  }

  static async deleteAllRoles() {
    return (await httpClient.delete(`${prefix}`)).data;
  }

  static async getAllRoles() {
    return (await httpClient.get(`${prefix}/`)).data;
  }

  static async getRolById(id: Number) {
    return (await httpClient.get(`${prefix}/${id}`)).data;
  }
}
