import { body, param } from "express-validator";
import { db } from "../../utils/db";

export const createUsuarioRules = [
  body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
  body("apellido").notEmpty().withMessage("El apellido es obligatorio"),
  body("email").isEmail().withMessage("El email no es valido"),
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
  body("telefono").isLength({ min: 10, max: 10 }).withMessage("El telefono debe tener 10 digitos"),
  body("direccion").notEmpty().withMessage("La direccion es obligatoria"),
  body("ciudad").notEmpty().withMessage("La ciudad es obligatoria"),
  body("codigoPostal").isLength({ min: 5, max: 5 }).withMessage("El codigo postal debe tener 5 digitos"),
  body("estado").notEmpty().withMessage("El estado es obligatorio"),
  body("pais").notEmpty().withMessage("El pais es obligatorio"),
  body("profilePic").notEmpty().withMessage("La foto de perfil es obligatoria"),
];

export const getUsuarioRules = [param("email").isEmail()];

export const loginUsuarioRules = [body("email").isEmail(), body("password").notEmpty()];
