package com.amol.E_CommerceWebBackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@Data
@Entity
@Table
@ToString
public class User {
    @Id
    private int id;
    @Column
    private String name;
    @Column
    private String email;
    @Column
    private String role;
    @Column
    private String password;
}
