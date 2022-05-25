interface ConsultationProperties {
  id?: number;
  pacienteId?: number;
  motivo?: string;
  duracion?: number;
  sintomas?: string;
  cronologia?: string;
}

export default class Consultation {
  id;
  pacienteId;
  motivo;
  duracion;
  sintomas;
  cronologia;

  constructor(properties: ConsultationProperties = {}) {
    this.id = properties.id;
    this.pacienteId = properties.pacienteId;
    this.motivo = properties.motivo;
    this.duracion = properties.duracion;
    this.sintomas = properties.sintomas;
    this.cronologia = properties.cronologia;
  }
}
