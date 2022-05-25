import httpClient from "./HttpClient";

const prefix = "/imagenes";

export default class ImagenesService {
  static async upload(file: any) {
    let data = new FormData();
    data.append("foto", file);
    return (await httpClient.post(prefix, data)).data;
  }

  static async get(key: string) {
    return (await httpClient.get(prefix + "/" + key)).data;
  }

  static async delete(key: string) {
    return (await httpClient.delete(prefix + "/" + key)).data;
  }
}
