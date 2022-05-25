import Person from "./Person";

interface PacientProperties {
  id?: number;
  userId?: number;
  personaId?: number;
  calle?: string;
  colonia?: string;
  int?: string;
  ext?: string;
  img?: string;
  hasFile?: boolean;
  persona?: Person;
}
export default class Pacient {
  id;
  userId;
  personaId;
  calle;
  colonia;
  int;
  ext;
  img;
  hasFile;
  persona;

  constructor(properties: PacientProperties = {}) {
    this.id = properties.id;
    this.personaId = properties.personaId;
    this.userId = properties.userId;
    this.calle = properties.calle;
    this.colonia = properties.colonia;
    this.int = properties.int;
    this.ext = properties.ext;
    this.img = properties.img;
    this.hasFile = properties.hasFile;
    this.persona = properties.persona;
  }

  fullName(): string {
    return `${this.persona?.nombre!} ${this.persona?.paterno!} ${this.persona
      ?.materno!}`;
  }
}
