package com.amol.E_CommerceWebBackend.service;

import com.amol.E_CommerceWebBackend.entity.Product;
import com.amol.E_CommerceWebBackend.repository.ProductRepository;
import com.amol.E_CommerceWebBackend.repository.UserRepository;
import com.amol.E_CommerceWebBackend.request.SaveProductRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public Optional<Product> saveProduct(final SaveProductRequest request, final MultipartFile file) throws IOException {
        final var product = Product.builder()
                .name(request.name())
                .brandName(request.brandName())
                .image(file.getBytes())

                .price(request.price())
                .category(request.category())
                .subCategory(request.subCategory())
                .discount(request.discount())
                .description(request.description())
                .build();
        return Optional.of(productRepository.save(product));
    }


    public Page<Product> getProducts(int page , int size){
        return   productRepository.findAll(PageRequest.of(page, size));
    }

}
