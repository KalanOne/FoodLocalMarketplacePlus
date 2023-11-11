package com.user.userservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class UserDTO {
    private Long id;

    private String nombre;

    private String apellido;

    private String email;

    private String password;

    private String telefono;

    private String direccion;

    private String ciudad;

    private String pais;

    private String codigoPostal;

    private String estado;

    private RolDTO rol;

    private boolean activo = true;
}
