package com.sample.webapp.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @PostMapping("/login")
    Boolean logIn(String userName, String password) {
        System.out.println("userName: " + userName + " password: " + password);
        return false;
    }

}
