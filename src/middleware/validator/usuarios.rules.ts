import { body, param } from "express-validator";
import { db } from "../../utils/db";

export const createUsuarioRules = [
  body("nombre").notEmpty(),
  body("apellido").notEmpty(),
  body("email").isEmail(),
  body("email").custom((value: string) => {
    return db.usuario
      .findUnique({
        where: {
          email: value,
        },
      })
      .then((usuario) => {
        if (usuario) {
          throw new Error("El email ya esta registrado");
        }
      });
  }),
  body("email").custom((value: string) => {
    return db.proveedor
      .findUnique({
        where: {
          email: value,
        },
      })
      .then((proveedor) => {
        if (proveedor) {
          throw new Error("El email ya esta registrado");
        }
      });
  }),
  body("password").notEmpty(),
  body("password")
    .matches(
      /^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*[^a-zA-Z0-9].*[^a-zA-Z0-9])(?=.*\d.*\d.*\d)(?!.*([a-zA-Z0-9])\1{2,}).{10,}$/
    )
    .withMessage(
      "El password debe ser de minimo 10 caracteres, tener al menos 2 mayusculas, 2 minusculas, 3 numeros y 2 caracteres especiales"
    ),
  body("telefono").isLength({ min: 10, max: 10 }),
  body("direccion").notEmpty(),
  body("ciudad").notEmpty(),
  body("codigoPostal").isLength({ min: 5, max: 5 }),
  body("estado").notEmpty(),
  body("pais").notEmpty(),
  body("profilePic").notEmpty(),
];

export const getUsuarioRules = [param("email").isEmail()];

export const loginUsuarioRules = [body("email").isEmail(), body("password").notEmpty()];
