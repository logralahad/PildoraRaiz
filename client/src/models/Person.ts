interface PersonProperties {
  id?: number;
  nombre?: string;
  paterno?: string;
  materno?: string;
  edad?: number;
  telefono?: string;
}
export default class Person {
  id;
  nombre;
  paterno;
  materno;
  edad;
  telefono;

  constructor(properties: PersonProperties = {}) {
    this.id = properties.id;
    this.nombre = properties.nombre;
    this.paterno = properties.paterno;
    this.materno = properties.materno;
    this.edad = properties.edad;
    this.telefono = properties.telefono;
  }
}
