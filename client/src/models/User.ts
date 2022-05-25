import Person from "./Person";
import Rol from "./Rol";

interface UserProperties {
  id?: number;
  personaId?: number;
  rolId?: number;
  username?: string;
  password?: string;
  rol?: Rol;
  persona?: Person;
}
export default class User {
  id;
  personaId;
  rolId;
  username;
  password = "";
  rol;
  persona;

  constructor(properties: UserProperties = {}) {
    this.id = properties.id;
    this.personaId = properties.personaId;
    this.rolId = properties.rolId;
    this.username = properties.username;
    this.rol = properties.rol;
    this.persona = properties.persona;
  }

  fullName(): string {
    return `${this.persona?.nombre!} ${this.persona?.paterno!} ${this.persona
      ?.materno!}`;
  }

  isAdmin() {
    return this.rol?.nombre === "Administrador";
  }
}
