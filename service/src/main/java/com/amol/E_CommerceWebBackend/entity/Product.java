package com.amol.E_CommerceWebBackend.entity;


import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Table
@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String category;

    @Column
    private String subCategory;

    @Column
    private String brandName;

    @Column
    private double price;

    @Column
    private int discount;

    @Column
    private String description;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] image;


}
