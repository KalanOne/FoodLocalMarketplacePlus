package com.user.userservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user.userservice.dto.UserDTO;
import com.user.userservice.models.User;
import com.user.userservice.service.UserServiceImpl;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class Controller {

    @Autowired
    private UserServiceImpl userServiceImpl;

    @GetMapping
    public ResponseEntity<?> getUsers() {
        List<User> users = userServiceImpl.getUsersActivo();
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id) {
        return new ResponseEntity<String>("Usuario ID", HttpStatus.OK);

    }

    @PostMapping
    public ResponseEntity<?> postUser(@RequestBody UserDTO user) {
        return new ResponseEntity<String>("Usuario Post", HttpStatus.OK);

    }

    @PutMapping("/{id}")
    public ResponseEntity<?> putUser(@PathVariable Long id, @ModelAttribute UserDTO user) {
        return new ResponseEntity<String>("Usuario Put", HttpStatus.OK);

    }

}
