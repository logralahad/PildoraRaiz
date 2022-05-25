import File from "../models/File";
import httpClient from "./HttpClient";

const prefix = "/historial";

export default class FileService {
  static async createFile(file: File) {
    return (await httpClient.post(`${prefix}`, file)).data;
  }

  static async getAllFiles() {
    return (await httpClient.get(`${prefix}/`)).data;
  }

  static async getFileById(id: Number) {
    return (await httpClient.get(`${prefix}/getById/${id}`)).data;
  }

  static async getFileByPacientId(pacientId: Number) {
    return (await httpClient.get(`${prefix}/getByPacient/${pacientId}`)).data;
  }

  static async updateFile(file: File) {
    return (await httpClient.put(`${prefix}/${file.id}`, file)).data;
  }

  static async deleteFile(id: Number) {
    return (await httpClient.delete(`${prefix}/${id}`)).data;
  }
}
