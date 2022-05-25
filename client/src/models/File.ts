interface FileProperties {
  id?: number;
  pacienteId?: number;
  enfermedadActual?: string;
  antecedentes?: string;
  evolucion?: string;
  anamnesis?: string;
  exploracion?: string;
  tratamiento?: string;
}
export default class File {
  id;
  pacienteId;
  enfermedadActual;
  antecedentes;
  evolucion;
  anamnesis;
  exploracion;
  tratamiento;

  constructor(properties: FileProperties = {}) {
    this.id = properties.id;
    this.pacienteId = properties.pacienteId;
    this.enfermedadActual = properties.enfermedadActual;
    this.antecedentes = properties.antecedentes;
    this.evolucion = properties.evolucion;
    this.anamnesis = properties.anamnesis;
    this.exploracion = properties.exploracion;
    this.tratamiento = properties.tratamiento;
  }
}
