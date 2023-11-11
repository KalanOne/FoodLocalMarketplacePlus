package com.user.userservice.service;

import java.util.List;

import com.user.userservice.models.User;
import org.springframework.beans.factory.annotation.Autowired;

import com.user.userservice.repository.UserRepository;

public class UserServiceImpl {
    @Autowired
    private UserRepository userRepository;

    public List<User> getUsersActivo() {
        return userRepository.findByActivo(true);
    }

}
