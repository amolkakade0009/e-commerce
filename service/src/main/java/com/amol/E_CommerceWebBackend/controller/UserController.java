package com.amol.E_CommerceWebBackend.controller;

import com.amol.E_CommerceWebBackend.entity.User;
import com.amol.E_CommerceWebBackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:5173") // Allow only React app

public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("list-user")
    public ResponseEntity<List<User>> getAllUser(){
//        return userService.getAllUser();
        List<User> user = userService.getAllUser();
        return new ResponseEntity<>(user,HttpStatus.OK);
     }

     @PostMapping("login/{email}/{password}")
     public User login(@PathVariable String email , @PathVariable String password){
            return null;
     }


    @PostMapping("register")
    public ResponseEntity<User> register(@RequestBody User user){
        User user1= userService.SaveUser(user);
        return  new ResponseEntity<>(user1, HttpStatus.OK);
    }

}

