import Paciente from "../models/Pacient";
import httpClient from "./HttpClient";

const prefix = "/pacientes";

export default class PacienteService {
  static async createPaciente(paciente: Paciente) {
    return (await httpClient.post(`${prefix}`, paciente)).data;
  }

  static async updatePaciente(paciente: Paciente) {
    return (await httpClient.put(`${prefix}/${paciente.id}`, paciente)).data;
  }

  static async deletePaciente(id: Number) {
    return (await httpClient.delete(`${prefix}/${id}`)).data;
  }

  static async getAllPacients() {
    return (await httpClient.get(`${prefix}/`)).data;
  }

  static async getPacientById(id: Number) {
    return (await httpClient.get(`${prefix}/getById/${id}`)).data;
  }

  static async getAllPacientsByUserId(userId: Number) {
    return (await httpClient.get(`${prefix}/getByUser/${userId}`)).data;
  }

  static async getAllPacientsWithFiles() {
    return (await httpClient.get(`${prefix}/WithFiles`)).data;
  }

  static async getAllPacientsWithoutFiles() {
    return (await httpClient.get(`${prefix}/WithoutFiles`)).data;
  }
}
