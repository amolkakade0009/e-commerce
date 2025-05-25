package com.amol.E_CommerceWebBackend.Service;

import com.amol.E_CommerceWebBackend.Entity.User;
import com.amol.E_CommerceWebBackend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepo;

    public List<User> getAllUser(){
//        return userRepo.findAll();
        List<User> user = userRepo.findAll();
        return  user;
    }

//    public User getUserByemail(String email){
//        userRepo.
//    }

    public User SaveUser(User user){
        return userRepo.save(user);
    }

}
