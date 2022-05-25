interface RolProperties {
  id?: number;
  nombre?: string;
  descripcion?: string;
  canCreate?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
}
export default class Rol {
  id;
  nombre;
  descripcion;
  canCreate;
  canEdit;
  canDelete;

  constructor(properties: RolProperties = {}) {
    this.id = properties.id;
    this.nombre = properties.nombre;
    this.descripcion = properties.descripcion;
    this.canCreate = properties.canCreate;
    this.canEdit = properties.canEdit;
    this.canDelete = properties.canDelete;
  }
}
