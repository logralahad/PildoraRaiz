import Consulta from "../models/Consultation";
import httpClient from "./HttpClient";

const prefix = "/consultas";

export default class ConsultasService {
  static async createConsulta(consulta: Consulta) {
    return (await httpClient.post(`${prefix}`, consulta)).data;
  }

  static async getAllConsultations() {
    return (await httpClient.get(`${prefix}/`)).data;
  }

  static async getConsultationById(id: Number) {
    return (await httpClient.get(`${prefix}/getById/${id}`)).data;
  }

  static async getConsultationsByPacientId(rol: Number) {
    return (await httpClient.get(`${prefix}/getAllByPacient/${rol}`)).data;
  }

  static async updateConsulta(consulta: Consulta) {
    return (await httpClient.put(`${prefix}/${consulta.id}`, consulta)).data;
  }

  static async deleteConsulta(id: Number) {
    return (await httpClient.delete(`${prefix}/${id}`)).data;
  }
}
