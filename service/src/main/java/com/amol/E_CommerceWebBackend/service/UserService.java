package com.amol.E_CommerceWebBackend.service;

import com.amol.E_CommerceWebBackend.dto.UserInfo;
import com.amol.E_CommerceWebBackend.entity.User;
import com.amol.E_CommerceWebBackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService{
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepo;

    public List<User> getAllUser(){
        List<User> user = userRepo.findAll();
        return  user;
    }

    public User getUserByemail(String email){
       return userRepo.findByEmail(email);
    }

    public User SaveUser(User user){
        User user1 = getUserByemail(user.getEmail());
        if (user1 != null){
            return null;
        }else{
        final var encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userRepo.save(user);
        }
    }


    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        final var user = userRepo.findByEmail(username);
        return new UserInfo(user);
    }
}
