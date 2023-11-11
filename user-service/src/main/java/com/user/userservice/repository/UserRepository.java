package com.user.userservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.user.userservice.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
    public List<User> findByActivo(boolean activo);
}
