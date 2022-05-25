import { Request, Response } from "express";
import { Roles } from "../Entities/Rol";

export const createRol = async (req: Request, res: Response) => {
  const { nombre, descripcion, canCreate, canEdit, canDelete } = req.body;

  const result = await Roles.save({
    nombre: nombre,
    descripcion: descripcion,
    canCreate: canCreate,
    canEdit: canEdit,
    canDelete: canDelete,
  });

  return res.send("Rol registrado.");
};

export const getRolById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rolFound = await Roles.findOneBy({ id: Number(id) });
  return res.json(rolFound);
};

export const getAllRoles = async (req: Request, res: Response) => {
  const rolesFound = await Roles.find();
  return res.json(rolesFound);
};

export const updateRol = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nombre, descripcion, canCreate, canEdit, canDelete } = req.body;

  const rolFound = await Roles.findOneBy({
    id: Number(id),
  });

  if (!rolFound)
    return res.json({
      success: false,
      message: "Rol no existe",
    });

  const result = await Roles.update(
    { id: Number(id) },
    {
      nombre: nombre,
      descripcion: descripcion,
      canCreate: canCreate,
      canEdit: canEdit,
      canDelete: canDelete,
    }
  );

  return res.json({
    success: result.affected === 1,
    message:
      result.affected === 1
        ? "Rol actualizado correctamente"
        : "Hubo un error al actualizar",
  });
};

export const deleteRol = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await Roles.delete({
    id: Number(id),
  });
  return res.send(
    result.affected === 1 ? "Rol eliminado" : "Hubo un error al eliminar el Rol"
  );
};

export const deleteAllRoles = async (req: Request, res: Response) => {
  const allRoles = await Roles.find();
  const result = await Roles.remove(allRoles);
  return res.send(
    result.length > 0
      ? "Roles eliminados"
      : "Hubo un error al eliminar los Roles"
  );
};
